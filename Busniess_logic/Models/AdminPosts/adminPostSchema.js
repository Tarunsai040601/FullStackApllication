const mongoose = require("mongoose");
require("dotenv").config();

const adminPostSchema = new mongoose.Schema(
  {
    image: {
  url: { type: String },
  public_id: { type: String }
}, 
    title: { type: String, required: true },
    description: { type: String, required: true }, // ✅ fixed typo
    cost: { type: String, required: true }
  },
  { timestamps: true }
);

// ✅ correct schema + model name
const AdminPost = mongoose.model(
  process.env.AdminCollect ,
  adminPostSchema
);

module.exports = AdminPost;