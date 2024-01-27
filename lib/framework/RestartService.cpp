#include "RestartService.h"
#include "../../src/emsesp_stub.hpp"

#include <esp_ota_ops.h>

RestartService::RestartService(AsyncWebServer * server, SecurityManager * securityManager) {
    server->on(RESTART_SERVICE_PATH,
               HTTP_POST,
               securityManager->wrapRequest([this](AsyncWebServerRequest * request) { restart(request); }, AuthenticationPredicates::IS_ADMIN)
               );
    server->on(PARTITION_SERVICE_PATH,
               HTTP_POST,
               securityManager->wrapRequest([this](AsyncWebServerRequest * request) { partition(request); }, AuthenticationPredicates::IS_ADMIN)
               );
}

void RestartService::restart(AsyncWebServerRequest * request) {
    emsesp::EMSESP::system_.store_nvs_values();
    request->onDisconnect(RestartService::restartNow);
    request->send(200);
}

void RestartService::partition(AsyncWebServerRequest * request) {
    const esp_partition_t * factory_partition = esp_partition_find_first(ESP_PARTITION_TYPE_APP, ESP_PARTITION_SUBTYPE_APP_FACTORY, nullptr);
    if (factory_partition) {
        esp_ota_set_boot_partition(factory_partition);
        emsesp::EMSESP::system_.store_nvs_values();
        request->onDisconnect(RestartService::restartNow);
        request->send(200);
        return;
    }
    const esp_partition_t * ota_partition = esp_ota_get_next_update_partition(nullptr);
    if (!ota_partition) {
        request->send(400); // bad request
        return;
    }
    uint64_t buffer;
    esp_partition_read(ota_partition, 0, &buffer, 8);
    if (buffer == 0xFFFFFFFFFFFFFFFF) { // partition empty
        request->send(400);             // bad request
        return;
    }
    esp_ota_set_boot_partition(ota_partition);
    emsesp::EMSESP::system_.store_nvs_values();
    request->onDisconnect(RestartService::restartNow);
    request->send(200);
}
