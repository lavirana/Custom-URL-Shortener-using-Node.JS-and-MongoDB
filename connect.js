const mongoose = require('mongoose');

async function ConnectToMongoDB(URL){
    try{
        await mongoose.connect(URL);
        console.log("Connected to MongoDB");
    }catch(err){
        console.log("Error connecting to MongoDB", err);
    }
}

module.exports = {
    ConnectToMongoDB,
}