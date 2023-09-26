import { createContext, useContext, useState, ReactNode } from "react";
import { registerRequest } from "../api/auth";
import { UserData, UserDataId } from '../types'

type AuthContextType = {
    singUp: (user: UserData) => Promise<void>
    user: UserDataId | null
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

    const singUp = async(user:UserData) =>{
        try {
            const res = await registerRequest(user)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error:any) {
            setErrors(error.response.data.message)
        }
    }

    return(
        <AuthContext.Provider value={{singUp, user, isAuthenticated, errors}}>
            {children}
        </AuthContext.Provider>
    )
}