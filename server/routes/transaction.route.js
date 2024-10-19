import express from "express";
import { getAllTransactions, getTransaction, newTransaction,updateTransaction } from "../controller/transaction.controller.js";
import { isAuth } from "../middleware/isAuth.js";

const router = express();


router.use(isAuth)
router.get("/get-all:id", getAllTransactions);
router.get("/get:id", getTransaction);
router.post('/new', newTransaction);
router.put("/update:id",updateTransaction )


export default router;