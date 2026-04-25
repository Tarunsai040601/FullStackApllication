import React from 'react'
import Register from './Components/Pages/RegisterPage/Register'
import LoginPage from './Components/Pages/LoginPage/LoginPage'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      
     <Routes>

        {/* Register Page */}
        <Route path="/" element={<Register />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />
        </Routes>
    </div>
  )
}

export default App
