import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AdminNavBar.css';
import {
  FiPackage,
  FiStar,
  FiUsers,
  FiLogOut
} from 'react-icons/fi';

const AdminNavBar = () => {
  const location = useLocation();

  const navLinks = [
    { to: '/admin/products',  icon: <FiPackage />, label: 'Products' },
    { to: '/admin/reviews',   icon: <FiStar />,    label: 'Reviews Upload' },
    { to: '/admin/customers', icon: <FiUsers />,   label: 'Customers' },
  ];

  return (
    <nav className="admin-navbar">

      {/* BRAND */}
      <Link to="/admin" className="navbar-brand">
        <div className="brand-icon">🚀</div>
        <span className="brand-text">AdminPanel</span>
      </Link>

      {/* NAV LINKS */}
      <div className="navbar-links">
        {navLinks.map(({ to, icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`nav-link ${location.pathname === to ? 'active' : ''}`}
          >
            <span className="nav-icon">{icon}</span>
            {label}
          </Link>
        ))}
      </div>

      {/* LOGOUT */}
      <button className="logout-btn">
        <FiLogOut /> Logout
      </button>

    </nav>
  );
};

export default AdminNavBar;