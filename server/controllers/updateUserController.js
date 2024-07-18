import User from "../../server/models/userModel.js";
import bcrypt from "bcrypt";


const updateUserController = async (req, res) => {
  try {
    const { firstname, lastname, email, password, role } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // Validate the password if provided
    if (password && password.length < 6) {
      return res.status(400).send({
        success: false,
        message: "Password should be at least 6 characters long",
      });
    }

    // Create an update object
    const updateData = {
      firstname: firstname || user.firstname,
      lastname: lastname || user.lastname,
      role: role || user.role,
    };

    // Hash the password if provided and add to update object
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    // Update the user
    const updatedUser = await User.findOneAndUpdate({ email }, updateData, {
      new: true,
    });

    res.status(200).send({
      success: true,
      message: "Profile Updated. Please log in again.",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in User Update API",
      error,
    });
  }
};

export default updateUserController;
