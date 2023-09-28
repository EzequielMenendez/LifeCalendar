import { createContext, useContext, useState, ReactNode } from "react"
import { loginRequest, registerRequest, verifyTokenRequest } from "../api/auth"
import { LoginUser, RegisterUser, UserData } from '../types'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

type AuthContextType = {
    singUp: (user: RegisterUser) => Promise<void>
    singIn: (user: LoginUser) => Promise<void>
    user:  null | UserData
    isAuthenticated: boolean
    errors: string | null
    loading: boolean
    logout: () => Promise<void>
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
    const [loading, setLoading] = useState(true)

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
            const res = await loginRequest(user)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error:any) {
            setErrors(error.response.data.message)
        }
    }

    const logout = async() =>{
        Cookies.remove("token")
        setIsAuthenticated(false)
        setUser(null)
    }

    useEffect(()=>{
        if(errors){
            const timer = setTimeout(()=>{
                setErrors(null)
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    useEffect(()=>{
        const checkToken = async() =>{
            const cookies = Cookies.get()
            if(!cookies.token){
                setIsAuthenticated(false)
                setUser(null)
                setLoading(false)
                return
            }
            try {
                const res = await verifyTokenRequest()
                if(!res.data){
                    setIsAuthenticated(false)
                    setLoading(false)
                    return
                }
                setIsAuthenticated(true)
                setLoading(false)
                setUser(res.data)
            } catch (error) {
                setIsAuthenticated(false)
                setUser(null)
                setLoading(false)
            }
        }
        checkToken()
    }, [])

    return(
        <AuthContext.Provider value={{singUp, loading, logout, singIn, user, isAuthenticated, errors}}>
            {children}
        </AuthContext.Provider>
    )
}