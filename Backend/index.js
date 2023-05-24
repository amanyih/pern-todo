const express = require("express");
const app = express();
const cors = require("cors");
const todoRouter = require("./routes/todoRouter");

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

app.use(cors());

app.use(express.json());
app.use("/todo", todoRouter);

app.listen(3000, () => {
  console.log("Server started");
});
