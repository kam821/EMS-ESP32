import type { Translation } from '../i18n-types';
/* prettier-ignore */
/* eslint-disable */

const de: Translation = {
  LANGUAGE: 'Sprache',
  RETRY: 'Neuer Versuch',
  LOADING: 'Laden',
  IS_REQUIRED: '{0} ist erforderlich',
  SIGN_IN: 'Einloggen',
  SIGN_OUT: 'Ausloggen',
  USERNAME: 'Nutzername',
  PASSWORD: 'Passwort',
  SU_PASSWORD: 'su Passwort',
  DASHBOARD: 'Kontrollzentrum',
  SETTINGS_OF: '{0} Einstellungen',
  SAVED: 'gespeichert',
  HELP_OF: '{0} Hilfe',
  LOGGED_IN: 'Eingeloggt als {name}',
  PLEASE_SIGNIN: 'Bitte einloggen, um fortzufahren',
  UPLOAD_SUCCESSFUL: 'Hochladen erfolgreich',
  DOWNLOAD_SUCCESSFUL: 'Herunterladen erfolgreich',
  INVALID_LOGIN: 'Ungültige Login Daten',
  NETWORK: 'Netzwerk',
  SECURITY: 'Sicherheit',
  ONOFF_CAP: 'AN/AUS',
  ONOFF: 'an/aus',
  TYPE: 'Typ',
  DESCRIPTION: 'Bezeichnung',
  ENTITIES: 'Entitäten',
  REFRESH: 'Aktualisieren',
  EXPORT: 'Exportieren',
  DEVICE_DETAILS: 'Geräte Details',
  BRAND: 'Marke',
  ID_OF: '{0} ID',
  DEVICE: 'Geräte',
  PRODUCT: 'Produkt',
  VERSION: 'Version',
  ENTITY_NAME: 'Entitätsname',
  VALUE: '{{Wert|wert}}',
  SHOW_FAV: 'nur Favoriten anzeigen',
  DEVICE_SENSOR_DATA: 'Geräte- und Sensordaten',
  DEVICES_SENSORS: 'Geräte & Sensoren',
  ATTACHED_SENSORS: 'Angeschlossene EMS-ESP Sensoren',
  RUN_COMMAND: 'Befehl ausführen',
  CHANGE_VALUE: 'Wert ändern',
  CANCEL: 'Abbrechen',
  RESET: 'Zurücksetzen',
  SEND: 'Senden',
  SAVE: 'Speichern',
  REMOVE: 'Entfernen',
  PROBLEM_UPDATING: 'Problem beim Aktualisieren',
  PROBLEM_LOADING: 'Problem beim Laden',
  ACCESS_DENIED: 'Zugriff abgelehnt',
  ANALOG_SENSOR: 'Analogsensor',
  ANALOG_SENSORS: 'Analogsensoren',
  UPDATED_OF: '{0} Aktualisiert',
  UPDATE_OF: '{0} Aktualisieren',
  REMOVED_OF: '{0} Entfernt',
  DELETION_OF: '{0} Löschung',
  OFFSET: 'Addition',
  FACTOR: 'Faktor',
  FREQ: 'Frequenz',
  DUTY_CYCLE: 'Duty Cycle',
  UNIT: 'UoM',
  STARTVALUE: 'Startwert',
  WARN_GPIO: 'Warnung: Vorsicht bei der korrekten Wahl des GPIO!',
  EDIT: 'Editiere',
  SENSOR: 'Sensor',
  TEMP_SENSOR: 'Temperatursensor',
  TEMP_SENSORS: 'Temperatursensoren',
  WRITE_CMD_SENT: 'Befehl schreiben wurde gesendet',
  WRITE_CMD_FAILED: 'Befehl schreiben failed', // TODO
  EMS_BUS_WARNING: 'EMS-Bus getrennt. Wenn diese Warnung nach einigen Sekunden immer noch besteht, überprüfen Sie bitte die Einstellungen und das Board-Profil',
  EMS_BUS_SCANNING: 'Suche nach EMS Geräten...',
  CONNECTED: 'Verbunden',
  TX_ISSUES: 'Tx-Probleme - versuchen Sie einen anderen Tx-Modus',
  DISCONNECTED: 'Getrennt',
  EMS_SCAN: 'Möchten Sie wirklich eine vollständige Gerätesuche des EMS-Busses starten?',
  EMS_BUS_STATUS: 'EMS-Busstatus',
  ACTIVE_DEVICES: 'Aktive Geräte und Sensoren',
  EMS_DEVICE: 'EMS Gerät',
  SUCCESS: 'ERFOLG',
  FAIL: 'FEHLER',
  QUALITY: 'QUALITÄT',
  SCAN_DEVICES: 'Nach neuen Geräten suchen',
  EMS_BUS_STATUS_TITLE: 'EMS-Bus- und Aktivitätsstatus',
  SCAN: 'Suche',
  STATUS_NAMES: [
    'EMS-Telegramme empfangen (Rx)',
    'EMS-Telegramme gelesen (Tx)',
    'EMS-Telegramme geschrieben (Tx)',
    'Temperatursensoren gelesen',
    'Analogsensoren gelesen',
    'MQTT-Nachrichten gesendet',
    'API-Aufrufe',
    'Syslog-Mitteilungen'
  ],
  NUM_DEVICES: '{num} Gerät{{e}}',
  NUM_TEMP_SENSORS: '{num} Temperatursensor{{en}}',
  NUM_ANALOG_SENSORS: '{num} Analogsensor{{en}}',
  NUM_DAYS: '{num} Tag{{e}}',
  NUM_SECONDS: '{num} Sekunde{{n}}',
  NUM_HOURS: '{num} Stunde{{n}}',
  NUM_MINUTES: '{num} Minute{{n}}',
  APPLICATION_SETTINGS: 'Anwendungseinstellungen',
  CUSTOMIZATION: 'Anpassungen',
  APPLICATION_RESTARTING: 'EMS-ESP startet neu',
  INTERFACE_BOARD_PROFILE: 'Interface Platinenprofil',
  BOARD_PROFILE_TEXT: 'Wählen Sie ein vorkonfiguriertes Platinenprofil aus der Liste unten aus oder wählen Sie "Custom", um Ihre eigenen Hardwareeinstellungen zu konfigurieren',
  BOARD_PROFILE: 'Platinenprofil',
  CUSTOM: 'Custom',
  GPIO_OF: '{0} GPIO',
  BUTTON: 'Taste',
  TEMPERATURE: 'Temperatur',
  PHY_TYPE: 'Eth PHY Typ',
  DISABLED: 'deaktiviert',
  TX_MODE: 'Tx Modus',
  HARDWARE: 'Hardware',
  EMS_BUS: '{{BUS|EMS BUS}}',
  GENERAL_OPTIONS: 'Allgemeine Optionen',
  LANGUAGE_ENTITIES: 'Sprache (für Geräteentitäten)',
  HIDE_LED: 'LED ausblenden',
  ENABLE_TELNET: 'Aktiviere Telnet Konsole',
  ENABLE_ANALOG: 'Aktiviere Analogsensoren',
  CONVERT_FAHRENHEIT: 'Konvertiere Temperaturwerte in Fahrenheit',
  BYPASS_TOKEN: 'Zugriffstoken-Autorisierung bei API-Aufrufen umgehen',
  READONLY: 'Nur-Lese-Modus aktivieren (blockiert alle ausgehenden EMS Tx Write-Befehle)',
  UNDERCLOCK_CPU: 'CPU-Geschwindigkeit untertakten',
  ENABLE_SHOWER_TIMER: 'Duschtimer aktivieren',
  ENABLE_SHOWER_ALERT: 'Duschalarm aktivieren',
  TRIGGER_TIME: 'Auslösezeit',
  COLD_SHOT_DURATION: 'Kaltschussdauer',
  FORMATTING_OPTIONS: 'Formatierungsoptionen',
  BOOLEAN_FORMAT_DASHBOARD: 'Boolsches Format für Web',
  BOOLEAN_FORMAT_API: 'Boolesches Format API/MQTT',
  ENUM_FORMAT: 'Enum Format API/MQTT',
  INDEX: 'Index',
  ENABLE_PARASITE: 'Parasitäre Stomversorgung',
  LOGGING: 'Protokollierung',
  LOG_HEX: 'EMS-Telegramme hexadezimal protokollieren',
  ENABLE_SYSLOG: 'Syslog aktivieren',
  LOG_LEVEL: 'Log Level',
  MARK_INTERVAL: 'Intervallmarke',
  SECONDS: 'Sekunden',
  MINUTES: 'Minuten',
  HOURS: 'Stunden',
  RESTART: 'Neu starten',
  RESTART_TEXT: 'EMS-ESP muss neu gestartet werden, um geänderte Systemeinstellungen zu übernehmen',
  RESTART_CONFIRM: 'EMS-ESP wirklich neu starten?',
  COMMAND: 'Befehl',
  CUSTOMIZATIONS_RESTART: 'Alle Anpassungen wurden entfernt. Neustart...',
  CUSTOMIZATIONS_FULL: 'Ausgewählte Entitäten haben das Limit überschritten. Bitte stapelweise speichern',
  CUSTOMIZATIONS_SAVED: 'Anpassungen gespeichert',
  CUSTOMIZATIONS_HELP_1: 'Wählen Sie ein Gerät aus und passen Sie die Entitäten mithilfe der Optionen an',
  CUSTOMIZATIONS_HELP_2: 'als Favorit markieren',
  CUSTOMIZATIONS_HELP_3: 'Schreibaktion deaktivieren',
  CUSTOMIZATIONS_HELP_4: 'von MQTT und API ausschließen',
  CUSTOMIZATIONS_HELP_5: 'Aus dem Kontrollzentrum ausblenden',
  SELECT_DEVICE: 'Wählen Sie ein Gerät aus',
  SET_ALL: 'setzen Sie alle',
  OPTIONS: 'Optionen',
  NAME: 'Name',
  CUSTOMIZATIONS_RESET: 'Möchten Sie wirklich alle Anpassungen entfernen, einschließlich der benutzerdefinierten Einstellungen der Temperatur- und Analogsensoren?',
  DEVICE_ENTITIES: 'Geräteentitäten',
  USER_CUSTOMIZATION: 'Benutzeranpassung',
  SUPPORT_INFORMATION: 'Unterstützende Informationen',
  CLICK_HERE: 'Hier klicken',
  HELP_INFORMATION_1: 'EMS-ESP Konfigurationsanweisungen und mehr finden Sie im Online-Wiki',
  HELP_INFORMATION_2: 'Für einen Live-Community-Chat besuchen Sie unseren Discord-Server',
  HELP_INFORMATION_3: 'Um neue Funktionen anzufragen oder Fehler zu melden, eröffnen Sie ein Issue auf Github',
  HELP_INFORMATION_4: 'Bitte laden Sie die System-Details und hängen Sie sie an das Support-Issue an. ',
  HELP_INFORMATION_5: 'EMS-ESP ist ein freies Open-Source Projekt. Bitte unterstützen Sie die zukünftige Entwicklung mit einem "Star" auf Github!',
  SUPPORT_INFO: 'Support Info',
  UPLOAD_OF: '{0} Hochladen',
  UPLOAD: 'Hochladen',
  DOWNLOAD: 'Herunterladen',
  ABORTED: 'abgebrochen',
  FAILED: 'gescheitert',
  SUCCESSFUL: 'erfolgreich',
  SYSTEM: 'System',
  LOG_OF: '{0} Log',
  STATUS_OF: '{0} Status',
  UPLOAD_DOWNLOAD: 'Hoch-/Herunterladen',
  SYSTEM_VERSION_RUNNING: 'Sie verwenden die Version',
  SYSTEM_APPLY_FIRMWARE: 'um die neue Firmware anzuwenden',
  CLOSE: 'Schließen',
  USE: 'Verwenden Sie',
  FACTORY_RESET: 'Werkseinstellung',
  SYSTEM_FACTORY_TEXT: 'EMS-ESP wurde auf Werkseinstellung gesetzt und startet als Zugangspunkt neu',
  SYSTEM_FACTORY_TEXT_DIALOG: 'Sind Sie sicher alle Einstellungen auf Werkseinstellung zu setzen?',
  VERSION_CHECK: 'Versionsprüfung',
  THE_LATEST: 'Die neueste',
  OFFICIAL: 'offizielle',
  DEVELOPMENT: 'Entwicklungs',
  VERSION_IS: 'Version ist',
  RELEASE_NOTES: 'Versionshinweise',
  EMS_ESP_VER: 'EMS-ESP Version',
  PLATFORM: 'Platform (Platform / SDK)',
  UPTIME: 'System Betriebszeit',
  CPU_FREQ: 'CPU Frequenz',
  HEAP: 'freier RAM Speicher (Gesamt / max. Block)',
  PSRAM: 'PSRAM (Größe / Frei)',
  FLASH: 'Flash Speicher (Größe / Geschwindigkeit)',
  APPSIZE: 'Programm (Genutzt / Frei)',
  FILESYSTEM: 'Dateisystem (Genutzt / Frei)',
  BUFFER_SIZE: 'max. Puffergröße',
  COMPACT: 'Kompakte Darstellung',
  ENABLE_OTA: 'OTA Updates verwenden',
  DOWNLOAD_CUSTOMIZATION_TEXT: 'Herunterladen der individuellen Entitätsanpassungen',
  DOWNLOAD_SETTINGS_TEXT: 'Herunterladen der Anwendungseinstellungen. Vorsicht beim Teilen der Einstellungen, da sie Passwörter und andere sensitive Einstellungen enthalten',
  UPLOAD_TEXT: 'Hochladen von neuer Firmware (.bin), Geräte- oder Entitätseinstellungen (.json), zur optionalen Validitätsprüfung zuerst die (.md5) Datei hochladen',
  UPLOADING: 'Hochladen',
  UPLOAD_DROP_TEXT: 'Klicken Sie hier, oder ziehen eine Datei hierher',
  ERROR: 'Unerwarteter Fehler, bitter versuchen Sie es erneut',
  TIME_SET: 'Zeit gesetzt',
  MANAGE_USERS: 'Nutzerverwaltung',
  IS_ADMIN: 'ist Admin',
  USER_WARNING: 'Sie müssen mindestens einen Admin-Nutzer konfigurieren',
  ADD: 'Hinzufügen',
  ACCESS_TOKEN_FOR: 'Zugangs-Token für',
  ACCESS_TOKEN_TEXT: 'Dieses Token ist für REST API Aufrufe bestimmt, die eine Authentifizierung benötigen. Es kann entweder als Bearer Token im `Authorization-Header` oder in der Access_Token URL verwendet werden.',
  GENERATING_TOKEN: 'Erzeuge Token',
  USER: 'Nutzer',
  MODIFY: 'Ändern',
  SU_TEXT: 'Das su (super user) Passwort wird zum Signieren der Authentifikations-Tokens verwendet und ermöglicht Admin-Berechtigung in der Konsole.',
  NOT_ENABLED: 'Nicht aktiviert',
  ERRORS_OF: '{0} Fehler',
  DISCONNECT_REASON: 'Grund der Verbindungsunterbrechung',
  ENABLE_MQTT: 'MQTT aktivieren',
  BROKER: 'Broker',
  CLIENT: 'Client',
  BASE_TOPIC: 'Base',
  OPTIONAL: 'Optional',
  FORMATTING: 'Formattierung',
  MQTT_FORMAT: 'Topic/Payload Format',
  MQTT_NEST_1: 'Als Nester in in einem Gesamttopic',
  MQTT_NEST_2: 'Als einzelne Topics',
  MQTT_RESPONSE: 'Veröffentliche die Kommandoantwort als `response` Topic',
  MQTT_PUBLISH_TEXT_1: 'Veröffentliche einzelne Werte bei Veränderung als eigene Topics',
  MQTT_PUBLISH_TEXT_2: 'Veröffentliche als Kommando-Topic (ioBroker)',
  MQTT_PUBLISH_TEXT_3: 'Aktiviere `MQTT Discovery` (Home Assistant, Domoticz)',
  MQTT_PUBLISH_TEXT_4: 'Prefix für die `Discovery`-Topics',
  MQTT_PUBLISH_INTERVALS: 'Veröffentlichungs-Intervalle',
  MQTT_INT_BOILER: 'Boiler und Wärmepumpen',
  MQTT_INT_THERMOSTATS: 'Thermostate',
  MQTT_INT_SOLAR: 'Solarmodule',
  MQTT_INT_MIXER: 'Mischermodule',
  MQTT_INT_HEARTBEAT: 'Heartbeat',
  MQTT_QUEUE: 'MQTT Queue',
  DEFAULT: 'Standard',
  MQTT_ENTITY_FORMAT: 'Entitäts-ID Format',
  MQTT_ENTITY_FORMAT_0: 'Einzelinstanz, Langname (v3.4)',
  MQTT_ENTITY_FORMAT_1: 'Einzelinstanz, MQTT-Namen',
  MQTT_ENTITY_FORMAT_2: 'Mehrfachinstanzen, MQTT-Namen',
  MQTT_CLEAN_SESSION: 'Setze `Clean Session`',
  MQTT_RETAIN_FLAG: 'Setze `Retain flag` immer',
  INACTIVE: 'Inaktiv',
  ACTIVE: 'Aktiv',
  UNKNOWN: 'Unbekannt',
  SET_TIME: 'Zeiteinstellung',
  SET_TIME_TEXT: 'Geben Sie das lokale Datum und die Zeit ein',
  LOCAL_TIME: 'Lokalzeit',
  UTC_TIME: 'UTC Zeit',
  ENABLE_NTP: 'Aktiviere NTP',
  NTP_SERVER: 'NTP Server',
  TIME_ZONE: 'Zeitzone',
  ACCESS_POINT: 'Zugangspunkt',
  AP_PROVIDE: 'Aktiviere Zugangspunkt',
  AP_PROVIDE_TEXT_1: 'Immer',
  AP_PROVIDE_TEXT_2: 'Wenn WiFi nicht verbunden',
  AP_PROVIDE_TEXT_3: 'Niemals',
  AP_PREFERRED_CHANNEL: 'Bevorzugter Kanal',
  AP_HIDE_SSID: 'Verstecke SSID',
  AP_CLIENTS: 'AP-Klienten',
  AP_MAX_CLIENTS: 'Max Anzahl AP-Klienten',
  AP_LOCAL_IP: 'Lokale IP',
  NETWORK_SCAN: 'Suche nach WiFi Netzwerken',
  IDLE: 'Leerlauf',
  LOST: 'Verloren',
  SCANNING: 'Suche',
  SCAN_AGAIN: 'Erneute Suche',
  NETWORK_SCANNER: 'Netzwerk Suche',
  NETWORK_NO_WIFI: 'Keine WiFi Netzwerke gefunden',
  NETWORK_BLANK_SSID: 'Freilassen um WiFi zu deaktivieren',
  TX_POWER: 'Tx Leistung',
  HOSTNAME: 'Hostname',
  NETWORK_DISABLE_SLEEP: 'Deaktiviere WiFi Schlafmodus',
  NETWORK_LOW_BAND: 'Verwende niedrige WiFi Bandbreite',
  NETWORK_USE_DNS: 'Aktiviere mDNS Service',
  NETWORK_ENABLE_CORS: 'Aktiviere CORS',
  NETWORK_CORS_ORIGIN: 'CORS origin',
  NETWORK_ENABLE_IPV6: 'Aktiviere IPv6 Unterstützung',
  NETWORK_FIXED_IP: 'Feste IP Adresse',
  NETWORK_GATEWAY: 'Gateway',
  NETWORK_SUBNET: 'Subnetz Maske',
  NETWORK_DNS: 'DNS Server',
  ADDRESS_OF: '{0} Adresse',
  ADMIN: 'Administrator',
  GUEST: 'Gast',
  NEW: 'Neuer',
  NEW_NAME_OF: 'Ändere {0}',
  ENTITY: 'Entität',
  MIN: 'min',
  MAX: 'max'
};

export default de;
