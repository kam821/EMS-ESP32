#ifndef FactoryResetService_h
#define FactoryResetService_h

#include "RestartService.h"
#include "SecurityManager.h"

#include <ESPAsyncWebServer.h>
#include <FS.h>
#include <WiFi.h>

#define FS_CONFIG_DIRECTORY "/config"
#define FACTORY_RESET_SERVICE_PATH "/rest/factoryReset"

class FactoryResetService {
  public:
    FactoryResetService(AsyncWebServer * server, FS * fs, SecurityManager * securityManager);

    void factoryReset();

  private:
    FS * fs;

    void handleRequest(AsyncWebServerRequest * request);
};

#endif
