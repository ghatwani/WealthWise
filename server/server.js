import express from "express";
import { connectDB } from "./utils/feature.js";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
const app = express();
const port = 3000;

dotenv.config();

connectDB(process.env.MONGO_URI);

//middlewares
app.use(express.json());

// routes
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
