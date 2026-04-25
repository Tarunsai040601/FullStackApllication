import React from 'react'
import { Route, Routes } from 'react-router-dom'

import UserHome from './Components/Home/UserHome/UserHome.jsx'
import About from './Components/About/About.jsx'
import Layout from './Components/LayOuts/Layouts.jsx'

import UserLogin from './Components/Pages/LoginPage/LoginPage.jsx'
import UserRegister from './Components/Pages/RegisterPage/Register.jsx'
import Services from './Components/Services/Services.jsx'

const App = () => {
  return (
    <Routes>

      {/* 🔓 Public Routes */}
      <Route path="/login" element={<UserLogin />} />
      <Route path="/register" element={<UserRegister />} />

      {/* 🔐 Protected Routes */}
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<UserHome />}/>
        <Route path="/home" element={<UserHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
      </Route>

    </Routes>
  )
}

export default App