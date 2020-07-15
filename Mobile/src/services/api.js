import axios from "axios";

const api = axios.create({
    baseURL: "https://dezcontao.rndev.com.br/",
});

export default api;