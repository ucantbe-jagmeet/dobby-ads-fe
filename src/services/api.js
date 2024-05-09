import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const register = (userData) => api.post('auth/register', userData);
export const login = (credentials) => api.post('auth/login', credentials);

export default api;
