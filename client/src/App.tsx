import { Routes, Route } from "react-router-dom"
import Login from "./views/Login/Login"
import Register from "./views/Register/Register"
import Home from "./views/Home/Home"
import ProtectedRoutes from "./ProtectedRoutes"
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { checkToken, resetFormError } from "./redux/actions"
import { GlobalState } from "./types"
import NavBar from "./components/NavBar/NavBar"
import Task from "./views/Task/Task"

function App() {

  const dispatch = useDispatch()
  const errorForm = useSelector((state:GlobalState)=>state.errors)
  useEffect(()=>{
    dispatch(checkToken() as any)
  },[])

  useEffect(()=>{
    if(errorForm){
      const timer = setTimeout(()=>{
        dispatch(resetFormError() as any)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [errorForm])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Landing Page</h1>}/>
        <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>

          <Route element={<ProtectedRoutes/>}>
            <Route path="/home" element={<Home/>}/>
            <Route path="/task" element={<Task/>}/>
          </Route>
      </Routes>
    </div>
  )
}

export default App
