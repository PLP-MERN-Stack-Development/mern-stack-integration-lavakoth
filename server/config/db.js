const mongoose = require("mongoose");

async function conectDB() {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("mongoDb connected successfully..");

    }
    catch(error){
        console.error("mongoDb not connected:",error.message);
        process.exit(1);

    }
    
    
}
module.exports = conectDB;