import Post from "../models/postModel.js";

const deletePostController=async(req, res)=>{
    try {
        const {id} = req.params;
        await Post.findByIdAndDelete({_id:id});
        res.status(200).send({
            success:true,
            message:"Your post has been deleted!",
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message: "error in delete post api",
            error,
        })
    }
}

export default deletePostController;