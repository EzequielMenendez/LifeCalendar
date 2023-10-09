import { Dispatch } from 'redux';
import { deleteTaskRequest, getAllTaskRequest, getTaskRequest, loginRequest, postTaskRequest, putTaskRequest, registerRequest, verifyTokenRequest } from "../api/auth"
import { LoginUser, RegisterUser, Task } from "../types"
import Cookies from 'js-cookie'
import Swal from 'sweetalert2';

export const SING_IN_SING_UP = "SING_IN_SING_UP"
export const LOGOUT = "LOGOUT"
export const RESET_ERROR = "RESET_ERROR"
export const GET_ALL_TASK = "GET_ALL_TASK"
export const GET_TASK = "GET_TASK"
export const RESET_CALENDAR = "RESET_CALENDAR"
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
        const cookies = await Cookies.get()
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
            Swal.fire({
                title: 'Ups!',
                text: 'Something went wrong.',
                icon: 'warning',
            });
        }
    }
}

export const getTaskDetail = (id:string) => {
    return async function(dispatch:Dispatch) {
        try {
            const res = await getTaskRequest(id)
            return dispatch({
                type: GET_TASK,
                payload: res.data
            })
        } catch (error) {
            Swal.fire({
                title: 'Ups!',
                text: 'Something went wrong.',
                icon: 'warning',
            });
        }
    }
}

export const createTask = (task: Task) => {
    return async function(dispatch:Dispatch) {
        try {
            await postTaskRequest(task)
            Swal.fire({
                title: 'Created',
                text: 'The task has been successfully created.',
                icon: 'success',
            });
            return dispatch({
                type: RESET_CALENDAR
            })
        } catch (error) {
            Swal.fire({
                title: 'Ups!',
                text: 'Something went wrong.',
                icon: 'warning',
            });
        }
    }
}

export const deleteTask = (id: string) => {
    return async function(dispatch:Dispatch) {
        try {
            await deleteTaskRequest(id)
            Swal.fire({
                title: 'Removed',
                text: 'The task has been successfully deleted.',
                icon: 'success',
            });
            return dispatch({
                type: RESET_CALENDAR
            })
        } catch (error) {
            Swal.fire({
                title: 'Ups!',
                text: 'Something went wrong.',
                icon: 'warning',
            });
        }
    }
}

export const updateTask = (id: string, task:Task) => {
    return async function(dispatch:Dispatch) {
        try {
            await putTaskRequest(id, task)
            Swal.fire({
                title: 'Updated',
                text: 'The task has been successfully updated.',
                icon: 'success',
            });
            return dispatch({
                type: RESET_CALENDAR
            })
        } catch (error) {
            Swal.fire({
                title: 'Ups!',
                text: 'Something went wrong.',
                icon: 'warning',
            });
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