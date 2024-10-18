const express = require('express')
import { connectDB } from "./utils/feature";
const app = express()
const port = 3000
require('dotenv').config()
const mongo_uri=process.env.MONGO_URI
connectDB(mongo_uri)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})