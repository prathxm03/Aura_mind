const express = require("express");
const userRouter = require("./src/routes/userRoutes.service");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.use("/upload", express.static(path.join(__dirname, "uploads")));

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/auraMind");
}

main();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", userRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
