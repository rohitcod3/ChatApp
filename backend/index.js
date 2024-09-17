// const express = require('express')
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
// import {connectDB} from './config/database.js'
import userRoute from "./routes/userRoute.js"

dotenv.config({});

const app = express();

const PORT = process.env.PORT || 8080;

//middleware

app.use(express.json());


//routes
// app.get('/',(req,res)=> {
//     res.send('<h1>Rohit</h1>')
// })
app.use("/api/v1/user", userRoute);
//localhost:8080/api/v1/user/register


app.listen(PORT, () =>{
    connectDB();
    console.log(`Server listen at port ${PORT}`);
});