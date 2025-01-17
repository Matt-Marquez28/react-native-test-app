import pkg from 'express-jwt';
import dotenv from 'dotenv';

dotenv.config();

const jwt = pkg.expressjwt;

// Middleware
const requireSignIn = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"]
});

export default requireSignIn;