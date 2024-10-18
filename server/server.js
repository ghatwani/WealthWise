import express from "express";
import { connectDB } from "./utils/feature.js";
import dotenv from "dotenv";
<<<<<<< HEAD
import userRouter from "./routes/user.route.js";
const app = express();
const port = 3000;
=======
const app = express()
const port = 3000
dotenv.config()
const mongo_uri=process.env.MONGO_URI
connectDB(mongo_uri)
>>>>>>> a8412a9714563661fe20c22107af3a7efea097e6

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
