import { User } from "../schemas/Users";
import bcrypt from "../utils/bcrypt";
import createToken from "../utils/jwt";

export const createUser = async (
  username: string,
  email: string,
  phone: string,
  password: string
): Promise<object> => {
  const hashPass = await bcrypt.encrypt(password);
  const newUser = new User({
    username: username,
    email: email,
    phone: phone,
    password: hashPass,
  });
  const user = await newUser.save();
  const token = createToken(user._id.toString());
  return {user, token}
};

