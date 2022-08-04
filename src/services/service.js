import axios from "axios";

const baseUrl = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function createHeaders () {
    const auth = JSON.parse(localStorage.getItem('trackit'));

    const config = {
        headers: {
            Authorization: `Bearer ${auth.userData.token}`
        }
    }

    return config;
}

function postSignUp (body) {
    const promise = axios.post(`${baseUrl}/auth/sign-up`, body);
    return promise;
}

function postLogin (body) {
    const promise = axios.post(`${baseUrl}/auth/login`, body);
    return promise;
}

function postHabit (body) {
    const config = createHeaders();
    const promise = axios.post(`${baseUrl}/habits`, body, config);
    return promise;
}

function getHabits () {
    const config = createHeaders();
    const promise = axios.get(`${baseUrl}/habits`, config);
    return promise;
}

function deleteHabit (habitID) {
    const config = createHeaders();
    const promise = axios.delete(`${baseUrl}/habits/${habitID}`, config);
    return promise;
}

function getTodayHabits () {
    const config = createHeaders();
    const promise = axios.get(`${baseUrl}/today`, config);
    return promise;
}

function postHabitCheck (habitID) {
    const config = createHeaders();
    const promise = axios.post(`${baseUrl}/${habitID}/check`, {}, config);
    return promise;
}

function postHabitUncheck (habitID) {
    const config = createHeaders();
    const promise = axios.post(`${baseUrl}/${habitID}/uncheck`, {}, config);
    return promise;
}

function getHistory () {
    const config = createHeaders();
    const promise = axios.get(`${baseUrl}/habits/history/daily`, config);
    return promise;
}

export {
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