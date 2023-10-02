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

export interface GlobalState {
    user:  null | UserData
    isAuth: boolean,
    errors: string | null
}

export interface ActionRedux {
    type: string,
    payload: any
}

export interface Task {
    title?: string,
    startData?: Date,
    endData?: Date
}