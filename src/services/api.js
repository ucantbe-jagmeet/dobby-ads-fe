import axios from 'axios';

const URL = process.env.REACT_APP_API_URL
const api = axios.create({
    baseURL: URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

console.log('base', process.env.REACT_APP_API_URL);

export const register = (userData) => api.post('auth/register', userData);
export const login = (credentials) => api.post('auth/login', credentials);
export const uploadImage = (formData, token) => {
    return api.post('/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        },
    });
};

export const fetchImages = (token) => {
    return api.get('/images', {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
};

export const searchImages = (searchQuery, token) => {
    return api.get(`/search?name=${searchQuery}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
};

export default api;
