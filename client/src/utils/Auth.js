import axios from "axios";

axios.defaults.withCredentials = true;
const API_URL = import.meta.env.VITE_BACKEND_URL;

const API = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

export const authWithGoogle = (code) => API.get(`/auth/google?code=${code}`);
export const checkStatus = () => API.get(`/auth/status`);
export const logoutUser = () => API.get(`/auth/logout`);

export const updateMember = (data) =>
    API.patch("/user/update", data, {
        headers: {
            "Content-Type": "application/json",
        },
    });

export const getMovies = (type) => API.get(`/movie?type=${type}`, {
    headers: {
        'Content-Type': 'application/json'
    }
})

export const getBooks = (type) => API.get(`/book?type=${type}`, {
    headers: {
        'Content-Type': 'application/json'
    }
})
