import mongoose from "mongoose";
function wordLimit(val) {
  const wordCount = val.split(/\s+/).filter((word) => word.length > 0).length;
  return wordCount <= 50;
}
const transactionSchema = new mongoose.Schema({
  userId: {
    type: String,
    ref: "User",
    required: true,
  },
  type: {
    type: String,
    enum: ["income", "expense", "investment", "saving"],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    validate: {
      validator: wordLimit,
      message: "description cannot exceed 50 words",
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps:true
});
const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;
