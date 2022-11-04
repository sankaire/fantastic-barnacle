import bcrypt from "bcrypt";

const encrypt = async (password: string): Promise<string> => {
  const encryptPass = await bcrypt.hash(password, 20);
  if (!encrypt) {
    return "An error occured";
  }
  return encryptPass;
};
const compare = async (
  savedPass: string,
  password: string
): Promise<boolean> => {
  const comparePass = await bcrypt.compare(password, savedPass);
  if (!compare) {
    return false;
  }
  return comparePass;
};

export default {encrypt, compare}