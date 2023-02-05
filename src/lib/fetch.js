import axios from "axios";

const publicFetch = axios.create({
  baseURL: "http://localhost:3000/api",
});

export { publicFetch };
