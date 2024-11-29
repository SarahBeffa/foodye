import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.0.103:3002",
    timeout: 10000
});

export default api;