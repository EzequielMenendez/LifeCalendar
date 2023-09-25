export interface UserData {
    name: string;
    email: string;
    password: string;
}

export interface ValidationSchema {
    parse(data: object): void;
}

export interface zodError {
    message: string
}