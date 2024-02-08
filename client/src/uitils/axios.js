// axiosConfig.js

import axios from "axios";

const instance = axios.create();

// Check the environment and set the base URL accordingly
if (process.env.NODE_ENV === "development") {
  // Local development environment
  instance.defaults.baseURL = "http://localhost:5003"; // Adjust the port as needed
} else {
  // Production environment
  instance.defaults.baseURL = "https://arshadvp.online";
}

export default instance;
