import axios from "./axios";
import { RegisterUser, LoginUser, Task } from "../types";

export const registerRequest = async(user: RegisterUser) => {
    return await axios.post(`/user/register`, user)
}

export const loginRequest = async(user:LoginUser) => {
    return await axios.post(`/user/login`, user)
}

export const postTaskRequest = async(task: Task) => {
    return await axios.post('/task', task)
}

export const getAllTaskRequest = async() => {
    return await axios.get('/task')
}

export const getTaskRequest = async(id: string) => {
    return await axios.get(`/task/${id}`)
}

export const putTaskRequest = async(id: string, task: Task) => {
    return await axios.put(`/task/${id}`, task)
}

export const deleteTaskRequest = async(id: string) => {
    return await axios.delete(`/task/${id}`)
}

export const verifyTokenRequest = async() => await axios.get('/user/verify')