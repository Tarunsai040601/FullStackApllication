const portSchem = require("../../Models/AdminPosts/adminPostSchema.js");
const cloudinary = require("../../Configurations/cloudinary");
const postFetching = async (req, res) => {
  try {
    const display = await portSchem.find();
    res.status(200).json({ message: "fetching data", data: display });
  } catch (error) {
    res.status(400).json({ message: "something went wrong", err_mess: error });
  }
};

const postData = async (req, res) => {
 try {
  const { title, description, cost } = req.body;

  if (!req.file) {
    return res.status(400).json({
      message: "Image is required ❌",
    });
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

  res.status(201).json({
    message: "Post created ✅",
    data: newPost,
  });
} catch (error) {
  res.status(500).json({ message: error.message });
}
};

const postFetch = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await portSchem.findById(id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found ❌",
      });
    }

    res.status(200).json({
      message: "Post fetched successfully ✅",
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong ❌",
      error: error.message,
    });
  }
};

const postUpdate = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await portSchem.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    // 🔥 delete old image
    if (req.file && post.image.public_id) {
      await cloudinary.uploader.destroy(post.image.public_id);
    }

    // update fields
    post.title = req.body.title || post.title;
    post.description = req.body.description || post.description;
    post.cost = req.body.cost || post.cost;

    // new image
    if (req.file) {
      post.image = {
        url: req.file.path,
        public_id: req.file.filename,
      };
    }

    await post.save();

    res.status(200).json({
      message: "Post updated ✅",
      data: post,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const PostDelete = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await portSchem.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    // 🔥 delete image from cloudinary
    if (post.image.public_id) {
      await cloudinary.uploader.destroy(post.image.public_id);
    }

    await Post.findByIdAndDelete(id);

    res.status(200).json({
      message: "Post deleted ✅",
    });
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
