import React from "react";
import { Route, Routes } from "react-router-dom";

import UserHome from "./Components/Home/UserHome/UserHome.jsx";
import About from "./Components/About/About.jsx";
import Layout from "./Components/LayOuts/Layouts.jsx";

import UserLogin from "./Components/Pages/LoginPage/LoginPage.jsx";
import UserRegister from "./Components/Pages/RegisterPage/Register.jsx";
import Services from "./Components/Services/Services.jsx";
import AdminLayout from "./Components/LayOuts/AdminLayout.jsx";
import AdminHomepage from "./Components/AdminDashboard/HomePages/Adminhomepage.jsx";



const App = () => {
  return (
    <Routes>

      {/* 🔓 Public */}
      <Route path="/login" element={<UserLogin />} />
      <Route path="/register" element={<UserRegister />} />

      {/* 🔐 User Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<UserHome />} />   {/* ✅ FIX */}
        <Route path="home" element={<UserHome />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
      </Route>

      {/* 🔐 Admin Layout */}
     <Route path="/admindashboard" element={<AdminLayout/>}>
     <Route path="/admindashboard" element={<AdminHomepage/>}/>

     </Route>


    </Routes>
  );
};

export default App;