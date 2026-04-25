const express = require("express");

const {
  postFetching,
  postData,
  postFetch,
  postUpdate,
  PostDelete,
} = require("../../Services/adminController/adminPostController");

const authmiddleware = require("../../MiddleWares/AuthMiddle/Auth.js");
const roleMiddleware = require("../../MiddleWares/AuthMiddle/RoleMiddleware.js");
const upload = require("../../MiddleWares/multer");

const adminPost = express.Router();

// Public route
adminPost.get("/data/post", postFetching);

// POST
adminPost.post(
  "/data/post",
  authmiddleware,
  roleMiddleware("admin"),
  upload.single("image"),  // ✅ MUST
  postData
);

// GET BY ID
adminPost.get(
  "/data/post/:id",
  authmiddleware,
  roleMiddleware("admin"),
  postFetch
);

// UPDATE
adminPost.patch(
  "/data/post/:id",
  authmiddleware,
  roleMiddleware("admin"),
  upload.single("image"),
  postUpdate
);

// DELETE
adminPost.delete(
  "/data/post/:id",
  authmiddleware,
  roleMiddleware("admin"),
  PostDelete
);

module.exports = adminPost;