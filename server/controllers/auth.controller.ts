import { Request, Response } from "express";
import {
  CheckCompany,
  checkEmail,
  createUser,
  login,
} from "../services/auth.service";

export const signUp = async (req: Request, res: Response): Promise<object> => {
  const { username, email, company, password } = req.body;
  try {
    const checkUser = await checkEmail(email);
    if (checkUser) {
      return res.status(500).json({ message: "This email already exists" });
    }
    const validateCompany = await CheckCompany(company);
    if (validateCompany) {
      return res.status(500).json({ message: "This company already exists" });
    }
    const user = await createUser(username, email, company, password);
    if (!user) {
      return res.status(500).json({ message: "user not created" });
    }
    return res.status(200).json({ user });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
export const signIn = async (req: Request, res: Response): Promise<object> => {
  const { email, password } = req.body;
  try {
    const resp: any = await login(email, password);
    if (resp.email === undefined) {
      return res.status(500).json(resp);
    }
    return res.status(200).json(resp);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
