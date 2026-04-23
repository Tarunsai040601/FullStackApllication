// retriving schema from authschema
const adminData = require("../../Models/AuthSchema/adminSchema.js");
const userData = require("../../Models/AuthSchema/userSchema.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register controller
const registerController = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    console.log("body_data:", req.body);

    // required fields
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "all fields required",
      });
    }

    // normalize role
    const roleNormalized = role.toLowerCase();

    // validate role
    if (roleNormalized !== "admin" && roleNormalized !== "user") {
      return res.status(400).json({
        message: "role must be admin or user",
      });
    }

    // choose collection
    let Model;
    if (roleNormalized === "admin") {
      Model = adminData;
    } else {
      Model = userData;
    }

    // check user exists
    const foundUser = await Model.findOne({ email });

    if (foundUser) {
      return res.status(409).json({
        message: `user already exist with ${email}`,
      });
    }

    // hash password
    const protectPassword = bcrypt.hashSync(password, 10);

    // create user
    const newUser = new Model({
      email,
      password: protectPassword,
      role: roleNormalized,
    });

    await newUser.save();

    res.status(201).json({
      message: `${roleNormalized} registered successfully`,
      details: { email: newUser.email, role: newUser.role },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

// login controller
const loginController = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    console.log("body_data:", req.body);

    // required fields
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "all fields required",
      });
    }

    // normalize role
    const roleNormalized = role.toLowerCase();

    // validate role
    if (roleNormalized !== "admin" && roleNormalized !== "user") {
      return res.status(400).json({
        message: "role must be admin or user",
      });
    }

    // choose collection
    let Model;
    if (roleNormalized === "admin") {
      Model = adminData;
    } else {
      Model = userData;
    }

    // find user
    const foundUser = await Model.findOne({ email });

    if (!foundUser) {
      return res.status(404).json({
        message: `user not found`,
      });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, foundUser.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "invalid credentials",
      });
    }

    const token = jwt.sign(
      { id: foundUser._id, email: foundUser.email, role: foundUser.role },
      process.env.jwt_token,
      { expiresIn: "1h" },
    );
    // success
    res.status(200).json({
      message: "login successful",
      details: {
        email: foundUser.email,
        role: foundUser.role,
      },
      token:token
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

// module export
module.exports = { registerController, loginController };
