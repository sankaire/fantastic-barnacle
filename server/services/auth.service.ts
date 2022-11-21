import { User } from "../schemas/Users";
import bcrypt from "bcrypt";
import createToken from "../utils/jwt";

export const createUser = async (
  username: string,
  email: string,
  company: string,
  password: string
): Promise<object> => {
  const hash = bcrypt.hashSync(password, 10)
  const newUser = new User({
    username: username,
    email: email,
    company: company,
    password: hash,
  });
  const user = await newUser.save();
  const token = createToken(user._id.toString());
  return {user, token}
};

export const login = async(email:string, password:string):Promise<object> =>{
  const user:any = await User.findOne({email:email})
  if(!user){
    return {message:"User not found. create an account"}
  }
  const savedPass = user.password
  // const comparePass = bcrypt.compareSync(password,savedPass)
  // console.log(comparePass)
  // if(!comparePass){
  //   const error ={message:"Wrong password"}
  //   return error
  // }
  return user
}