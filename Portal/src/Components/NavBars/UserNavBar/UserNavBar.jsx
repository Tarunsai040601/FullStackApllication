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
  const [greeting, setGreeting] = useState("");

  // Greeting
  const getGreeting = () => {
    const h = new Date().getHours();
    if (h >= 5 && h < 12) return " Good Morning 🌅 ";
    if (h >= 12 && h < 17) return " Good Afternoon ☀️ ";
    if (h >= 17 && h < 21) return " Good Evening 🌆";
    return " Good Night 🌙";
  };

  useEffect(() => {
    const updateAll = () => {
      const token = sessionStorage.getItem("userToken");
      const user = JSON.parse(sessionStorage.getItem("user"));

      // ✅ NAME FIX (IMPORTANT CHANGE)
      const name = user?.name || user?.username || user?.email || "";
      const email = user?.email || "";

      const cartKey = `cart_${email}`;
      const cart = JSON.parse(localStorage.getItem(cartKey)) || [];

      setIsLoggedIn(!!token);
      setUserName(name);
      setCartCount(cart.length);
      setGreeting(getGreeting());
    };

    updateAll();

    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000);

    window.addEventListener("storage", updateAll);

    return () => {
      window.removeEventListener("storage", updateAll);
      clearInterval(interval);
    };
  }, []);

  // Login
  const handleLogin = () => {
    Swal.fire({
      title: "Login Required 🔐",
      text: "Do you want to login?",
      icon: "question",
      showCancelButton: true,
    }).then((res) => {
      if (res.isConfirmed) navigate("/login");
    });
  };

  // Logout
  const handleLogout = () => {
    Swal.fire({
      title: "Logged Out",
      icon: "warning",
      showCancelButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("userToken");

        setIsLoggedIn(false);
        setUserName("");
        setCartCount(0);

        navigate("/login");
      }
    });
  };

  const formattedName =
    userName ? userName.charAt(0).toUpperCase() + userName.slice(1) : "";

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

      {/* NAV LINKS */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <NavLink to="/home" onClick={() => setMenuOpen(false)}><FaHome /> Home</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}><FaInfoCircle /> About</NavLink>
        <NavLink to="/services" onClick={() => setMenuOpen(false)}><DiAndroid /> Services</NavLink>
        <NavLink to="/reviews" onClick={() => setMenuOpen(false)}><FcCustomerSupport /> Reviews</NavLink>
        <NavLink to="/items" onClick={() => setMenuOpen(false)}><IoCameraOutline /> Items</NavLink>

        {/* MOBILE CART */}
        <div className="mobile-cart" onClick={() => { navigate("/cart"); setMenuOpen(false); }}>
          <FaShoppingCart />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          <span>Cart</span>
        </div>

        {/* MOBILE USER */}
        {isLoggedIn && (
          <div className="mobile-user">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
              alt="user"
              className="user-avatar"
            />
            <span>Hi..! 👋 {formattedName}</span>
            <span>{greeting}</span>
          </div>
        )}

        {/* LOGIN / LOGOUT */}
        {isLoggedIn ? (
          <button className="mobile-login-btn logout" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        ) : (
          <button className="mobile-login-btn" onClick={handleLogin}>
            <FaSignInAlt /> Login
          </button>
        )}
      </div>

      {/* RIGHT SIDE DESKTOP */}
      <div className="nav-right">

        <div className="cart" onClick={() => navigate("/cart")}>
          <FaShoppingCart />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>

        {isLoggedIn && (
          <div className="user-info">
            <span>Welcome:Hi..! 👋 {formattedName}, {greeting}</span>
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