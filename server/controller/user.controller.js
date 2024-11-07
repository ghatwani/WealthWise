import User from "../model/user.model.js";
import { isValidEmailFormat } from "../utils/emailValidation.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return next(errorHandler(400, "All field are required"));
  }
  const user = await User.findOne({ email });
  if (user) {
    return next(errorHandler(401, "email already exist"));
  }
  if (!isValidEmailFormat(email)) {
    return next(errorHandler(400, "Email is not valid"));
  }
  try {
    const hashedPass = bcryptjs.hashSync(password, 10);
    const newUser = new User({ name, email, password: hashedPass });
    await newUser.save();
    res.status(200).json({ message: "Signed up successfully" });
  } catch (error) {
    next(error.message);
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(errorHandler(404, "User not valid"));
    }
    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return next(errorHandler(404, "Invalid Password"));
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
    const { password: pass, ...rest } = user._doc;
    return res
      .status(200)
      .cookie("access_token", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
