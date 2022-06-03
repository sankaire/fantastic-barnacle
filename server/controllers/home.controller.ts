exports.homeRoute = async (req: any, res: any) => {
  return res.status(200).json({ message: "welcome to api version one" })
}
