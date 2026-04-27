import React, { useEffect, useState } from "react";
import "./cart.css";

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
    <div className="cart-page">
      <h1>Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <h2>No items in cart</h2>
      ) : (
        <>
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
                    <img src={item.image.url} alt="" />
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

          <h2>Total: ₹{total}</h2>
        </>
      )}
    </div>
  );
};

export default CartPage;