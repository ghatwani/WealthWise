import express from "express";
import { isAuth } from "../middleware/isAuth.js";
import { getExpense, getIncome } from "../controller/dashboard.controller.js";

const router = express.Router();

router.use(isAuth)

router.get("/get-income", getIncome);
router.get("/get-expense", getExpense);

export default router;
