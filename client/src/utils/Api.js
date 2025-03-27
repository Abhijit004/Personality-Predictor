import axios from "axios";

axios.defaults.withCredentials = true;
const API_URL = import.meta.env.VITE_API_URL;

const API = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

export const predictMBTI = (text) =>
    API.post(
        "/predict",
        { text: text },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
