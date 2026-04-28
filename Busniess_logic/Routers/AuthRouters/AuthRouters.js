// initialize express
const express = require("express");

// controllers
const {
  registerController,
  loginController,
} = require("../../Services/AuthServices/AuthServices.js");

// middlewares
const authmiddleware = require("../../MiddleWares/AuthMiddle/Auth.js");
const roleMiddleware = require("../../MiddleWares/AuthMiddle/RoleMiddleware.js");

// router
const authRoutes = express.Router();

// ✅ DEFAULT API
authRoutes.get("/default", async (req, res) => {
  try {
    res.status(200).json({ message: "i am default api" });
  } catch (error) {
    console.log("something went wrong:", error);
    res.status(400).json({ message: "something went wrong" });
  }
});

// ✅ REGISTER
authRoutes.post("/register", registerController);

// ✅ LOGIN
authRoutes.post("/login", loginController);

//  ADMIN DASHBOARD (ONLY ADMIN)
authRoutes.get(
  "/admin-dashboard",
  authmiddleware,
  roleMiddleware("admin"),
  (req, res) => {
    res.status(200).json({
      message: "Welcome Admin Dashboard",
      user: req.user,
    });
  },
);

//  USER DASHBOARD (ONLY USER)
authRoutes.get(
  "/user-dashboard",
  authmiddleware,
  roleMiddleware("user"),
  (req, res) => {
    res.status(200).json({
      message: "Welcome User Dashboard",
      user: req.user,
    });
  },
);

// export
module.exports = authRoutes;
