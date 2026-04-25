const jwt = require("jsonwebtoken");
require("dotenv").config();

const authmiddleware = (req, res, next) => {
  try {
    const authHeaders = req.headers.authorization;

    // ❌ No header
    if (!authHeaders) {
      return res.status(401).json({
        success: false,
        message: "Token required (Authorization header missing)",
      });
    }

    // ❌ Wrong format
    if (!authHeaders.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Invalid token format. Use Bearer token",
      });
    }

    const token = authHeaders.split(" ")[1];

    // ❌ No token after Bearer
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token required",
      });
    }

    // ✅ Verify
    const decoded = jwt.verify(token, process.env.jwt_token);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = authmiddleware;