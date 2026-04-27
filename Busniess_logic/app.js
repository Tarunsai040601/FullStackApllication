const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const DataBase = require("./Configurations/Config.js");

// 🔐 Routes
const authRoutes = require("./Routers/AuthRouters/AuthRouters.js");
const adminPost = require("./Routers/adminPostRoutes/adminPosts.js");


const app = express();
const port = process.env.PORT || 4000;

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ================= DATABASE ================= */
DataBase();

/* ================= ROUTES ================= */

// Auth routes (login/register)
app.use("/api", authRoutes);

// Admin posts (products)
app.use("/api/data", adminPost);



/* ================= SERVER START ================= */
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});