import express, { Request, Response } from "express";
import authRouter from "./api/routes/auth.route";
import connectDB from "./db/db.connect";
const app = express();
import dotenv from "dotenv";
dotenv.config();

const uri:string|any = process.env.MONGO_URI;

connectDB(uri)

app.use(express.json());

app.get("/api/v1", (req: Request, res: Response): Response<object> => {
  return res.status(200).json({ message: "Inventory app API, welcome 👀🙂" });
});
app.use("/api/v1", authRouter)
export default app;
