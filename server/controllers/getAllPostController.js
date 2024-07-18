import Post from "../models/postModel.js";

const getAllPostController = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).populate({
      path: "postedBy",
      select: "firstname",
    });
    res.status(200).send({
      success: true,
      message: "All Posts Data",
      posts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In GETALLPOST API",
      error,
    });
  }
};

export default getAllPostController;
