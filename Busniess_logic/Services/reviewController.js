const Review = require("../Models/ReviewModel.js");

// ➕ Create Review
const createReview = async (req, res) => {
  try {
    const { name, rating, info } = req.body;

    const newReview = new Review({
      name,
      rating,
      info,
      image: {
        url: req.file.path,
        public_id: req.file.filename,
      },
    });

    await newReview.save();

    res.status(201).json({
      message: "Review added successfully",
      data: newReview,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📥 Get all reviews
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createReview, getReviews };