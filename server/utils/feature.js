import mongoose from "mongoose";

export const connectDB = (uri) => {
  mongoose
    .connect(uri, { dbName: "WealthWise" })
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