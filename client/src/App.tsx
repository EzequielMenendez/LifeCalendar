import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./views/Login/Login"
import Register from "./views/Register/Register"
import { AuthProvider } from "./context/AuthContext"

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Hola</h1>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/profile" element={<h1>Hola</h1>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
