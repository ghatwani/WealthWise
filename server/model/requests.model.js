import mongoose from "mongoose";

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
      default: "Open",
    },
  },
  { timestamps: true }
);

const Request = mongoose.model("Request", requestsSchema);

export default Request;
