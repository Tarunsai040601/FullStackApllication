const express = require("express");
const {
  adminpostFetching,
  adminpostData,
  adminpostFetch,
  adminpostUpdate,
  adminPostDelete,
} = require("../../Services/adminController/adminPostController");

const authmiddleware = require("../../MiddleWares/AuthMiddle/Auth.js");
const roleMiddleware = require("../../Middlewares/AuthMiddle/RoleMiddleware.js");

const adminPost = express.Router();

// 🔓 Public route (optional)
adminPost.get(
  "/data/post",
  authmiddleware,
  roleMiddleware("admin"),
  adminpostFetching,
);

// 🔐 Admin only routes
adminPost.post(
  "/data/post",
  authmiddleware,
  roleMiddleware("admin"),
  adminpostData,
);

// get by id
adminPost.get(
  "/data/post/:id",
  authmiddleware,
  roleMiddleware("admin"),
  adminpostFetch,
);

// update
adminPost.patch(
  "/data/post/:id",
  authmiddleware,
  roleMiddleware("admin"),
  adminpostUpdate,
);

// delete
adminPost.delete(
  "/data/post/:id",
  authmiddleware,
  roleMiddleware("admin"),
  adminPostDelete,
);

module.exports = adminPost;
