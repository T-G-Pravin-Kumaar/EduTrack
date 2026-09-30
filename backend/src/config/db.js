//created a configuration folder so that every cofiguration file a organised in it
//db.js file is used to connect the project with local mongodb

//importing mongoose module for connection
const mongoose=require("mongoose");

//creating connection
//using async function because it may take some time for connecting with db
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        //env is already loaded in entry page
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

//exporting module
module.exports = connectDB;