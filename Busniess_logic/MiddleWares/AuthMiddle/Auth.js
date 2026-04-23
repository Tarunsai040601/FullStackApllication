// takening the jwt webtoken
const jwt = require("jsonwebtoken");

// takinf dotenv
const dotenv = require("dotenv").config({ quite: true });

// auth middleware
const authmiddleware = async (req, res, next) => {
  try {
    // authHeaders
    const authHeaders = req.headers["authorization"];

    if (!authHeaders) {
      return res.status(401).json({
        message: "authHeader is missing",
      });
    }

    // format: Bearer token
    const Token = authHeaders.split(" ")[1];

    if (!Token) {
      return res.status(401).json({
        message: "token is missing",
      });
    }

    // verify token
    const tokenTrue = jwt.verify(Token, process.env.jwt_token);

    req.user = tokenTrue;

    next();

  } catch (error) {
    return res.status(401).json({
      message: "invalid or expired token",
    });
  }
};
module.export=authmiddleware
