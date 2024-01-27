#include <FeaturesService.h>
#include "../../src/emsesp_stub.hpp"

FeaturesService::FeaturesService(AsyncWebServer * server) {
    server->on(FEATURES_SERVICE_PATH, HTTP_GET, [this](AsyncWebServerRequest * request) { features(request); });
}

void FeaturesService::features(AsyncWebServerRequest * request) {
    auto *     response = new AsyncJsonResponse(false);
    JsonObject root     = response->getRoot();

    root["version"]  = EMSESP_APP_VERSION;
    root["platform"] = EMSESP_PLATFORM;

    response->setLength();
    request->send(response);
}
