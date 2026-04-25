import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // submit
  const handlerSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/api/login",
        formData
      );

      // store token
      localStorage.setItem("token", res.data.token);

      Swal.fire({
        title: "Login Success 🎉",
        text: res.data.message,
        icon: "success",
        confirmButtonColor: "#6c63ff",
      }).then(() => {
        // role based redirect
        if (res.data.user.role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/user-dashboard");
        }
      });

    } catch (error) {
      Swal.fire({
        title: "Login Failed ❌",
        text: error.response?.data?.message || "Something went wrong",
        icon: "error",
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h2>Welcome Back</h2>

        <form onSubmit={handlerSubmit}>

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* PASSWORD */}
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <span
              className="toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* ROLE */}
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/">Register</Link>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;