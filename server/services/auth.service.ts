import { User } from "../schemas/Users";
import createToken from "../utils/jwt";
import bcrypt from "bcryptjs";

export const createUser = async (
  username: string,
  email: string,
  company: string,
  password: string
): Promise<object> => {
  const hash = await bcrypt.hash(password, 10);
  const newUser = new User({
    username: username,
    email: email,
    company: company,
    password: hash,
  });
  const user = await newUser.save();
  const token = createToken(user._id.toString());
  return { user, token };
};

export const login = async (
  email: string,
  password: string
): Promise<object> => {
  const user: any = await User.findOne({ email: email });
  if (!user) {
    return { message: "User not found. create an account" };
  }
  const savedPass = user.password;
  // const comparePass = await bcrypt.compare(password, savedPass);
  // if (!comparePass) {
  //   const error = { message: "wrong password" };
  //   return error;
  // }
  return user;
};
export const checkEmail = async (email: string): Promise<boolean> => {
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return false;
    }
    return true;
  } catch (error: any) {
    return error;
  }
};
export const CheckCompany = async (company: string): Promise<boolean> => {
  try {
    const user = await User.findOne({ company: company });
    if (!user) {
      return false;
    }
    return true;
  } catch (error: any) {
    return error;
  }
};
