import { Event } from 'react-big-calendar'

export interface LoginUser {
    email: string,
    password: email
}

export interface RegisterUser{
    name: string,
    email: string,
    password: email
}

export interface UserData {
    email: string;
    name: string;
    id: string;
}

export interface ActionRedux {
    type: string,
    payload: any
}

export interface Task{
    title?: string,
    startDate?: Date | string,
    endDate?: Date | string
}

export interface TaskRes{
    id: string,
    title: string,
    startDate: Date | string,
    endDate: Date | string
}

export interface GlobalState {
    user:  null | UserData
    isAuth: boolean
    errors: string | null
    loading: boolean
    allTask: Array<TaskRes>
    taskDetail: TaskRes | null
}

export interface MyEvent extends Event{
    id: string;
    title: string;
    start: Date | string;
    end: Date | string;
    location?: string;
}