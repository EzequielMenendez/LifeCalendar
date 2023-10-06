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

  return (
    <header>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-6 flex items-center justify-between">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-xl font-bold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
            >
              Life Calendar
            </Link>
          </div>
          <div className={`md:flex`}>
            {isAuth ? (
              <div className="md:flex gap-4">
                <Link
                  to="/task"
                  className="block text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
                >
                  Task
                </Link>
                <button
                  onClick={onLogout}
                  className="block text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="md:flex gap-4">
                <Link
                  to="/login"
                  className="block text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
  
export default NavBar
  