import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { GlobalState } from "./types"

function ProtectedRoutes(){

    const isAuthenticated = useSelector((state:GlobalState)=>state.isAuth)
    const loading = useSelector((state:GlobalState)=>state.loading)

    if(loading){
        <h1>Loading...</h1>
    }
    if (!loading && !isAuthenticated) {
        window.location.href = '/login';
        return null
    }

    return <Outlet/>
}

export default ProtectedRoutes