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
import AdminProducts from "./Components/AdminDashboard/AdminProducts/AdminProducts.jsx";

import UserProductsDisplay from "./Components/UserProduct/UserProductsDisplay.jsx";
import CartPage from "./Components/Addcard/CartPage.jsx"; // ✅ ADD THIS

const App = () => {
  return (
    <Routes>

      {/* 🔓 PUBLIC ROUTES */}
      <Route path="/login" element={<UserLogin />} />
      <Route path="/register" element={<UserRegister />} />

      {/* 🔐 USER ROUTES */}
      <Route path="/" element={<Layout />}>
        <Route index element={<UserHome />} />
        <Route path="home" element={<UserHome />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="items" element={<UserProductsDisplay />} />
        <Route path="cart" element={<CartPage />} /> {/* ✅ CART */}
      </Route>

      {/* 🔐 ADMIN ROUTES */}
      <Route path="/admindashboard" element={<AdminLayout />}>
        <Route index element={<AdminHomepage />} />   {/* ✅ FIX */}
        <Route path="products" element={<AdminProducts />} /> {/* ✅ FIX */}
      </Route>

    </Routes>
  );
};

export default App;