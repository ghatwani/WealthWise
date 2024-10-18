import express from "express";
import { signIn } from "../controller/user.controller";

const router = express();

router.post("/signin", signIn);
router.post("/signup", signUp);
