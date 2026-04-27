const express = require("express");
const router = express.Router();

const upload = require("../MiddleWares/multer"); // your cloudinary multer
const {
  createReview,
  getReviews,
} = require("../Services/reviewController.js");

// ➕ create review with image upload
router.post("/add", upload.single("image"), createReview);

// 📥 get reviews
router.get("/all", getReviews);

module.exports = router;