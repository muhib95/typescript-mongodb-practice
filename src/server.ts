import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
