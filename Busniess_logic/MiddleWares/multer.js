const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../Configurations/cloudinary.js");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    //  check file type
    if (file.mimetype.startsWith("video")) {
      return {
        folder: "uploads/videos",
        resource_type: "video",
        allowed_formats: ["mp4", "mov", "avi", "webm"],
      };
    }

    //  images
    return {
      folder: "uploads/images",
      resource_type: "image",
      allowed_formats: ["jpg", "png", "jpeg", "webp"],
    };
  },
});

const upload = multer({ storage });

module.exports = upload;