const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../Configurations/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "admin_reviews",
    resource_type: "video", // 🔥 IMPORTANT
    allowed_formats: ["mp4", "mov", "avi"], // video formats
  },
});

const upload = multer({ storage });

module.exports = upload;