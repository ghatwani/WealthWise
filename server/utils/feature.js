import mongoose from "mongoose";

export const connectDB = (uri) => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000, // sets connection timeout to 30 seconds
    socketTimeoutMS: 45000   // sets socket timeout to 45 seconds
  })
    .then((data) => {
      console.log(`connected to DB ${data.connection.host}`);
    })
    .catch((err) => {
      throw err;
    })
};

const cookieOptions={

}

export default function wordLimit(val) {
  const wordCount = val.split(/\s+/).filter((word) => word.length > 0).length;
  return wordCount <= 20;
}