import express from "express";
import {
  createRequest,
  deleteRequest,
  getRequest,
  getSingleRequest,
  updateRequest,
} from "../controller/requests.controller.js";
import { isAuth } from "../middleware/isAuth.js";

const router = express.Router();

router.post("/create/:userId", isAuth, createRequest);
router.put("/update/:reqId", isAuth, updateRequest);
router.get("/get/:userId", isAuth, getRequest);
router.get("/getOne/:reqId", isAuth, getSingleRequest);
router.delete("/delete/:reqId", isAuth, deleteRequest);

export default router;
