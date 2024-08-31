import * as ax from "axios";

const API_URL = "http://localhost:8080/api";

const instance = ax.default.create({
  baseURL: API_URL,
  withCredentials: true,
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export { instance as axios };
