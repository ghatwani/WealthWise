import express from "express";
const app = express()
const port = 3000

const mongo_uri='mongodb+srv://dghatwani890:Bqo6ramqXH9T3hDp@cluster0.qz7j6.mongodb.net/'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})