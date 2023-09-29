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
            <div>
              <h1>LifePlan</h1>
              <button onClick={onLogout}>Logout</button>
            </div>
        )
    }
    return (
      <div>
        <h1>LifePlan</h1>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </div>
    )
}
  
export default NavBar
  