import Transaction from "../model/transaction.model.js";
import { errorHandler } from "../utils/error.js";

export const newTransaction = async (req, res, next) => {
  const { userId, type, amount, description } = req.body;
  try {
    const data = await Transaction.create({
      userId,
      type,
      amount,
      description,
    });
    const result = await data.json();
    res.send(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getAllTransactions = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const data = await Transaction.find({ userId });
    const result = await data.json();
    res.send(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getTransaction = async (req, res, next) => {
  const transactionId = req.params.id;
  try {
    const data = await Transaction.findById(transactionId);
    const result = await data.json();
    res.send(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const updateTransaction = async (req, res, next) => {
  const transId = req.params.id;
  const transaction = await Transaction.findById(transId);

  if (transaction.userId !== req.user.id) {
    return next(
      new errorHandler("401", "you can only update your transaction")
    );
  }

  try {
    const response = await Transaction.findByIdAndUpdate(transId, req.body, {
      new: true,
    });
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

export const deleteTransaction = async (req, res, next) => {
  const transId = req.params.id;
  try {
    const transaction = await Transaction.findById(transId);
    if (!transaction) {
      return next(new errorHandler("404", "Transaction not found!"));
    }
    if (transaction.userId !== req.user.id) {
      return next(
        new errorHandler("401", "you can only update your transaction")
      );
    }
    await Transaction.findByIdAndDelete(transId);
    res.status(200).json("Transaction entry delted successfully")
  } catch (error) {}
};
