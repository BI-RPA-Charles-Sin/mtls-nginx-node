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
  console.log("ssl_curves : unique");
  console.log("ssl_curves : ");
  console.log(req.header("ssl_curves"));
  // Change every time
  console.log("ssl_session_id : ");
  console.log(req.header("ssl_session_id"));
  console.log("X-HTTPS-Protocol");
  console.log(req.header("X-HTTPS-Protocol"));
  console.log("ssl_cipher");
  console.log(req.header("ssl_cipher"));
  console.log("ssl_ciphers");
  console.log(req.header("ssl_ciphers").split(":"));

  // CUSTOM PRINT OUT WHAT IS THAT.
  // console.log("X-Forwarded-For");
  // console.log(req.header("X-Forwarded-For"));
  // console.log("X-Forwarded-Proto");
  // console.log(req.header("X-Forwarded-Proto"));
  // console.log("X-SSL-FP");
  // console.log(req.header("X-SSL-FP"));

  res.status(200).json(`Hello ${req.header("ssl_client")}, your certificate was issued by ${req.header("SSL_Client_Issuer")}!`);
});

https.createServer(options, app).listen(PORT, () => {
  console.log(`.. server up and running and listening on ${PORT} ..`);
});

function verify_certificate(request, response) {
  const cert = request.socket.getPeerCertificate();

  console.log("request.socket value : ");
  // console.log(request.socket.getCipher());
  // console.log(request.socket.getSession());
  // console.log(request.socket.getTLSTicket());

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
