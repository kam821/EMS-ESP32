#ifndef UploadFileService_h
#define UploadFileService_h

#include "RestartService.h"
#include "SecurityManager.h"

#include <Arduino.h>
#include <ESPAsyncWebServer.h>
#include <LittleFS.h>
#include <Update.h>
#include <WiFi.h>

#define UPLOAD_FILE_PATH "/rest/uploadFile"
#define TEMP_FILENAME_PATH "/tmp_upload"

class UploadFileService {
  public:
    UploadFileService(AsyncWebServer * server, SecurityManager * securityManager);

  private:
    SecurityManager * _securityManager;
    void              handleUpload(AsyncWebServerRequest * request, const String & filename, size_t index, uint8_t * data, size_t len, bool final);
    void              uploadComplete(AsyncWebServerRequest * request);
    void              handleError(AsyncWebServerRequest * request, int code);
    static void       handleEarlyDisconnect();
};

#endif
