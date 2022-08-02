import axios from "axios";

const http = axios.create({
  baseURL: "https://65c5-196-189-48-51.eu.ngrok.io",
  Headers: {},
});

try {
  http.interceptors.request.use(
    (config) => {
      let data = JSON.parse(localStorage.getItem("x-access-token"));

      if (data) {
        config.headers["Authorization"] = "Bearer " + data;
      }

      return config;
    },

    (error) => {
      return Promise.reject(error);
    }
  );
} catch (error) {
  console.log(error);
}

export default http;
