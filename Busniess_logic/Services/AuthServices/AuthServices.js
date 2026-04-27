// models
const adminData = require("../../Models/AuthSchema/adminSchema.js");
const userData = require("../../Models/AuthSchema/userSchema.js");

// packages
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// helper → choose model based on role
const getModelByRole = (role) => {
  if (role === "admin") return adminData;
  if (role === "user") return userData;
  return null;
};



// ================= REGISTER =================
const registerController = async (req, res) => {
  try {
    const { name,email, password, role } = req.body;

    // validations
    if (!name||!email || !password || !role) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const roleNormalized = role.toLowerCase();

    if (!["admin", "user"].includes(roleNormalized)) {
      return res.status(400).json({
        message: "Role must be admin or user",
      });
    }

    // select model
    const Model = getModelByRole(roleNormalized);

    // check existing user
    const existingUser = await Model.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const newUser = await Model.create({
      name,
      email,
      password: hashedPassword,
      role: roleNormalized,
    });

    return res.status(201).json({
      message: `${roleNormalized} registered successfully`,
      user: {

        id: newUser._id,
        name:newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });

  } catch (error) {
    console.error("Register Error:", error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};



// ================= LOGIN =================
const loginController = async (req, res) => {
  try {
    const { name,email, password, role } = req.body;

    // validations
    if (!name||!email || !password || !role) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const roleNormalized = role.toLowerCase();

    if (!["admin", "user"].includes(roleNormalized)) {
      return res.status(400).json({
        message: "Role must be admin or user",
      });
    }

    // select model
    const Model = getModelByRole(roleNormalized);

    // find user
    const user = await Model.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // generate token
    const token = jwt.sign(
      {
        id: user._id,
        name:user.name,
        email: user.email,
        role: user.role,
      },
      process.env.jwt_token,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Login successful",
      user: {
        name:user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });

  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};



// export
module.exports = {
  registerController,
  loginController,
};