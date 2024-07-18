import User from '../../server/models/userModel.js';
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';

// login controller
const loginController = async (req, res) => {
    try {
        const {email, password} = req.body;
        //validation
        if (!email || !password){
            return res.status(500).send({
                success:false,
                message:'Please Provide Email or Password'
            })
        }
        // find user
        const user = await User.findOne({email});
        if(!user){
            return res.status(500).send({
                success:false,
                message:'User Not Found'
            });
        }
        // Match Password
        let match = await bcrypt.compare(password, user.password);
        if(!match){
            return res.status(500).send({
                success:false,
                message:'Invalid username or password'
            });
        }
        // Token JWT
        const token = JWT.sign({_id: user._id}, process.env.JWT_SECRET,{
            expiresIn:'1d'
        })
        res.status(200).send({
            success:true,
            message:'Login Successfully',
            user,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'error in login API',
            error
        })
    } 
};

export default loginController;