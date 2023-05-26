const axios = require("axios");
const https = require("https");
const fs = require("fs");

const { io } = require("socket.io-client");
// const socket = io("http://localhost:3000", {
//   path: "/api/sockets",
// });

// load balancing
// 34.117.123.79:80
// vm
// 34.92.128.241
// domain
// https://eliveplay.com/

const socket = io("https://eliveplay.com");

socket.on("connect", () => {
  console.log(socket.connected); // true
});

socket.on("second", (...args) => {
  console.log({ args });
});

const getRequestWithCertificate = async () => {
  try {
    const cert = fs.readFileSync("certs/client.crt");
    const key = fs.readFileSync("certs/client.key");
    // const hostName = "10.170.0.3";
    // const hostName = "192.168.94.16";
    const hostName = "localhost:3000";
    const httpsAgent = new https.Agent({
      cert,
      key,
      rejectUnauthorized: false,
    });

    // const response = await axios.get(`https://${hostName}/api/cert`, {
    //   httpsAgent,
    // });
    const response = await axios.get(`http://${hostName}/api/socket`, {
      httpsAgent,
    });
    console.log(response.data);
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
        // when requested but there is no response from server
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

// setTimeout(() => {
//   getRequestWithCertificate();
// }, 10);
