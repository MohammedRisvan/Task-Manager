const express = require('express');

const app = express();
const mongoose = require("mongoose");
// mongodb+srv://youtube_FG:VmUj97Nju7aNFfxg@cluster0.usd8i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const connectDB = async () =>{
    console.log('hello')
    try{
        "mongodb+srv://youtube_FG:VmUj97Nju7aNFfxg@cluster0.usd8i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        await mongoose.connect("mongodb+srv://test:3nJgtTewWQR72lE1@taskmanager.iph7weg.mongodb.net/?retryWrites=true&w=majority&appName=taskManager"
); console.log("mongoDB connected");
    }catch(err){
        console.log("Error connect to mongoDB", err);
        process.exit(1);
    }
};
connectDB();

app.listen(5000,()=>{console.log("port is running on 5000")});