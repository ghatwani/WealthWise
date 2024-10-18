import mongoose from "mongoose";
export const connectDB=(uri)=>{
    mongoose.connect(uri, {dbName:"WealthWise"})
    .then((data)=>{console.log(`connected to DB ${data.connection.host}`)})
    .catch((err)=>{
        throw err;
    })
    }