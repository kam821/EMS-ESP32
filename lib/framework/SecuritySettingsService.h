#ifndef SecuritySettingsService_h
#define SecuritySettingsService_h

#include "Features.h"
#include "FSPersistence.h"
#include "HttpEndpoint.h"
#include "SecurityManager.h"

#ifndef FACTORY_ADMIN_USERNAME
#define FACTORY_ADMIN_USERNAME "admin"
#endif

#ifndef FACTORY_ADMIN_PASSWORD
#define FACTORY_ADMIN_PASSWORD "admin"
#endif

#ifndef FACTORY_GUEST_USERNAME
#define FACTORY_GUEST_USERNAME "guest"
#endif

#ifndef FACTORY_GUEST_PASSWORD
#define FACTORY_GUEST_PASSWORD "guest"
#endif

#define SECURITY_SETTINGS_FILE "/config/securitySettings.json"
#define SECURITY_SETTINGS_PATH "/rest/securitySettings"

#define GENERATE_TOKEN_SIZE 512
#define GENERATE_TOKEN_PATH "/rest/generateToken"

#if FT_ENABLED(FT_SECURITY)

class SecuritySettings {
  public:
    String            jwtSecret;
    std::vector<User> users;

    static void read(SecuritySettings & settings, JsonObject root) {
        // secret
        root["jwt_secret"] = settings.jwtSecret;

        // users
        JsonArray users = root["users"].to<JsonArray>();
        for (const User& user : settings.users) {
            JsonObject userRoot  = users.add<JsonObject>();
            userRoot["username"] = user.username;
            userRoot["password"] = user.password;
            userRoot["admin"]    = user.admin;
        }
    }

    static StateUpdateResult update(JsonObject root, SecuritySettings & settings) {
        // secret
        settings.jwtSecret = root["jwt_secret"] | FACTORY_JWT_SECRET;

        // users
        settings.users.clear();
        if (root["users"].is<JsonArray>()) {
            for (JsonVariant user : root["users"].as<JsonArray>()) {
                settings.users.emplace_back(user["username"], user["password"], user["admin"]);
            }
        } else {
            settings.users.emplace_back(FACTORY_ADMIN_USERNAME, FACTORY_ADMIN_PASSWORD, true);
            settings.users.emplace_back(FACTORY_GUEST_USERNAME, FACTORY_GUEST_PASSWORD, false);
        }
        return StateUpdateResult::CHANGED;
    }
};

class SecuritySettingsService : public StatefulService<SecuritySettings>, public SecurityManager {
  public:
    SecuritySettingsService(AsyncWebServer * server, FS * fs);

    void begin();

    // Functions to implement SecurityManager
    Authentication               authenticate(const String & username, const String & password) final;
    Authentication               authenticateRequest(AsyncWebServerRequest * request) final;
    String                       generateJWT(const User * user) final;
    ArRequestFilterFunction      filterRequest(AuthenticationPredicate predicate) final;
    ArRequestHandlerFunction     wrapRequest(ArRequestHandlerFunction onRequest, AuthenticationPredicate predicate) final;
    ArJsonRequestHandlerFunction wrapCallback(ArJsonRequestHandlerFunction callback, AuthenticationPredicate predicate) final;

  private:
    HttpEndpoint<SecuritySettings>  _httpEndpoint;
    FSPersistence<SecuritySettings> _fsPersistence;
    ArduinoJsonJWT                  _jwtHandler;

    void generateToken(AsyncWebServerRequest * request);

    void configureJWTHandler();

    /*
   * Lookup the user by JWT
   */
    Authentication authenticateJWT(String & jwt);

    /*
   * Verify the payload is correct
   */
    boolean validatePayload(JsonObject parsedPayload, const User * user);
};

#else

class SecuritySettingsService : public SecurityManager {
  public:
    SecuritySettingsService(AsyncWebServer * server, FS * fs);
    ~SecuritySettingsService();

    // minimal set of functions to support framework with security settings disabled
    Authentication               authenticateRequest(AsyncWebServerRequest * request) final;
    ArRequestFilterFunction      filterRequest(AuthenticationPredicate predicate) final;
    ArRequestHandlerFunction     wrapRequest(ArRequestHandlerFunction onRequest, AuthenticationPredicate predicate) final;
    ArJsonRequestHandlerFunction wrapCallback(ArJsonRequestHandlerFunction onRequest, AuthenticationPredicate predicate) final;
};

#endif
#endif
