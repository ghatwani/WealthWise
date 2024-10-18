import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
<<<<<<< HEAD
}, {timestamps: true});
=======
},);
>>>>>>> a8412a9714563661fe20c22107af3a7efea097e6

const User = mongoose.model("User", userSchema);

export default User;
