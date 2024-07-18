import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'; 
import postRoutes from './routes/postRoutes.js';

// Dotenv
dotenv.config();

// Connect to MongoDB
connectDB();

// Rest Object
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Port
const PORT = process.env.PORT || 8080;

// Routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/post", postRoutes);


app.listen(PORT, ()=>{
    console.log(`Server Running on PORT ${PORT}`.bgGreen.white);
})