import { Routes, Route } from "react-router-dom"
import Login from "./views/Login/Login"
import Register from "./views/Register/Register"
import { AuthProvider } from "./context/AuthContext"
import Home from "./views/Home/Home"
import ProtectedRoutes from "./ProtectedRoutes"
import { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { checkToken } from "./redux/actions"

function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(checkToken() as any)
  },[])

  return (
    <div>
      <AuthProvider>
        <Routes>
            <Route path="/" element={<h1>Landing Page</h1>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>

            <Route element={<ProtectedRoutes/>}>
              <Route path="/home" element={<Home/>}/>
            </Route>
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
