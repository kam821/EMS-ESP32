#include "NetworkSettingsService.h"

static bool formatBssid(const String& bssid, uint8_t (&mac)[6]) {
    uint tmp[6];
    if (bssid.isEmpty() || sscanf(bssid.c_str(), "%X:%X:%X:%X:%X:%X", &tmp[0], &tmp[1], &tmp[2], &tmp[3], &tmp[4], &tmp[5]) != 6) {
        return false;
    }
    for (uint8_t i = 0; i < 6; i++) {
        mac[i] = static_cast<uint8_t>(tmp[i]);
    }
    return true;
}

NetworkSettingsService::NetworkSettingsService(AsyncWebServer * server, FS * fs, SecurityManager * securityManager)
    : _httpEndpoint(NetworkSettings::read, NetworkSettings::update, this, server, NETWORK_SETTINGS_SERVICE_PATH, securityManager)
    , _fsPersistence(NetworkSettings::read, NetworkSettings::update, this, fs, NETWORK_SETTINGS_FILE)
    , _lastConnectionAttempt(0)
    , _stopping(false) {
    addUpdateHandler([this](const String & originId) { reconfigureWiFiConnection(); }, false);
    WiFi.onEvent([this](WiFiEvent_t event, WiFiEventInfo_t) { WiFiEvent(event); });
}

void NetworkSettingsService::begin() {
    // We want the device to come up in opmode=0 (WIFI_OFF), when erasing the flash this is not the default.
    // If needed, we save opmode=0 before disabling persistence so the device boots with WiFi disabled in the future.
    if (WiFi.getMode() != WIFI_OFF) {
        WiFi.mode(WIFI_OFF);
    }

    // Disable WiFi config persistance and auto reconnect
    WiFi.persistent(false);
    WiFi.setAutoReconnect(false);

    WiFi.mode(WIFI_MODE_MAX);
    WiFi.mode(WIFI_MODE_NULL);
    // WiFi.setScanMethod(WIFI_ALL_CHANNEL_SCAN);     // default is FAST_SCAN, connect issues in 2.0.14
    // WiFi.setSortMethod(WIFI_CONNECT_AP_BY_SIGNAL); // is default, no need to set

    _fsPersistence.readFromFS();
    // reconfigureWiFiConnection();
}

void NetworkSettingsService::reconfigureWiFiConnection() {
    // do not disconnect for switching to eth, restart is needed
    if (WiFi.isConnected() && _state.ssid.length() == 0) {
        return;
    }
    // disconnect and de-configure wifi
    if (WiFi.disconnect(true)) {
        _stopping = true;
    }
}

void NetworkSettingsService::loop() {
    unsigned long currentMillis = millis();
    if (!_lastConnectionAttempt || static_cast<uint32_t>(currentMillis - _lastConnectionAttempt) >= WIFI_RECONNECTION_DELAY) {
        _lastConnectionAttempt = currentMillis;
        manageSTA();
    }
}

void NetworkSettingsService::manageSTA() {
    // Abort if already connected, or if we have no SSID
    if (WiFi.isConnected() || _state.ssid.length() == 0) {
        return;
    }

    // Connect or reconnect as required
    if ((WiFi.getMode() & WIFI_STA) == 0) {
        if (_state.staticIPConfig) {
            WiFi.config(_state.localIP, _state.gatewayIP, _state.subnetMask, _state.dnsIP1, _state.dnsIP2); // configure for static IP
        }
        WiFi.setHostname(_state.hostname.c_str()); // set hostname

        // www.esp32.com/viewtopic.php?t=12055
        if (_state.bandwidth20) {
            esp_wifi_set_bandwidth(static_cast<wifi_interface_t>(ESP_IF_WIFI_STA), WIFI_BW_HT20);
        } else {
            esp_wifi_set_bandwidth(static_cast<wifi_interface_t>(ESP_IF_WIFI_STA), WIFI_BW_HT40);
        }
        if (_state.nosleep) {
            WiFi.setSleep(false); // turn off sleep - WIFI_PS_NONE
        }
        // attempt to connect to the network
        uint8_t bssid[6];
        if (formatBssid(_state.bssid, bssid)) {
            WiFi.begin(_state.ssid.c_str(), _state.password.c_str(), 0, bssid);
        } else {
            WiFi.begin(_state.ssid.c_str(), _state.password.c_str());
        }
        // set power after wifi is startet, fixed value for C3_V1
#ifdef BOARD_C3_MINI_V1
        // v1 needs this value, see https://github.com/emsesp/EMS-ESP32/pull/620#discussion_r993173979
        WiFi.setTxPower(WIFI_POWER_8_5dBm); // https://www.wemos.cc/en/latest/c3/c3_mini_1_0_0.html#about-wifi
#else
        // esp_wifi_set_max_tx_power(_state.tx_power * 4);
        WiFi.setTxPower(static_cast<wifi_power_t>(_state.tx_power * 4));
#endif
    } else { // not connected but STA-mode active => disconnect
        reconfigureWiFiConnection();
    }
}

// handles if wifi stopped
void NetworkSettingsService::WiFiEvent(WiFiEvent_t event) {
    if (event == ARDUINO_EVENT_WIFI_STA_STOP) {
        if (_stopping) {
            _lastConnectionAttempt = 0;
            _stopping              = false;
        }
    }
    // if (!_stopping && (event == ARDUINO_EVENT_WIFI_STA_LOST_IP || event == ARDUINO_EVENT_WIFI_STA_DISCONNECTED)) {
    //     reconfigureWiFiConnection();
    // }
}
