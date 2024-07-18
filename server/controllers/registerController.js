import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

// register controller
const registerController = async (req, res) => {
    try {
        const { firstname, lastname, email, password, role } = req.body;

        // Validation
        if (!firstname) {
            return res.status(400).send({
                success: false,
                message: 'Firstname is required'
            });
        }
        if (!lastname) {
            return res.status(400).send({
                success: false,
                message: 'Lastname is required'
            });
        }
        if (!email) {
            return res.status(400).send({
                success: false,
                message: 'Email is required'
            });
        }
        if (!password || password.length < 6) {
            return res.status(400).send({
                success: false,
                message: 'Password is required and should be at least 6 characters long'
            });
        }

        // Existing user check
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).send({
                success: false,
                message: 'User already registered with this email'
            });
        }

        // Hash password
        const encryptedPassword = await bcrypt.hash(password, 10);

        // Save user
        const user = await User.create({ firstname, lastname, email, password: encryptedPassword, role });
        return res.status(201).send({
            success: true,
            message: 'Registration successful. Please log in.'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in register API',
            error,
        });
    }
};

export default registerController;