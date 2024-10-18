import User from "../model/user.model.js";
import { isValidEmailFormat } from "../utils/emailValidation.js";
import bcryptjs from "bcryptjs";

export const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!isValidEmailFormat(email)) {
    return res.json({ message: "Email is not valid" });
  }
  try {
    const hashedPass = bcryptjs.hashSync(password, 10);
    const newUser = new User({ name, email, password: hashedPass });
    await newUser.save();
    res.status(200).json({ message: "Signed up successfully" });
  } catch (error) {
    console.log(error);
  }
};
export const signIn = async (req, res, next) => {};
