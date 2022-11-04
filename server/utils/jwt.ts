import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret:string | any = process.env.JWT_SECRET;

const createToken = (userID: string) => {
  const token = jwt.sign({ data: userID }, secret, { expiresIn: "1h" });
  return token;
};

export default createToken;
