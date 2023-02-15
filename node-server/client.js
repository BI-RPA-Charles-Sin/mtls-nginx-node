const axios = require("axios");
const https = require("https");
const fs = require("fs");

const getRequestWithCertificate = async () => {
  try {
    const cert = fs.readFileSync("certs/client.crt");
    const key = fs.readFileSync("certs/client.key");
    const hostName = "192.168.94.17:3000";
    // const hostName = "localhost:3000";
    const httpsAgent = new https.Agent({
      cert,
      key,
      rejectUnauthorized: false,
    });

    const response = await axios.get(`https://${hostName}/`, {
      httpsAgent,
    });
    // console.log(response.data);
    console.log("succeccfull");
  } catch (e) {
    const error = e;
    if (!axios.isAxiosError(error)) {
      console.log("native error");
      // when it throws native error
      // console.log(error);
    } else {
      // when it throws axios error
      if (error.request) {
        console.log("request error");
        // console.log(error.request);
        //when requested but there is no response from server
      }
      if (error.response) {
        console.log("response error");
        // the request was made and server responsed tiwh a status code
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers); 
      }
    }
  }
};

setTimeout(() => {
  getRequestWithCertificate();
}, 10);

/**
 * {
  "sni": "kawayiyi.com",
  "tlsVersion": "Tls13",
  "tcpConnectionId": "0HML9VNSSHQ9M",
  "tlsHashOrigin": "771,4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53,5-10-16-13-65281-11-18-45-51-35-0-23-27-17513-43-41,29-23-24,0",
  "tlsHashMd5": "b5d0127ecf5592c8ac069a74fa413a1a",
  
  "cipherList": [
    "TLS_AES_128_GCM_SHA256",
    "TLS_AES_256_GCM_SHA384",
    "TLS_CHACHA20_POLY1305_SHA256",
    "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256",
    "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256",
    "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384",
    "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384",
    "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256",
    "TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256",
    "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA",
    "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA",
    "TLS_RSA_WITH_AES_128_GCM_SHA256",
    "TLS_RSA_WITH_AES_256_GCM_SHA384",
    "TLS_RSA_WITH_AES_128_CBC_SHA",
    "TLS_RSA_WITH_AES_256_CBC_SHA"
  ],
  "extentions": [
    "status_request",
    "supported_groups",
    "application_layer_protocol_negotiation",
    "signature_algorithms",
    "renegotiation_info",
    "ec_point_formats",
    "signed_certificate_timestamp",
    "psk_key_exchange_modes",
    "key_share",
    "session_ticket",
    "server_name",
    "extended_master_secret",
    "compress_certificate",
    "extensionApplicationSettings",
    "supported_versions",
    "pre_shared_key"
  ],
  "supportedgroups": [
    "X25519",
    "CurveP256",
    "CurveP384"
  ],
  "ecPointFormats": [
    "uncompressed"
  ],
  "proto": "HTTP/2",
  "h2": {
    "SETTINGS": {
      "1": "65536",
      "2": "0",
      "3": "1000",
      "4": "6291456",
      "6": "262144"
    },
    "WINDOW_UPDATE": "15663105",
    "HEADERS": [
      ":method",
      ":authority",
      ":scheme",
      ":path"
    ]
  },
  "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
  "clientIp": "165.84.247.15"
}
 */