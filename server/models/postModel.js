import mongoose from "mongoose";

// schema
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Please add post title"]
    },
    description:{
        type:String,
        required:[true, "Please add post description"]
    },
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
}, {timestamps:true})

const Post = mongoose.model('Post', postSchema);

export default Post;