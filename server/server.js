import express from "express";
import { connectDB } from "./utils/feature.js";
import dotenv from "dotenv";
const app = express()
const port = 3000
dotenv.config()
const mongo_uri=process.env.MONGO_URI
connectDB(mongo_uri)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})