import axios from "axios"

const instance = axios.create({
    baseURL: 'https://life-calendar.onrender.com/api',
    withCredentials: true
})

export default instance