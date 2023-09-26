import axios from "axios";
import { UserData } from "../types";


const API = 'http://localhost:3001/api'
export const registerRequest = (user: UserData) => {
    return axios.post(`${API}/user/register`, user)
}