const mongoose = require("mongoose");
require("dotenv").config();

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

const userCollection = mongoose.model(
  process.env.UserCollection,
  userSchema
);

module.exports = userCollection;