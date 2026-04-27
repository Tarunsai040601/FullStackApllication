import React, { useEffect, useState } from "react";
import "./cart.css";
import Footer from "../Fotter/Fotter";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  // ✅ GET USER NAME FROM SESSION
  const getUserName = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    return user?.email || "guest";
  };

  useEffect(() => {
    const userName = getUserName();
    const cartKey = `cart_${userName}`;
    const data = JSON.parse(localStorage.getItem(cartKey)) || [];
    setCart(data);
  }, []);

  // ❌ DELETE ITEM
  const handleDelete = (id) => {
    const userName = getUserName();
    const cartKey = `cart_${userName}`;
    const updated = cart.filter((item) => item._id !== id);
    setCart(updated);
    localStorage.setItem(cartKey, JSON.stringify(updated));
  };

  // 💰 TOTAL
  const total = cart.reduce((sum, item) => sum + Number(item.cost), 0);

  return (
    <>
    <div className="cart-page">
      <div className="cart-header">
        <h1>🛒 Your Cart</h1>
        <div className="cart-total">Total: ₹{total}</div>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>😕 No items in cart</p>
        </div>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Cost</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <img src={item.image?.url} alt={item.title} />
                    </td>
                    <td>{item.title}</td>
                    <td>₹{item.cost}</td>
                    <td>
                      <button onClick={() => handleDelete(item._id)}>
                        Delete ❌
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="mobile-cart-list">
            {cart.map((item) => (
              <div className="cart-card" key={item._id}>
                <img src={item.image?.url} alt={item.title} className="card-img" />
                <div className="card-info">
                  <p className="card-title">{item.title}</p>
                  <p className="card-cost">₹{item.cost}</p>
                </div>
                <button className="card-delete" onClick={() => handleDelete(item._id)}>
                  ❌
                </button>
              </div>
            ))}
          </div>
        </>
      )}
      
    </div>
    <Footer/>
    </>
  );
};

export default CartPage;