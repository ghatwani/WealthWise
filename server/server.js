import express from "express";
import { connectDB } from "./utils/feature.js";
import userRouter from "./routes/user.route.js";
import TransactionRouter from "./routes/transaction.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import requestRouter from "./routes/requests.route.js";
import dashboardRouter from "./routes/dashboard.route.js";
import cors from "cors";

const app = express();
const port = 3001;
dotenv.config();

connectDB(process.env.MONGO_URI);

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors());

// routes
app.use("/api/user", userRouter);
app.use("/api/transaction", TransactionRouter);
app.use("/api/request", requestRouter);
app.use("/api/dashboard", dashboardRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
