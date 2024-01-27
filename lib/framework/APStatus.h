#ifndef APStatus_h
#define APStatus_h

#include "APSettingsService.h"
#include "SecurityManager.h"

#include <ArduinoJson.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <IPAddress.h>
#include <WiFi.h>

// #define MAX_AP_STATUS_SIZE 1024
#define AP_STATUS_SERVICE_PATH "/rest/apStatus"

class APStatus {
  public:
    APStatus(AsyncWebServer * server, SecurityManager * securityManager, APSettingsService * apSettingsService);

  private:
    APSettingsService * _apSettingsService;
    void                apStatus(AsyncWebServerRequest * request);
};

#endif
