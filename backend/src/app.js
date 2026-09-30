//importing express for creating server
const express=require("express");

//importing the env for the links
const dotenv=require("dotenv");

//importing the database connection 
const connectDB =require("./config/db");

//configurating the env files read the .env file and load its value in process.env
dotenv.config();

//connection function
connectDB();

//creating express app
const app=express();

//listing on the port
const PORT=process.env.PORT||5000;

//health check api just for checking
app.get("/api/health",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"project is running"
    });
});



//lisitng the port
app.listen(PORT,()=>{
    console.log(`App listening on the port ${PORT}`);
})