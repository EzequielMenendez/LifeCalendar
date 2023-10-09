import { Routes, Route } from "react-router-dom"
import Login from "./views/Login/Login"
import Register from "./views/Register/Register"
import ProtectedRoutes from "./ProtectedRoutes"
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { resetFormError } from "./redux/actions"
import { GlobalState } from "./types"
import NavBar from "./components/NavBar/NavBar"
import Task from "./views/Task/Task"
import LandingPage from "./views/LandingPage/LandingPage"
import Footer from "./components/Footer/Footer"
import AboutMe from "./views/AboutMe/AboutMe"

function App() {

  const dispatch = useDispatch()
  const errorForm = useSelector((state:GlobalState)=>state.errors)
  /*useEffect(()=>{
    dispatch(checkToken() as any)
  },[])*/

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
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/aboutme" element={<AboutMe />}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path="/task" element={<Task/>}/>
          </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
