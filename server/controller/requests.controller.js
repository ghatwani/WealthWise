import Request from "../model/requests.model.js";
import User from "../model/user.model.js";
import { errorHandler } from "../utils/error.js";

export const createRequest = async (req, res, next) => {
  const { userId } = req.params;
  const { email, amount, deadline } = req.body;
  try {
    const receiver = await User.findOne({ email });
    if (!receiver) {
      return next(errorHandler(401, "User is not on WealthWise"));
    }

    if (receiver._id == userId) {
      return next(
        errorHandler(401, "You can't send payment request to yourself")
      );
    }
    const newRequest = new Request({ userId, email, amount, deadline });
    await newRequest.save();
    res.status(200).json({ message: "Request sent successfully" });
  } catch (error) {
    next(error);
  }
};

export const getRequest = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await User.findOne({ _id: userId });
    const requests = await Request.find({ email: user.email });
    res.json(requests);
  } catch (error) {
    next(error);
  }
};

export const getSingleRequest = async (req, res, next) => {
  const { reqId } = req.params;
  if (!reqId) {
    return next(errorHandler(404, "No request found"));
  }
  try {
    const request = await Request.findOne({ _id: reqId });
    res.json(request);
  } catch (error) {
    next(error);
  }
};

export const deleteRequest = async (req, res, next) => {
  const { reqId } = req.params;
  try {
    const requests = await Request.findByIdAndDelete({ _id: reqId });
    res.json({ message: "Request Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};
