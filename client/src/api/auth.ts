import axios from "./axios";
import { RegisterUser, LoginUser, Task } from "../types";

export const registerRequest = (user: RegisterUser) => {
    return axios.post(`/user/register`, user)
}

export const loginRequest = (user:LoginUser) => {
    return axios.post(`/user/login`, user)
}

export const postTaskRequest = (task: Task) => {
    return axios.post('/task', task)
}

export const getAllTaskRequest = () => {
    return axios.get('/task')
}

export const getTaskRequest = (id: string) => {
    return axios.get(`/task/${id}`)
}

export const putTaskRequest = (id: string, task: Task) => {
    return axios.put(`/task/${id}`, task)
}

export const deleteTaskRequest = (id: string) => {
    return axios.delete(`/task/${id}`)
}

export const verifyTokenRequest = () => axios.get('/user/verify')

export const logoutRequest = () => axios.post('/user/logout')