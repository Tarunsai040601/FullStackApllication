const jwt = require("jsonwebtoken");
require("dotenv").config();

const authmiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // ❌ No token
    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Token required (Authorization header missing)",
      });
    }

    // ❌ Invalid format
    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Invalid token format. Use Bearer token",
      });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token missing",
      });
    }

    // ✅ VERIFY TOKEN
    const decoded = jwt.verify(token, process.env.jwt_token);

    // 🔥 attach user to request
    req.user = decoded;

    next();

  } catch (error) {
    console.log("AUTH ERROR:", error.message);

    // 🔥 better error handling
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Session expired, please login again",
      });
    }

    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

module.exports = authmiddleware;