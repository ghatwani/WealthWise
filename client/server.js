import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// To handle the __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3000 || 3001 || 5000;
app.listen(port, () => {
  console.log(`Client app is running on port ${port}`);
});
