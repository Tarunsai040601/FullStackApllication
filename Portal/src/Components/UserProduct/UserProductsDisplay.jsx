import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserProducts.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:4000/api/data";

const UserProductsDisplay = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/post`).then((res) => {
      setProducts(res.data.data);
    });
  }, []);

  // 🔥 ADD TO CART WITH LOGIN CHECK
  const handleAddToCart = (product) => {
    const token = localStorage.getItem("token");

    // ❌ If not logged in
    if (!token) {
      Swal.fire({
        title: "Login Required 🔒",
        text: "Please login to add items to cart",
        icon: "warning",
        confirmButtonText: "Login",
      }).then((res) => {
        if (res.isConfirmed) navigate("/login");
      });
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find((item) => item._id === product._id);

    if (exists) {
      Swal.fire("Already in cart 🛒");
      return;
    }

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    Swal.fire("Added to cart ✅");
  };

  return (
    <div className="user">
      <h1>Products</h1>

      <div className="grid">
        {products.map((p) => (
          <div className="card" key={p._id}>
            <img src={p.image.url} alt="" />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <h4>₹{p.cost}</h4>

            <button
              className="cart-btn"
              onClick={() => handleAddToCart(p)}
            >
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProductsDisplay;