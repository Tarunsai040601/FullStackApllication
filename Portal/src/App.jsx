import React from "react";
import Register from "./Components/Pages/RegisterPage/Register";
import LoginPage from "./Components/Pages/LoginPage/LoginPage";
import UserNavBar from "./Components/NavBars/UserNavBar/UserNavBar";


import { Routes, Route } from "react-router-dom";
import UserHome from "./Components/Home/UserHome/UserHome";

const App = () => {
  return (
    <div>
      <Routes>

        {/* Home Page (Navbar + Content) */}
        <Route
          path="/"
          element={
            <>
              <UserNavBar />
              <UserHome/>
            </>
          }
        />

        {/* Auth Pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </div>
  );
};

export default App;