// initalisation the express lib
const express = require("express");
const {
  registerController,
  loginController,
} = require("../../Services/AuthServices/AuthServices");

// assiging router to a variable
const authRoutes = express.Router();

// creating a api authRoutes

// default api
authRoutes.get("/default", async (req, res) => {
  try {
    res.status(200).json({ message: "i am default api" });
  } catch (error) {
    console.log("sonething went wrong:",error)
    res.status(400).json({ message: "i am default api something went wrong" });
  }
});

// register api
authRoutes.post("/register", registerController);

// login api
authRoutes.get("/login", loginController);

// module export
module.exports = authRoutes;
