import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaShoppingCart,
  FaSignInAlt,
  FaBars,
  FaTimes,
  FaSignOutAlt,
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
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateAll = () => {
      const token = localStorage.getItem("token");
      const name = localStorage.getItem("userName");

      const cartKey = `cart_${name}`;
      const cart = JSON.parse(localStorage.getItem(cartKey)) || [];

      setIsLoggedIn(!!token);
      setUserName(name || "");
      setCartCount(cart.length);
    };

    updateAll();

    window.addEventListener("storage", updateAll);
    return () => window.removeEventListener("storage", updateAll);
  }, []);

  const handleLogin = () => {
    Swal.fire({
      title: "Login Required 🔐",
      text: "Do you want to login?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((res) => {
      if (res.isConfirmed) navigate("/login");
    });
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Logout?",
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((res) => {
      if (res.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");

        setIsLoggedIn(false);
        setUserName("");
        setCartCount(0);

        Swal.fire("Logged out 👋");

        navigate("/");
      }
    });
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={titlepic} alt="logo" />
        <h2>PotiratesByCouples</h2>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <NavLink to="/home"><FaHome /> Home</NavLink>
        <NavLink to="/about"><FaInfoCircle /> About</NavLink>
        <NavLink to="/services"><DiAndroid /> Services</NavLink>
        <NavLink to="/reviews"><FcCustomerSupport /> Reviews</NavLink>
        <NavLink to="/items"><IoCameraOutline /> Items</NavLink>

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

      <div className="nav-right">
        <div className="cart" onClick={() => navigate("/cart")}>
          <FaShoppingCart />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>

        {isLoggedIn && (
          <div className="user-info">
            <span>Welcome: {userName} 👋</span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
              alt="user"
              className="user-avatar"
            />
          </div>
        )}

        {isLoggedIn ? (
          <button className="login-btn logout" onClick={handleLogout}>
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