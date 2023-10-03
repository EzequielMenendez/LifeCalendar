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
    id?: string,
    title?: string,
    startDate?: Date | string,
    endDate?: Date | string
}

export interface GlobalState {
    user:  null | UserData
    isAuth: boolean
    errors: string | null
    loading: boolean
    allTask: Array<Task>
}

export interface MyEvent extends Event{
    id: number;
    title: string;
    start: Date;
    end: Date;
    location?: string;
  }