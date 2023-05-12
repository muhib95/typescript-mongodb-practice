const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

// database connection
async function db() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
}
db();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
