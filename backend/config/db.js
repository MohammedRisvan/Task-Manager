const mongoose = require("mongoose");

const connectDB = async () =>{
    console.log('hello')
    try{
        await mongoose.connect(process.env.MONGO_URI);
         console.log("mongoDB connected");
    }catch(err){
        console.log("Error connect to mongoDB", err);
        process.exit(1);
    }
};

module.exports = connectDB;


