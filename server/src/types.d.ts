import mongoose from "mongoose";

export interface UserData {
    name: string;
    email: string;
    password: string;
}

export interface NewUserData {
    name: string;
    email: string;
    password: string;
    _id: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
    __v?: number;
}

export interface ValidationSchema {
    parse(data: object): void;
}

export interface zodError {
    message: string
}

export interface TaskData {
    title?: string;
    startDate: Date,
    endDate: Date,
    _id: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
    __v?: number;
}