#ifndef SystemStatus_h
#define SystemStatus_h

#include "SecurityManager.h"

#include <ArduinoJson.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <FS.h>
#include <LittleFS.h>
#include <WiFi.h>

// #define MAX_ESP_STATUS_SIZE 1024
#define SYSTEM_STATUS_SERVICE_PATH "/rest/systemStatus"

class SystemStatus {
  public:
    SystemStatus(AsyncWebServer * server, SecurityManager * securityManager);

  private:
    void systemStatus(AsyncWebServerRequest * request);
};

#endif
