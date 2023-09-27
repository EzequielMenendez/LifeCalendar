import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./views/Login/Login"
import Register from "./views/Register/Register"
import { AuthProvider } from "./context/AuthContext"
import Home from "./views/Home/Home"
import ProtectedRoutes from "./ProtectedRoutes"

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Landing Page</h1>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>

            <Route element={<ProtectedRoutes/>}>
              <Route path="/home" element={<Home/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
