import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserProducts.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Footer from "../Fotter/Fotter.jsx";

// const API = "https://fullstackapllication-2.onrender.com/api/data/post";

const UserProductsDisplay = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://fullstackapllication-2.onrender.com/api/data/post`).then((res) => {
      setProducts(res.data.data);
    });
  }, []);

  const handleAddToCart = (product) => {
    const token = sessionStorage.getItem("userToken");
    const user = JSON.parse(sessionStorage.getItem("user"));
    const userName = user?.email;

    if (!token || !userName) {
      Swal.fire({
        title: "Login Required boss🔒",
        text: "Please login to add items to cart",
        icon: "warning",
      }).then((res) => {
        if (res.isConfirmed) navigate("/login");
      });
      return;
    }

    const cartKey = `cart_${userName}`;
    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

    const exists = cart.find((item) => item._id === product._id);

    if (exists) {
      Swal.fire("Already in cart 🛒");
      return;
    }

    cart.push(product);
    localStorage.setItem(cartKey, JSON.stringify(cart));

    Swal.fire("Added to cart ✅");
  };

  const handleBuy = () => {
    Swal.fire({
      title: "📲 Contact Dealer",
      text: "Please contact the dealer through WhatsApp to buy this item",
      icon: "info",
    });
  };

  return (
    <>
    <div className="user">
      <h1>Products</h1>

      <div className="grid">
        {products.map((p) => (
          <div className="card" key={p._id}>
            <img src={p.image.url} alt="" />

            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <h4>₹{p.cost}</h4>

            {/* BUTTONS */}
            <div className="btn-group">
              <button
                className="cart-btn"
                onClick={() => handleAddToCart(p)}
              >
                Add to Cart 🛒
              </button>

              <button className="buy-btn" onClick={handleBuy}>
                Buy Item
              </button>
            </div>
          </div>
        ))}
      </div>
     
    </div>
     <Footer/>
    </>
  );
};

export default UserProductsDisplay;