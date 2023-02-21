const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");
const forge = require("node-forge");
const md5 = require("md5");

const PORT = 443;

const options = {
  ca: fs.readFileSync(path.resolve(__dirname, "./certs/ca.crt")),
  cert: fs.readFileSync(path.resolve(__dirname, "./certs/server.crt")),
  key: fs.readFileSync(path.resolve(__dirname, "./certs/server.key")),
  rejectUnauthorized: false,
  requestCert: true,
};

const app = express();

// 這個 middleware 會將全部 http 導到 https。
app.use((req, res, next) => {
  if (req.protocol === "http") {
    res.redirect(301, `https://${req.headers.host}${req.url}`);
  }
  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/api/cert", (req, res) => {
  if (!isEmpty(req.socket.getPeerCertificate())) {
    return verify_certificate(req, res);
  }

  if (req.header("ssl_client_verify") !== "SUCCESS") return res.status(403).send("Forbidden - please provide valid certificate.");

  const sslCert = req.header("X-SSL-CERT");
  const cert = decodeURIComponent(sslCert);
  const forgeCert = forge.pki.certificateFromPem(cert);

  // console.log(JSON.stringify(forgeCert));

  let ellipticCurvesArr = req.header("ssl_curves").split(":");
  let ciphersArr = req.header("ssl_ciphers").split(":");
  let tls_version = req.header("X-HTTPS-Protocol");

  let ellipticCurves = "";
  let ciphers = "";

  ellipticCurvesArr.forEach((item) => {
    ellipticCurves += `${item}-`;
  });

  ciphersArr.forEach((item) => {
    ciphers += `${item}-`;
  });

  ellipticCurves = ellipticCurves.slice(0, -1) + "";
  ciphers = ciphers.slice(0, -1) + "";

  const ja3_str = `${tls_version},${ellipticCurves},${ciphers}`;
  const ja3hash = md5(ja3_str);

  // Unique
  // console.log("ssl_curves : unique");
  // console.log(req.header("ssl_curves"));
  // console.log("X-Real-IP");
  // console.log(req.header("X-Real-IP"));
  // Change every time
  // console.log("ssl_session_id : dynamic");
  // console.log(req.header("ssl_session_id"));
  // console.log("ssl_cipher");
  // console.log(req.header("ssl_cipher"));
  // console.log("ssl_ciphers");
  // console.log(req.header("ssl_ciphers").split(":"));
  // console.log("request_id : dynamic");
  // console.log(req.header("request_id"));

  res.status(200).json({
    msg: `Hello ${req.header("ssl_client")}, your certificate was issued by ${req.header("SSL_Client_Issuer")}! `,
    tls_version,
    ellipticCurves,
    ciphers,
    ja3_str: `${ja3_str}`,
    ja3_hash: `${ja3hash}`,
  });
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
