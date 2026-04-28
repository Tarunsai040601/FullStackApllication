const express = require("express");
const router = express.Router();

const {
  postFetch,
  postData,
  postUpdate,
  postFetching,
  PostDelete,
} = require("../../Services/adminController/adminPostController.js");

const authmiddleware = require("../../MiddleWares/AuthMiddle/Auth.js");
const upload = require("../../MiddleWares/multer.js"); 

//  Public (for users)
router.get("/post", postFetching);
router.get("/post/:id", postFetch);

//  Admin only
router.post("/post", authmiddleware, upload.single("image"), postData);
router.put("/update/:id", authmiddleware, upload.single("image"), postUpdate);
router.delete("/delete/:id", authmiddleware, PostDelete);

module.exports = router;