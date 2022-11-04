import mongoose from "mongoose";

function connectDB(uri: string) {
  try {
    mongoose
      .connect(uri)
      .then(() => console.log("connected to db"))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
}
export default connectDB;
