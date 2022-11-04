import { Request, Response } from "express";
import { createUser } from "../services/auth.service";

export const signUp = async (req: Request, res: Response): Promise<object> => {
  const { username, email, phone, password } = req.body;
  try {
    const user = await createUser(username, email, phone, password);
    if (!user) {
      return res.status(400).json({ message: "user not created" });
    }
    return res.status(200).json({user})
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
