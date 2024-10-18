import express from "express";
import { connectDB } from "./utils/feature.js";
import dotenv from "dotenv";
<<<<<<< HEAD
const app = express()
const port = 3000

dotenv.config()

const mongo_uri=process.env.MONGO_URI
connectDB(mongo_uri)
=======
import userRouter from "./routes/user.route.js";
>>>>>>> a7c0d6217ec00f579ffd6ac85712c8f6f2cef198

const app = express();
const port = 3000;
dotenv.config();

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
