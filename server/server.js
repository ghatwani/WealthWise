import express from "express";
import dotenv from "dotenv";
const app = express();
const port = 3000;
dotenv.config();
const mongo_uri = process.env.MONGO_URI;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
