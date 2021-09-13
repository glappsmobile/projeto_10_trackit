import axios from 'axios';
const API_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

const signUp = (data) => axios.post(`${API_URL}/auth/sign-up`, data);

const signIn = (data) => axios.post(`${API_URL}/auth/login`, data);

export {
    signUp,
    signIn
}