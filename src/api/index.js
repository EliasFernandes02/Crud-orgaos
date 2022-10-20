import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {
        'Authorization': 'chave_token'
    }
});

export default api;