import React from "react";
import { Outlet } from "react-router-dom";
import UserNavBar from "../NavBars/UserNavBar/UserNavBar";

const Layout = () => {
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