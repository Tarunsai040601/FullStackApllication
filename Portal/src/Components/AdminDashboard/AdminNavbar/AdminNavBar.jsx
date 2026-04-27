import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./AdminNavBar.css";
import {
  FiPackage,
  FiStar,
  FiUsers,
  FiLogOut,
  FiMenu,
  FiX
} from "react-icons/fi";

const AdminNavBar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // 👤 Get user from localStorage
  const userName = localStorage.getItem("userName") || "Admin";

  const navLinks = [
    { to: "/admindashboard/products", icon: <FiPackage />, label: "Products" },
    { to: "/admindashboard/reviews", icon: <FiStar />, label: "Reviews" },
    { to: "/admindashboard/customers", icon: <FiUsers />, label: "Customers" },
  ];

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <nav className="admin-navbar">

      {/* BRAND */}
      <Link to="/admin-dashboard" className="navbar-brand">
        <div className="brand-icon">🚀</div>
        <span className="brand-text">AdminPanel</span>
      </Link>

      {/* MOBILE TOGGLE */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* NAV LINKS */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        {navLinks.map(({ to, icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`nav-link ${location.pathname === to ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <span className="nav-icon">{icon}</span>
            {label}
          </Link>
        ))}
      </div>

      {/* RIGHT SECTION */}
      <div className="nav-right">

        {/* 👤 USER */}
        <div className="user-box">
          <span>Welcome Admin: {userName}</span>
          <img
            src={`https://ui-avatars.com/api/?name=${userName}&background=00f7ff&color=000`}
            alt="avatar"
          />
        </div>

        {/* LOGOUT */}
        <button className="logout-btn" onClick={handleLogout}>
          <FiLogOut /> Logout
        </button>

      </div>

    </nav>
  );
};

export default AdminNavBar;