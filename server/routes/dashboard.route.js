import express from "express";

const router = express.Router();

router.get("/get-income");
router.get("/get-expense");

export default router;
