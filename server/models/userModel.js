import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "please add firstname"],
      trim: true,
    },
    lastname: {
      type: String,
      required: [true, "please add lastname"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "please add email"],
    },
    password: {
      type: String,
      required: [true, "please add password"],
      min: 6,
      max: 64,
    },
    role: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
