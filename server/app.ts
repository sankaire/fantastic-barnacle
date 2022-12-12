import express, { Request, Response } from "express";
import authRouter from "./api/routes/auth.route";
import cors from "cors";
import dbConnection from "./db/db.connect";
import productsRoute from "./api/routes/products.route";
dbConnection();
const app = express();
app.use(cors());
app.use(express.json());
app.get("/api/v1", (req: Request, res: Response): Response<object> => {
  return res.status(200).json({ message: "Inventory app API, welcome 👀🙂" });
});
app.use("/api/v1", authRouter);
app.use("/api/v1/products", productsRoute);
export default app;
