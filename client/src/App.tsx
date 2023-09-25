import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Hola</h1>}/>
          <Route path="/login" element={<h1>Hola</h1>}/>
          <Route path="/register" element={<h1>Hola</h1>}/>
          <Route path="/profile" element={<h1>Hola</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
