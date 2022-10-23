import express, { Request, Response } from "express";
const app = express();

app.use(express.json());

app.get("/api", (req: Request, res: Response): Response<object> => {
  return res.status(200).json({ message: "Inventory app API, welcome 👀🙂" });
});
export default app;
