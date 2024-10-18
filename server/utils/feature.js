import mongoose from "mongoose";
<<<<<<< HEAD

export const connectDB = (uri) => {
  mongoose
    .connect(uri, { dbName: "WealthWise" })
    .then((data) => {
      console.log(`connected to DB ${data.connection.host}`);
=======
export const connectDB=(uri)=>{
    mongoose.connect(uri, {dbName:"WealthWise"})
    .then((data)=>{console.log(`connected to DB ${data.connection.host}`)})
    .catch((err)=>{
        throw err;
>>>>>>> a8412a9714563661fe20c22107af3a7efea097e6
    })
    .catch((err) => {
      throw err;
    });
};
