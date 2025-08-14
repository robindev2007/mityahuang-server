import axios from "axios";
import env from "../config/clean-env";

const taobaoClient = axios.create({
  baseURL: env.TAOBAO_API,
  timeout: 10000, // 10 seconds
  params: {
    key: env.TAOBAO_API_KEY,
    secret: env.TAOBAO_API_SECRET,
  },
  headers: {
    Accept: "application/json",
    "Accept-Encoding": "gzip, deflate, br",
  },
  //httpsAgent: new https.Agent({ keepAlive: true }),
});

// Add interceptors for consistent error handling
taobaoClient.interceptors.response.use(
  (response) => {
    // Return the full response so we can check for errors in the data
    return response;
  },
  (error) => {
    if (error.response) {
      // The request was made and the server responded with error
      return Promise.reject({
        status: error.response.status,
        data: error.response.data,
        message: error.message,
      });
    } else if (error.request) {
      // The request was made but no response was received
      return Promise.reject({
        status: 503,
        data: { error: "No response from Taobao API" },
        message: "No response received from Taobao API",
      });
    }
    // Something happened in setting up the request
    return Promise.reject({
      status: 500,
      data: { error: "Request setup error" },
      message: error.message,
    });
  },
);

export default taobaoClient;
