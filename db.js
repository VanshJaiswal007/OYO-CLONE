import mongoose from "mongoose";

const URI = process.env.MONGO_URI

const connection = async() =>{
     await mongoose.connect(URI)
     console.log("DB connected...");
}

export default connection;