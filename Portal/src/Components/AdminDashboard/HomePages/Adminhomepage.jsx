import React, { useState, useEffect } from "react";
import "./AdminHomepage.css";
import { Link } from "react-router-dom";

/* ------------------ DATA ------------------ */
const stats = [
  { icon: "📦", label: "Total Products", value: "148", change: "↑ 12 this week", up: true },
  { icon: "⭐", label: "Reviews", value: "3,842", change: "↑ 94 new", up: true },
  { icon: "👥", label: "Customers", value: "1,290", change: "↑ 38 joined", up: true },
  { icon: "🛒", label: "Pending Orders", value: "17", change: "↑ 5 urgent", up: false },
];

const orders = [
  { name: "Priya Sharma", id: "#ORD-1041", type: "Couple Portrait", status: "Delivered" },
  { name: "Arjun Reddy", id: "#ORD-1040", type: "Wedding Album", status: "Processing" },
  { name: "Neha Kapoor", id: "#ORD-1039", type: "Frame Package", status: "Delivered" },
  { name: "Karan Mehta", id: "#ORD-1038", type: "Digital Package", status: "Cancelled" },
];

const actions = [
  { icon: "➕", label: "Add Product", sub: "New listing", to: "/admin-dashboard/products" },
  { icon: "📤", label: "Upload Review", sub: "Client feedback", to: "/admin-dashboard/reviews" },
  { icon: "👤", label: "View Customers", sub: "All accounts", to: "/admin-dashboard/customers" },
  { icon: "📊", label: "Analytics", sub: "Performance", to: "/admin-dashboard/analytics" },
];

const statusClass = {
  Delivered: "b-green",
  Processing: "b-amber",
  Cancelled: "b-red",
};

/* ------------------ GREETING ------------------ */
const getGreeting = () => {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return { text: "Good Morning", emoji: "👋", badge: "🌅 Morning" };
  if (h >= 12 && h < 17) return { text: "Good Afternoon", emoji: "☀️", badge: "☀️ Afternoon" };
  if (h >= 17 && h < 21) return { text: "Good Evening", emoji: "🌆", badge: "🌆 Evening" };
  return { text: "Good Night", emoji: "🌙", badge: "🌙 Night" };
};

/* ------------------ COMPONENT ------------------ */
const AdminHomepage = () => {
  const [greeting, setGreeting] = useState(getGreeting());

  useEffect(() => {
    const timer = setInterval(() => setGreeting(getGreeting()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="dash">

      {/* 🔥 HERO WITH SLIDER */}
      <div className="hero-bar">

        {/* Background Slider */}
        {/* <div className="slider-track">
          <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486" alt="" />
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552" alt="" />
          <img src="https://images.unsplash.com/photo-1501901609772-df0848060b33" alt="" />
          <img src="https://images.unsplash.com/photo-1529634897030-0c9b7c1d90c1" alt="" />
        </div> */}

        {/* Overlay */}
        <div className="hero-overlay">
          <div>
            <h2>{greeting.text}, Admin {greeting.emoji}</h2>
            <p>Portraits by Couples · Capturing timeless love stories</p>
          </div>
          <div className="hero-badge">{greeting.badge}</div>
        </div>

      </div>

      {/* STATS */}
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-label">{s.label}</div>
            <div className="stat-value">{s.value}</div>
            <div className={`stat-change ${s.up ? "up" : "dn"}`}>
              {s.change}
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM */}
      <div className="bottom">

        {/* ORDERS */}
        <div className="panel">
          <div className="panel-title">🧾 Recent Orders</div>
          {orders.map((o, i) => (
            <div className="order-row" key={i}>
              <div className="order-info">
                <span className="order-name">{o.name}</span>
                <span className="order-id">{o.id} · {o.type}</span>
              </div>
              <span className={`badge ${statusClass[o.status]}`}>
                {o.status}
              </span>
            </div>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="panel">
          <div className="panel-title">⚡ Quick Actions</div>
          <div className="action-grid">
            {actions.map((a, i) => (
              <Link to={a.to} className="action-btn" key={i}>
                <span className="aicon">{a.icon}</span>
                <div>
                  <div className="alabel">{a.label}</div>
                  <div className="asub">{a.sub}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default AdminHomepage;