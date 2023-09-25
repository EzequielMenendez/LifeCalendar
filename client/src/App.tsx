import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./views/Login/Login"
import Register from "./views/Register/Register"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Hola</h1>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/profile" element={<h1>Hola</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
