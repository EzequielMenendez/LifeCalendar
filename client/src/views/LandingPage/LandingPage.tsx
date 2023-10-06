import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GlobalState } from "../../types";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions";

function NavBar() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: GlobalState) => state.isAuth);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const onLogout = () => {
    dispatch(logout() as any);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-6 md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-xl font-bold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
            >
              Life Calendar
            </Link>
            {isAuth ? (
              <div className="md:hidden">
                <button
                  onClick={onLogout}
                  className="text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="md:hidden">
                <button
                  className="text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out"
                >
                  {isMobile ? "Menu" : "Login"}
                </button>
              </div>
            )}
          </div>
          <div
            className={`md:flex ${
              isAuth ? (isMobile ? "hidden-mobile" : "") : "hidden"
            } mt-4 md:mt-0`}
          >
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
  );
}

export default NavBar;