#include "ArduinoJsonJWT.h"

ArduinoJsonJWT::ArduinoJsonJWT(String secret)
    : _secret(std::move(secret)) {
}

void ArduinoJsonJWT::setSecret(String secret) {
    _secret = std::move(secret);
}

String ArduinoJsonJWT::getSecret() {
    return _secret;
}

/*
 * ESP32 uses mbedtls, ESP2866 uses bearssl.
 *
 * Both come with decent HMAC implementations supporting sha256, as well as others.
 *
 * No need to pull in additional crypto libraries - lets use what we already have.
 */
String ArduinoJsonJWT::sign(String & payload) {
    unsigned char hmacResult[32];
    {
        mbedtls_md_context_t ctx;
        mbedtls_md_type_t    md_type = MBEDTLS_MD_SHA256;
        mbedtls_md_init(&ctx);
        mbedtls_md_setup(&ctx, mbedtls_md_info_from_type(md_type), 1);
        mbedtls_md_hmac_starts(&ctx, reinterpret_cast<const unsigned char *>(_secret.c_str()), _secret.length());
        mbedtls_md_hmac_update(&ctx, reinterpret_cast<const unsigned char *>(payload.c_str()), payload.length());
        mbedtls_md_hmac_finish(&ctx, hmacResult);
        mbedtls_md_free(&ctx);
    }
    return encode(reinterpret_cast<char *>(hmacResult), 32);
}

String ArduinoJsonJWT::buildJWT(JsonObject payload) {
    // serialize, then encode payload
    String jwt;
    serializeJson(payload, jwt);
    jwt = encode(jwt.c_str(), static_cast<int>(jwt.length()));

    // add the header to payload
    jwt = JWT_HEADER + '.' + jwt;

    // add signature
    jwt += '.' + sign(jwt);

    return jwt;
}

void ArduinoJsonJWT::parseJWT(String jwt, JsonDocument & jsonDocument) {
    // clear json document before we begin, jsonDocument wil be null on failure
    jsonDocument.clear();

    // must have the correct header and delimiter
    if (!jwt.startsWith(JWT_HEADER) || jwt.indexOf('.') != static_cast<int>(JWT_HEADER_SIZE)) {
        return;
    }

    // check there is a signature delimieter
    int signatureDelimiterIndex = jwt.lastIndexOf('.');
    if (signatureDelimiterIndex == static_cast<int>(JWT_HEADER_SIZE)) {
        return;
    }

    // check the signature is valid
    String signature = jwt.substring(signatureDelimiterIndex + 1);
    jwt              = jwt.substring(0, signatureDelimiterIndex);
    if (sign(jwt) != signature) {
        return;
    }

    // decode payload
    jwt = jwt.substring(JWT_HEADER_SIZE + 1);
    jwt = decode(jwt);

    // parse payload, clearing json document after failure
    DeserializationError error = deserializeJson(jsonDocument, jwt);
    if (error != DeserializationError::Ok || !jsonDocument.is<JsonObject>()) {
        jsonDocument.clear();
    }
}

String ArduinoJsonJWT::encode(const char * cstr, int inputLen) {
    // prepare encoder
    base64_encodestate _state;
    base64_init_encodestate(&_state);
    size_t encodedLength = base64_encode_expected_len(inputLen) + 1;
    // prepare buffer of correct length
    auto * buffer = new char[encodedLength];

    // encode to buffer
    int len = base64_encode_block(cstr, inputLen, &buffer[0], &_state);
    len += base64_encode_blockend(&buffer[len], &_state);
    buffer[len] = 0;

    // convert to arduino string, freeing buffer
    String result = String(buffer);
    delete[] buffer;
    buffer = nullptr;

    // remove padding and convert to URL safe form
    while (result.length() > 0 && result.charAt(result.length() - 1) == '=') {
        result.remove(result.length() - 1);
    }
    result.replace('+', '-');
    result.replace('/', '_');

    // return as string
    return result;
}

String ArduinoJsonJWT::decode(String value) {
    // convert to standard base64
    value.replace('-', '+');
    value.replace('_', '/');

    // prepare buffer of correct length
    auto * buffer = new char[base64_decode_expected_len(value.length()) + 1];

    // decode
    int len     = base64_decode_chars(value.c_str(), static_cast<int>(value.length()), &buffer[0]);
    buffer[len] = 0;

    // convert to arduino string, freeing buffer
    String result = String(buffer);
    delete[] buffer;
    buffer = nullptr;

    // return as string
    return result;
}
