import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavBar from "../NavBars/AdminNavBar/AdminNavBar";

const AdminLayout = () => {
  return (
    <div>
      <AdminNavBar />
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;