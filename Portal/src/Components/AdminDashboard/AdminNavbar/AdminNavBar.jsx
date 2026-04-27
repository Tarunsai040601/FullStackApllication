import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    const admin = JSON.parse(sessionStorage.getItem("admin"));
    setAdminName(admin?.email || "Admin");
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("admin");
    sessionStorage.removeItem("adminToken");
    navigate("/login");
  };

  const navLinks = [
    { to: "/admindashboard/products", icon: <FiPackage />, label: "Products" },
    { to: "/admindashboard/reviews", icon: <FiStar />, label: "Reviews" },
    { to: "/admindashboard/customer", icon: <FiUsers />, label: "Customers" },
  ];

  return (
    <nav className="admin-navbar">

      {/* BRAND */}
      <Link to="/admindashboard" className="navbar-brand">
        <div className="brand-icon">🚀</div>
        <span className="brand-text">AdminPanel</span>
      </Link>

      {/* HAMBURGER */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* NAV LINKS + MOBILE EXTRAS */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>

        {/* Page Links */}
        {navLinks.map(({ to, icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`nav-link ${location.pathname === to ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {icon} {label}
          </Link>
        ))}

        {/* ✅ MOBILE ONLY — Welcome greeting */}
        <div className="mobile-welcome">
          <span>👋 Welcome, {adminName}</span>
        </div>

        {/* ✅ MOBILE ONLY — Logout button */}
        <button className="mobile-logout-btn" onClick={handleLogout}>
          <FiLogOut /> Logout
        </button>

      </div>

      {/* DESKTOP RIGHT SECTION */}
      <div className="nav-right">
        <div className="user-box">
          <span>Admin: {adminName}</span>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          <FiLogOut /> Logout
        </button>
      </div>

    </nav>
  );
};

export default AdminNavBar;