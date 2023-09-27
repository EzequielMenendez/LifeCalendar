import { createContext, useContext, useState, ReactNode } from "react"
import { loginRequest, registerRequest } from "../api/auth"
import { LoginUser, RegisterUser, UserData } from '../types'
import { useEffect } from 'react'

type AuthContextType = {
    singUp: (user: RegisterUser) => Promise<void>
    singIn: (user: LoginUser) => Promise<void>
    user:  null | UserData
    isAuthenticated: boolean
    errors: string | null
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

type AuthProviderProps = {
    children: ReactNode
};

export const useAuth = () =>{
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("useAuth must be within an AuthProvider")
    }
    return context
}

export const AuthProvider:React.FC<AuthProviderProps> = ({children}: { children: React.ReactNode }) =>{

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState(null)

    const singUp = async(user:RegisterUser) =>{
        try {
            const res = await registerRequest(user)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error:any) {
            setErrors(error.response.data.message)
        }
    }

    const singIn = async (user:LoginUser) => {
        try {
            await loginRequest(user)
        } catch (error:any) {
            setErrors(error.response.data.message)
        }
    }

    useEffect(()=>{
        if(errors){
            const timer = setTimeout(()=>{
                setErrors(null)
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    return(
        <AuthContext.Provider value={{singUp, singIn, user, isAuthenticated, errors}}>
            {children}
        </AuthContext.Provider>
    )
}