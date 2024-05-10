import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const register = (userData) => api.post('auth/register', userData);
export const login = (credentials) => api.post('auth/login', credentials);
export const uploadImage = (formData, token) => {
    console.log('formData', formData);

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

export const searchImages = (name, token) => {
    return api.get(`/search?name=${name}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
};

export default api;
