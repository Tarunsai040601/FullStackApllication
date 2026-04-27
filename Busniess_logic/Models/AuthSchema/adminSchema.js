const mongoose = require("mongoose");
require("dotenv").config();

const adminSchema = new mongoose.Schema(
  {
    name:{type:String,required:true,unique:true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      default: "admin",
    },
  },
  { timestamps: true }
);

const adminCollection = mongoose.model(
  process.env.AuthCollection,
  adminSchema
);

module.exports = adminCollection;