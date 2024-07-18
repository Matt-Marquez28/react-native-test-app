import Post from "../models/postModel.js";

const getUserPostsController=async(req, res)=>{
    try {
        const userPosts = await Post.find({postedBy:req.auth._id}).sort({ createdAt: -1 });
        res.status(200).send({
            success:true,
            message:"user posts",
            userPosts
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"Error in User POST API",
            error
        })
    }
}

export default getUserPostsController;