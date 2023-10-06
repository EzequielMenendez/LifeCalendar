import { useSelector, useDispatch } from "react-redux"
import { GlobalState } from "../../types"
import { Link } from "react-router-dom"
import { logout } from "../../redux/actions"

function NavBar() {

    const dispatch = useDispatch()
    const isAuth = useSelector((state:GlobalState)=>state.isAuth)

    const onLogout = () =>{
        dispatch(logout() as any)
    }

    if(isAuth){
        return (
            <header>
                <nav className="h-20 flex items-center justify-around bg-white shadow-md">
                    <Link to='/'>Life Calendar</Link>
                    <div className="flex gap-10">
                        <Link to='/task' className="mr-12">Task</Link>
                        <button onClick={onLogout}>Logout</button>
                    </div>
                </nav>
            </header>
        )
    }
    return (
        <header>
            <nav className="h-20 flex items-center justify-around bg-white shadow-md">
                <Link to='/'>Life Calendar</Link>
                <div className="flex gap-10">
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </div>
            </nav>
      </header>
    )
}
  
export default NavBar
  