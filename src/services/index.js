import axios from 'axios';

const API_URL = 'localhost:8085';

export const loginService = (body) => {
    return axios.post(`${API_URL}/login`, body)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
