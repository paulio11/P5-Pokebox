import axios from "axios";

export const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  withCredentials: false,
  // To fix issues on page reload
  headers: { "Cache-Control": "no-cache" },
});

axios.defaults.baseURL = "https://project-5-backend.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
