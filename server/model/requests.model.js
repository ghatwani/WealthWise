import mongoose from "mongoose";
import wordLimit from "../utils/feature.js";

const requestsSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
    description:{
      type:String,
      validate: {
        validator: wordLimit,
        message: "description cannot exceed 20 words",
      },
      required:true,
    }
  },
  { timestamps: true }
);

const Request = mongoose.model("Request", requestsSchema);

export default Request;
