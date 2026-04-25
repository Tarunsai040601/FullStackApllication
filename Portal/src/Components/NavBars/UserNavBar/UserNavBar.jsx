import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaShoppingCart,
  FaSignInAlt,
  FaBars,
  FaTimes,
  FaSignOutAlt
} from "react-icons/fa";
import { FcCustomerSupport } from "react-icons/fc";
import { DiAndroid } from "react-icons/di";
import { IoCameraOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import "./UserNavBar.css";
import titlepic from "../../../assets/images/titlepic.jpg";

const UserNavBar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("token");
      const name = localStorage.getItem("userName");

      setIsLoggedIn(!!token);
      setUserName(name || "");
    };

    checkLogin();
    window.addEventListener("storage", checkLogin);

    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  const handleLogin = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to login?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");

        setIsLoggedIn(false);
        setUserName("");

        Swal.fire({
          title: "Logged out 👋",
          icon: "success",
        }).then(() => {
          navigate("/");
        });
      }
    });
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        <img src={titlepic} alt="logo" />
        <h2>PotiratesByCouples</h2>
      </div>

      {/* MENU ICON */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* MENU */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <NavLink to="/home"><FaHome /> Home</NavLink>
        <NavLink to="/about"><FaInfoCircle /> About</NavLink>
        <NavLink to="/services"><DiAndroid /> Services</NavLink>
        <NavLink to="/reviews"><FcCustomerSupport /> Reviews</NavLink>
        <NavLink to="/items"><IoCameraOutline /> Items</NavLink>

        {/* MOBILE LOGIN */}
        {isLoggedIn ? (
          <button className="mobile-login-btn" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        ) : (
          <button className="mobile-login-btn" onClick={handleLogin}>
            <FaSignInAlt /> Login
          </button>
        )}

      </div>

      {/* RIGHT SIDE */}
      <div className="nav-right">
        <div className="cart">
          <FaShoppingCart />
        </div>

        {/* ✅ Welcome Name */}
        {isLoggedIn && (
  <div className="user-info">
   
    <span className="welcome-text">
      Welcome: {userName} 👋
    </span>
     <img
      src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsb2ZmaWNlN18zZF9zdHlsZV9ib3lfc2F5aW5nX2hlbGxvX3dp
      dGhfc21pbGVfaXNvbGF0ZWRfb19kM2ZkNjFkZC00M2M0LTQ0NDEtOWE5MC1mYzQ0MTNlNjBhNTRfMS5wbmc.png"  // 🔥 cartoon image
      alt="user"
      className="user-avatar"
    />
  </div>
)}

        {isLoggedIn ? (
          <button className="login-btn" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        ) : (
          <button className="login-btn" onClick={handleLogin}>
            <FaSignInAlt /> Login
          </button>
        )}
      </div>

    </nav>
  );
};

export default UserNavBar;