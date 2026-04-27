import React from "react";
import { Outlet } from "react-router-dom";
import UserNavBar from "../NavBars/UserNavBar/UserNavBar";
import Whatsapp from '../Whatapp/Whatapp.jsx'

const Layout = () => {
  return (
    <div className="user-layout">
      <UserNavBar />
      <main className="user-content">
        <Outlet />
        <Whatsapp/>
      </main>
    </div>
  );
};

export default Layout;