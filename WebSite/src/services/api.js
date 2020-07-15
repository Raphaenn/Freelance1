import axios from "axios";

const api = axios.create({
    baseURL: "https://dezcontao.rndev.com.br/"
});

export default api;

// http://142.93.64.14/