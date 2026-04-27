const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    video: {
      url: String,
      public_id: String,
    },
    createdBy: {
      type: String, // admin name
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);