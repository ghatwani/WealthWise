import express from "express";
import { getAllTransactions, getTransaction, newTransaction } from "../controller/transaction.controller.js";

const router = express();
router.get("/get-all:id", getAllTransactions);
router.get("/get:id", getTransaction);
router.post('/new', newTransaction);


export default router;