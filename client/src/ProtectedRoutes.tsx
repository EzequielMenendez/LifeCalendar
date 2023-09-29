import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { GlobalState } from "./types"

function ProtectedRoutes(){

    const isAuthenticated = useSelector((state:GlobalState)=>state.isAuth)

    if(!isAuthenticated){
        return <Navigate to='/login' replace/>
    }

    return <Outlet/>
}

export default ProtectedRoutes