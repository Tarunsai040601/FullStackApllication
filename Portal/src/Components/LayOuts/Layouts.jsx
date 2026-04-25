import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserNavBar from "../NavBars/UserNavBar/UserNavBar";

const Layout = () => {
  const token = localStorage.getItem("token");

  if (!token) {
  return <Navigate to="/login" />;
  }

  return (
    <div className="user-layout">
      <UserNavBar />
      <main className="user-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;