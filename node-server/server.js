const express = require("express");
const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");
const forge = require("node-forge");
const md5 = require("md5");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const PORT = 3000;

const options = {
  ca: fs.readFileSync(path.resolve(__dirname, "./certs-true/ca.crt")),
  cert: fs.readFileSync(path.resolve(__dirname, "./certs-true/server.crt")),
  key: fs.readFileSync(path.resolve(__dirname, "./certs-true/server.key")),
  rejectUnauthorized: false,
  requestCert: true,
};

const app = express();

// const server = https.createServer(options, app);
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`.. server up and running and listening on ${PORT} ..`);
});

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// Socket Begin
const io = require("socket.io")();

const servIo = io.listen(server, {
  cors: true,
  origin: "*",
  credentials: true,
  // forceBase64: true,
  // path: "/api/socket",
  path: "/",
});

// servIo.on("connection", function (socket) {
//   setInterval(function () {
//     const tls_version = socket.handshake.headers["x-https-protocol"];
//     const clientIp = socket.handshake.headers["x-real-ip"];
//     const ellipticCurvesArr = socket.handshake.headers["ssl_curves"].split(":");
//     const ciphersArr = socket.handshake.headers["ssl_ciphers"].split(":");
//     const clientFp = socket.handshake.auth;

//     let ellipticCurves = "";
//     let ciphers = "";

//     ellipticCurvesArr.forEach((item) => {
//       ellipticCurves += `${item}-`;
//     });

//     ciphersArr.forEach((item) => {
//       ciphers += `${item}-`;
//     });

//     ellipticCurves = ellipticCurves.slice(0, -1) + "";
//     ciphers = ciphers.slice(0, -1) + "";

//     const ja3_str = `${tls_version},${ellipticCurves},${ciphers}`;
//     const ja3Hash = md5(ja3_str);

//     const token = jwt.sign(
//       {
//         data: { tls_version, ellipticCurves, ciphers, ja3Hash, clientFp, clientIp },
//       },
//       "secret"
//     );

//     fs.readFile("myjsonfile.json", "utf8", function readFileCallback(err, data) {
//       if (err) {
//         console.log(err);
//       } else {
//         let obj = JSON.parse(data); //now it an object

//         obj.table.push({ tls_version, ellipticCurves, ciphers, ja3Hash, clientFp, clientIp }); //add some data

//         const json = JSON.stringify(obj); //convert it back to json

//         fs.writeFile("myjsonfile.json", json, "utf8", (err) => {
//           // error checking
//           if (err) throw err;

//           // console.log("New data added");
//         }); // write it back
//       }
//     });

//     socket.handshake.jwt = token;

//     socket.emit("second", { second: new Date().getTime(), ja3Hash });
//   }, 1000);

//   console.log("connect");
// });
// Socket End

servIo.on("connection", function (socket) {
  setInterval(function () {
    socket.emit("second", { second: `Sending from Server to Client, Timestamp: ${new Date().getTime()}` });
  }, 5000);

  socket.on("third", (...client) => {
    console.log({ client });
  });

  console.log("connect");
});
// end

app.get("/api/home", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/read", (req, res) => {
  var data = fs.readFileSync("myjsonfile.json");
  var myObject = JSON.parse(data);
  res.status(201).json(myObject);
});

app.get("/api/socket", (req, res) => {
  res.status(200).json({ msg: "api/socket connected" });
});

// app.get("/api/cert", (req, res) => {
//   console.log("api/certs");
//   if (!isEmpty(req.socket.getPeerCertificate())) {
//     return verify_certificate(req, res);
//   }

//   // if (req.header("ssl_client_verify") !== "SUCCESS") return res.status(403).send("Forbidden - please provide valid certificate.");

//   let tls_version = req.header("X-HTTPS-Protocol");
//   let ellipticCurvesArr = req.header("ssl_curves").split(":");
//   let ciphersArr = req.header("ssl_ciphers").split(":");

//   let ellipticCurves = "";
//   let ciphers = "";

//   ellipticCurvesArr.forEach((item) => {
//     ellipticCurves += `${item}-`;
//   });

//   ciphersArr.forEach((item) => {
//     ciphers += `${item}-`;
//   });

//   ellipticCurves = ellipticCurves.slice(0, -1) + "";
//   ciphers = ciphers.slice(0, -1) + "";

//   const ja3_str = `${tls_version},${ellipticCurves},${ciphers}`;
//   const ja3Hash = md5(ja3_str);

//   // console.log("outside if");
//   // console.log(ja3_str);
//   // console.log(ja3Hash);

//   // Unique
//   // console.log("ssl_curves : unique");
//   // console.log(req.header("ssl_curves"));
//   // console.log("X-Real-IP");
//   // console.log(req.header("X-Real-IP"));
//   // Change every time
//   // console.log("ssl_session_id : dynamic");
//   // console.log(req.header("ssl_session_id"));
//   // console.log("ssl_cipher");
//   // console.log(req.header("ssl_cipher"));
//   // console.log("ssl_ciphers");
//   // console.log(req.header("ssl_ciphers").split(":"));
//   // console.log("request_id : dynamic");
//   // console.log(req.header("request_id"));

//   res.status(200).json({
//     msg: `Hello ${req.header("ssl_client")}, your certificate was issued by ${req.header("SSL_Client_Issuer")}! `,
//     tls_version,
//     ellipticCurves,
//     ciphers,
//     ja3_str: `${ja3_str}`,
//     ja3_hash: `${ja3Hash}`,
//   });
//   // res.sendFile("./index.html", { root: __dirname });
// });

// function verify_certificate(request, response) {
//   const cert = request.socket.getPeerCertificate();

//   console.log("request.socket value : ");

//   if (request.client.authorized) {
//     return response.send(`Hello ${cert.subject.CN}, your certificate was issued by ${cert.issuer.CN}!`);
//   }

//   if (cert.subject) {
//     return response.status(403).send(`Sorry ${cert.subject.CN}, certificates from ${cert.issuer.CN} are not welcome here.`);
//   } else {
//     return response.status(401).send(`Sorry, but you need to provide a client certificate to continue.`);
//   }
// }

// function isEmpty(obj) {
//   for (var key in obj) {
//     if (obj.hasOwnProperty(key)) return false;
//   }
//   return true;
// }

// T755TcGHGTiT2UkkAAAA
