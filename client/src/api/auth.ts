import axios from "axios";
import { RegisterUser, LoginUser } from "../types";


const API = 'http://localhost:3001/api'
export const registerRequest = (user: RegisterUser) => {
    return axios.post(`${API}/user/register`, user)
}

export const loginRequest = (user:LoginUser) => {
    return axios.post(`${API}/user/login`, user)
}