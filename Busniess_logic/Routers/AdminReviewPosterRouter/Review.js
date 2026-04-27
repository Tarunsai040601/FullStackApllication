const express = require("express");
const review = express.Router();

const upload = require("../../MiddleWares/multer.js");

const {
  createReview,
  getReviews,
  deleteReview,
  updateReview,
} = require("../../Services/AdminReviewController/ReviewController.js");

// 🔐 (Optional but Recommended)
const authMiddleware = require("../../MiddleWares/AuthMiddle/Auth.js");
const roleMiddleware = require("../../MiddleWares/AuthMiddle/RoleMiddleware.js");

/* ================= ROUTES ================= */

// ✅ GET ALL REVIEWS (Public)
review.get("/get", getReviews);

// ✅ CREATE REVIEW (ADMIN)
review.post(
  "/post",
  authMiddleware,
  roleMiddleware("admin"),
  upload.single("video"),
  createReview
);

// ✅ UPDATE REVIEW (ADMIN ONLY)
review.patch(
  "/patch/:id",
  authMiddleware,
  roleMiddleware("admin"),
  updateReview
);

// ✅ DELETE REVIEW (ADMIN ONLY)
review.delete(
  "/delete/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteReview
);

module.exports = review;