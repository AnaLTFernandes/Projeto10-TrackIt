import axios from "axios";

const baseUrl = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function postSignUp (body) {
    const promise = axios.post(`${baseUrl}/auth/sign-up`, body);
    return promise;
}

function postLogin (body) {
    const promise = axios.post(`${baseUrl}/auth/login`, body);
    return promise;
}

function postHabit (body) {
    const promise = axios.post(`${baseUrl}/habits`, body);
    return promise;
}

function getHabits () {
    const promise = axios.get(`${baseUrl}/habits`);
    return promise;
}

function deleteHabit (habitID) {
    const promise = axios.delete(`${baseUrl}/habits/${habitID}`);
    return promise;
}

function getTodayHabits () {
    const promise = axios.get(`${baseUrl}/today`);
    return promise;
}

function postHabitCheck (habitID) {
    const promise = axios.post(`${baseUrl}/${habitID}/check`);
    return promise;
}

function postHabitUncheck (habitID) {
    const promise = axios.post(`${baseUrl}/${habitID}/uncheck`);
    return promise;
}

function getHistory () {
    const promise = axios.get(`${baseUrl}/habits/history/daily`);
    return promise;
}

return {
    postSignUp,
    postLogin,
    postHabit,
    getHabits,
    deleteHabit,
    getTodayHabits,
    postHabitCheck,
    postHabitUncheck,
    getHistory
};