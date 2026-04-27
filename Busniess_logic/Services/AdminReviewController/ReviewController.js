const Review = require("../../Models/reviews/reviewModel.js");

// ✅ CREATE REVIEW (VIDEO POST)
const createReview = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Video is required ❌" });
    }

    const newReview = new Review({
      title,
      description,
      video: {
        url: req.file.path,
        public_id: req.file.filename,
      },
      createdBy: req.user?.name || "Admin",
    });

    await newReview.save();

    res.status(201).json({
      message: "Review video uploaded ✅",
      data: newReview,
    });

  } catch (error) {
    res.status(500).json({
      message: "Error uploading review ❌",
      error: error.message,
    });
  }
};

// ✅ GET ALL REVIEWS
const getReviews = async (req, res) => {
  try {
    const data = await Review.find().sort({ createdAt: -1 });
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ DELETE REVIEW
const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    await Review.findByIdAndDelete(id);

    res.json({ message: "Review deleted 🗑️" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const updated = await Review.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    res.json({
      message: "Review updated ✏️",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createReview,
  getReviews,
  deleteReview,
  updateReview
};