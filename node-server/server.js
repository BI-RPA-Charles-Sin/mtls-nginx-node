const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");
const forge = require("node-forge");

const PORT = 3000;

const options = {
  ca: fs.readFileSync(path.resolve(__dirname, "./certs/ca.crt")),
  cert: fs.readFileSync(path.resolve(__dirname, "./certs/server.crt")),
  key: fs.readFileSync(path.resolve(__dirname, "./certs/server.key")),
  rejectUnauthorized: false,
  requestCert: true,
};

const app = express();

app.get("/", (req, res) => {
  if (!isEmpty(req.socket.getPeerCertificate())) {
    return verify_certificate(req, res);
  }

  if (req.header("ssl_client_verify") !== "SUCCESS") return res.status(403).send("Forbidden - please provide valid certificate.");

  const sslCert = req.header("X-SSL-CERT");
  const cert = decodeURIComponent(sslCert);
  const forgeCert = forge.pki.certificateFromPem(cert);

  console.log("forgeCert.generateSubjectKeyIdentifier() : ");
  console.log(forgeCert.generateSubjectKeyIdentifier());
  // Unique
  // console.log("ssl_curves : unique");
  // console.log("ssl_curves : ");
  // console.log(req.header("ssl_curves"));
  // Change every time
  // console.log("ssl_session_id : ");
  // console.log(req.header("ssl_session_id"));

  // CUSTOM PRINT OUT WHAT IS THAT.
  // console.log("X-Forwarded-For");
  // console.log(req.header("X-Forwarded-For"));
  // console.log("X-Forwarded-Proto");
  // console.log(req.header("X-Forwarded-Proto"));
  // console.log("X-HTTPS-Protocol");
  // console.log(req.header("X-HTTPS-Protocol"));
  // console.log("X-SSL-FP");
  // console.log(req.header("X-SSL-FP"));
  // console.log("ssl_cipher");
  // console.log(req.header("ssl_cipher"));
  // console.log("ssl_ciphers");
  // console.log(req.header("ssl_ciphers"));

  res.status(200).json(`Hello ${req.header("ssl_client")}, your certificate was issued by ${req.header("SSL_Client_Issuer")}!`);
});

https.createServer(options, app).listen(PORT, () => {
  console.log(`.. server up and running and listening on ${PORT} ..`);
});

function verify_certificate(request, response) {
  const cert = request.socket.getPeerCertificate();

  console.log("request.socket value : ");
  console.log(request.socket.getCipher());
  console.log(request.socket.getSession());
  console.log(request.socket.getTLSTicket());

  if (request.client.authorized) {
    return response.send(`Hello ${cert.subject.CN}, your certificate was issued by ${cert.issuer.CN}!`);
  }

  if (cert.subject) {
    return response.status(403).send(`Sorry ${cert.subject.CN}, certificates from ${cert.issuer.CN} are not welcome here.`);
  } else {
    return response.status(401).send(`Sorry, but you need to provide a client certificate to continue.`);
  }
}

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

/**
 * {
  "sni": "kawayiyi.com",
  "tlsVersion": "Tls13",
  "tcpConnectionId": "0HML9VNSSHQ9L",
  "tlsHashOrigin": "771,4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53,45-43-27-16-17513-18-35-10-11-51-13-65281-0-5-23-41,29-23-24,0",
  "tlsHashMd5": "73df07b3a44d59d95e7af9a16988ff89",
  
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
    "psk_key_exchange_modes",
    "supported_versions",
    "compress_certificate",
    "application_layer_protocol_negotiation",
    "extensionApplicationSettings",
    "signed_certificate_timestamp",
    "session_ticket",
    "supported_groups",
    "ec_point_formats",
    "key_share",
    "signature_algorithms",
    "renegotiation_info",
    "server_name",
    "status_request",
    "extended_master_secret",
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