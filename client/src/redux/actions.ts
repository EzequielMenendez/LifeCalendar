import { Dispatch } from 'redux';
import { getAllTaskRequest, loginRequest, registerRequest, verifyTokenRequest } from "../api/auth"
import { LoginUser, RegisterUser } from "../types"
import Cookies from 'js-cookie'

export const SING_IN_SING_UP = "SING_IN_SING_UP"
export const LOGOUT = "LOGOUT"
export const RESET_ERROR = "RESET_ERROR"
export const GET_ALL_TASK = "GET_ALL_TASK"
export const ERROR = "ERROR"

export const singIn = (user:LoginUser) => {
    return async function(dispatch:Dispatch){
        try {
            const res = await loginRequest(user)
            return dispatch({
                type: SING_IN_SING_UP,
                payload: res.data
            })
        } catch (error:any) {
            return dispatch({
                type:ERROR,
                payload: error.response?.data?.message || 'An error occurred'
            })
        }
    }
}

export const singUp = (user:RegisterUser) => {
    return async function(dispatch:Dispatch){
        try {
            const res = await registerRequest(user)
            return dispatch({
                type: SING_IN_SING_UP,
                payload: res.data
            })
        } catch (error:any) {
            return dispatch({
                type:ERROR,
                payload: error.response?.data?.message || 'An error occurred'
            })
        }
    }
}

export const checkToken = () => {
    return async function(dispatch:Dispatch){
        const cookies = Cookies.get()
        if(!cookies.token){
            return dispatch({
                type: LOGOUT
            })
        }
        try {
            const res = await verifyTokenRequest()
            if(!res.data){
                return dispatch({
                    type: LOGOUT
                })
            }
            return dispatch({
                type: SING_IN_SING_UP,
                payload: res.data
            })
        } catch (error) {
            return dispatch({
                type: LOGOUT
            })
        }
    }
}

export const logout = () => {
    return async function(dispatch:Dispatch){
        Cookies.remove("token")
        return dispatch({
            type: LOGOUT
        })
    }
}

export const getAllTask = () => {
    return async function(dispatch:Dispatch) {
        try {
            const res = await getAllTaskRequest()
            return dispatch({
                type: GET_ALL_TASK,
                payload: res.data
            })
        } catch (error) {
            
        }
    }
}

export const resetFormError = () => {
    return async function(dispatch:Dispatch){
        return dispatch({
            type: RESET_ERROR
        })
    }
}