import axios from 'axios';
const API_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';


const config = (token) => {
    return {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
}

const signUp = (body) => axios.post(`${API_URL}/auth/sign-up`, body);

const signIn = (body) => axios.post(`${API_URL}/auth/login`, body);

const createHabit = (body, token) => axios.post(`${API_URL}/habits`, body, config(token));

const deleteHabitById = (id, token) => axios.delete(`${API_URL}/habits/${id}`, config(token));

const getHabits = (token) => axios.get(`${API_URL}/habits`, config(token));

const getTodayHabits = (token) => axios.get(`${API_URL}/habits/today`, config(token));

const checkHabit = (id, token) => axios.post(`${API_URL}/habits/${id}/check`, "", config(token));

const uncheckHabit = (id, token) => axios.post(`${API_URL}/habits/${id}/uncheck`, "", config(token));

export {
    signUp,
    signIn,
    createHabit,
    deleteHabitById,
    getHabits,
    getTodayHabits,
    checkHabit,
    uncheckHabit
}