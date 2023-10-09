import axios from "./axios";
import { RegisterUser, LoginUser, Task } from "../types";

export const registerRequest = async(user: RegisterUser) => {
    return axios.post(`/user/register`, user)
}

export const loginRequest = async(user:LoginUser) => {
    return axios.post(`/user/login`, user)
}

export const postTaskRequest = async(task: Task) => {
    return axios.post('/task', task)
}

export const getAllTaskRequest = async() => {
    return axios.get('/task')
}

export const getTaskRequest = async(id: string) => {
    return axios.get(`/task/${id}`)
}

export const putTaskRequest = async(id: string, task: Task) => {
    return axios.put(`/task/${id}`, task)
}

export const deleteTaskRequest = async(id: string) => {
    return axios.delete(`/task/${id}`)
}

export const verifyTokenRequest = async() => axios.get('/user/verify')