import axios from "./axios.js";
import https from "https";
import fs from "fs";

const getRequestWithCertificate = async () => {
  try {
    const cert = fs.readFileSync("certs/client.crt");
    const key = fs.readFileSync("certs/client.key");
    const hostName = "10.170.0.3";
    // const hostName = "localhost:3000";
    const httpsAgent = new https.Agent({
      cert,
      key,
      rejectUnauthorized: false,
    });

    const response = await axios.get(`https://${hostName}/api/cert`, {
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
