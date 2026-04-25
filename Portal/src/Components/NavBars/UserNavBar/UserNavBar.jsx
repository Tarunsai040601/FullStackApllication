import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaShoppingCart,
  FaUtensils,
  FaSignInAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./UserNavBar.css";
import titlepic from '../../../assets/images/titlepic.jpg'

const UserNavBar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        <img
          src={titlepic}
          alt="logo"
        />
        <h2>PotiratesByCouples</h2>
      </div>

      {/* HAMBURGER / CLOSE */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* MENU */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li onClick={() => setMenuOpen(false)}><FaHome /> Home</li>
        <li onClick={() => setMenuOpen(false)}><FaInfoCircle /> About</li>
        <li onClick={() => setMenuOpen(false)}><FaServicestack /> Services</li>
        <li onClick={() => setMenuOpen(false)}><FaUtensils /> Items</li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="nav-right">
        <div className="cart">
          <FaShoppingCart />
        </div>

        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          <FaSignInAlt /> Login
        </button>
      </div>

    </nav>
  );
};

export default UserNavBar;