import axios from "./axios";
import { RegisterUser, LoginUser } from "../types";

export const registerRequest = (user: RegisterUser) => {
    return axios.post(`/user/register`, user)
}

export const loginRequest = (user:LoginUser) => {
    return axios.post(`/user/login`, user)
}