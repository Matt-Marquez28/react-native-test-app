import Post from "../models/postModel.js";

const updatePostController = async (req, res) => {
  try {
    const { title, description } = req.body;
    // post find
    const post = await Post.findById({ _id: req.params.id });
    // validation
    if (!title || !description) {
      return res.status(500).send({
        success: false,
        message: "Please provide post title or description",
      });
    }
    const updatedPost = await Post.findByIdAndUpdate(
      { _id: req.params.id },
      {
        title: title || post?.title,
        description: description || post?.description,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Post Updated Successfully",
      updatedPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in update post api",
      error,
    });
  }
};

export default updatePostController;
