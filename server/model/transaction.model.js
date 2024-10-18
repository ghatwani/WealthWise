import mongoose from "mongoose";
function wordLimit(val) {
    const wordCount = val.split(/\s+/).filter(word => word.length > 0).length;
    return wordCount <= 50;
  }
const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  type:{
    type:String,
    enum:['income', 'expense', 'investment', 'saving'],
    required: true,
  },
  amount:{
    type:Number,
    required:true
  },
  description:{
    type:String,
    required: true,
  }
});
