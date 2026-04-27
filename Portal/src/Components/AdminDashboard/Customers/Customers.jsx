import React, { useState, useEffect } from "react";
import "./Customers.css";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [totalVisitors, setTotalVisitors] = useState(0);

  const loadCustomers = () => {
    const allKeys = Object.keys(localStorage);
    const cartKeys = allKeys.filter((key) => key.startsWith("cart_"));
    const onlineUsers = JSON.parse(localStorage.getItem("onlineUsers")) || [];

    // Total visitors count (all who ever visited)
    const visitorCount = parseInt(localStorage.getItem("totalVisitors") || "0");
    setTotalVisitors(visitorCount);

    const data = cartKeys.map((key) => {
      const email = key.replace("cart_", "");
      const cart = JSON.parse(localStorage.getItem(key)) || [];
      const total = cart.reduce((sum, item) => sum + Number(item.cost || 0), 0);
      const isOnline = onlineUsers.includes(email);
      const loginTime = localStorage.getItem(`loginTime_${email}`) || null;

      return { email, cartCount: cart.length, totalSpent: total, isOnline, loginTime };
    });

    data.sort((a, b) => b.isOnline - a.isOnline);
    setCustomers(data);
    setLastUpdated(new Date());
  };

  useEffect(() => {
    loadCustomers();
    const interval = setInterval(loadCustomers, 5000);
    window.addEventListener("storage", loadCustomers);
    return () => { clearInterval(interval); window.removeEventListener("storage", loadCustomers); };
  }, []);

  const filtered = customers.filter((c) =>
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  const formatTime = (timeStr) => {
    if (!timeStr) return "Never";
    const d = new Date(timeStr);
    return d.toLocaleString("en-IN", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
  };

  const onlineCount = customers.filter(c => c.isOnline).length;

  return (
    <div className="cust-page">

      {/* ── TOP STATS BAR ── */}
      <div className="top-stats">
        {/* <div className="ts-item">
          <span className="ts-num">{totalVisitors}</span>
          <span className="ts-lbl">🌐 Total Visitors</span>
        </div> */}
        <div className="ts-divider" />
        <div className="ts-item">
          <span className="ts-num">{customers.length}</span>
          <span className="ts-lbl">👤 Registered Users</span>
        </div>
        <div className="ts-divider" />
        {/* <div className="ts-item highlight">
          <span className="ts-num green">{onlineCount}</span>
          <span className="ts-lbl">🟢 Online Now</span>
        </div> */}
        <div className="ts-divider" />
        {/* <div className="ts-item">
          <span className="ts-num">{customers.length - onlineCount}</span>
          <span className="ts-lbl">⚫ Offline</span>
        </div> */}
      </div>

      {/* ── TITLE + SEARCH ── */}
      <div className="cust-toolbar">
        <div>
          <h1 className="cust-title">👥 Customers</h1>
          <p className="cust-sub">Refreshes every 5s · {lastUpdated.toLocaleTimeString("en-IN")}</p>
        </div>
        <div className="search-wrap">
          <input
            type="text"
            placeholder="Search email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={loadCustomers}>🔄</button>
        </div>
      </div>

      {/* ── USER LIST ── */}
      {filtered.length === 0 ? (
        <div className="empty">
          <div className="empty-icon">😕</div>
          <p>No customers yet</p>
          <span>Users show up here after login + add to cart</span>
        </div>
      ) : (
        <div className="user-list">
          {filtered.map((c, i) => (
            <div className={`user-row ${c.isOnline ? "is-online" : ""}`} key={c.email}>

              {/* Left — Avatar + pulse */}
              <div className="ur-left">
                <div className="avatar-wrap">
                  <div className="avatar">{c.email.charAt(0).toUpperCase()}</div>
                  {c.isOnline && <span className="pulse" />}
                </div>
                <div className="ur-index">#{i + 1}</div>
              </div>

              {/* Middle — Info */}
              <div className="ur-mid">
                <div className="ur-email">{c.email}</div>
                <div className="ur-meta">
                  <span className={`ur-status ${c.isOnline ? "on" : "off"}`}>
                    {c.isOnline ? "🟢 Online" : "⚫ Offline"}
                  </span>
                  <span className="ur-dot">·</span>
                  <span className="ur-time">Last login: {formatTime(c.loginTime)}</span>
                </div>
              </div>

              {/* Right — Stats chips */}
              <div className="ur-right">
                <div className="chip cart-chip">
                  🛒 <strong>{c.cartCount}</strong> items
                </div>
                <div className="chip spend-chip">
                  ₹<strong>{c.totalSpent.toLocaleString("en-IN")}</strong>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Customers;