import Request from "../model/requests.model.js";

export const createRequest = async (req, res) => {
  const { userId } = req.params.id;
  const { to, amount, deadline } = req.body;
  try {
    const newRequest = new Request({ userId, to, amount, deadline });
    await newRequest.save();
    res.status(200).json({ message: "Request sent successfully" });
  } catch (error) {
    next(error);
  }
};

export const getRequest = async (req, res) => {};
