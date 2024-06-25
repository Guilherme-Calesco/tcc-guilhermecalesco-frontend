import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const loginService = (body) => {
    var res =  axios.post(`${API_URL}/login`, body)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });

    return res;
};
