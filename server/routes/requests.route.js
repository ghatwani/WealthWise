import express from "express";
import {
  createRequest,
  getRequest,
} from "../controller/requests.controller.js";
import { isAuth } from "../middleware/isAuth.js";

const router = express.Router();

router.post("/create/:id", isAuth, createRequest);
router.get("/get", getRequest);

export default router;
