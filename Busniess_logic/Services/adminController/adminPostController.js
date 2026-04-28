const portSchem = require("../../Models/AdminPosts/adminPostSchema.js");
const cloudinary = require("../../Configurations/cloudinary.js");

//  GET ALL
const postFetching = async (req, res) => {
  try {
    const data = await portSchem.find();
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//  CREATE
const postData = async (req, res) => {
  try {
    const { title, description, cost } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image required " });
    }

    const newPost = new portSchem({
      title,
      description,
      cost,
      image: {
        url: req.file.path,
        public_id: req.file.filename,
      },
    });

    await newPost.save();

    res.status(201).json({ data: newPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  GET SINGLE
const postFetch = async (req, res) => {
  try {
    const post = await portSchem.findById(req.params.id);
    res.status(200).json({ data: post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  UPDATE
const postUpdate = async (req, res) => {
  try {
    const post = await portSchem.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Not found" });

    if (req.file && post.image.public_id) {
      await cloudinary.uploader.destroy(post.image.public_id);
    }

    post.title = req.body.title || post.title;
    post.description = req.body.description || post.description;
    post.cost = req.body.cost || post.cost;

    if (req.file) {
      post.image = {
        url: req.file.path,
        public_id: req.file.filename,
      };
    }

    await post.save();

    res.status(200).json({ data: post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  DELETE
const PostDelete = async (req, res) => {
  try {
    const post = await portSchem.findById(req.params.id);

    if (post?.image?.public_id) {
      await cloudinary.uploader.destroy(post.image.public_id);
    }

    await portSchem.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Deleted " });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  postFetch,
  postData,
  postUpdate,
  postFetching,
  PostDelete,
};