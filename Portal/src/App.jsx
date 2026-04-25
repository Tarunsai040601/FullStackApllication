import React from "react";
import { Routes, Route } from "react-router-dom";

import Register from "./Components/Pages/RegisterPage/Register";
import LoginPage from "./Components/Pages/LoginPage/LoginPage";

import UserHome from "./Components/Home/UserHome/UserHome";
import About from "./Components/About/About";

import Layout from "./Components/LayOuts/Layouts";

const App = () => {
  return (
    <Routes>

      {/* ✅ Public Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />

      {/* ✅ Layout Routes */}
      <Route path="/" element={<Layout />}>

        {/* 🔥 Default Home Page */}
        <Route index element={<UserHome />} />

        {/* Other Pages */}
        <Route path="/home" element={<UserHome />} />
        <Route path="/about" element={<About />} />

      </Route>

    </Routes>
  );
};

export default App;