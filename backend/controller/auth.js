import { Usermodel } from "../model/user.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = Usermodel.find({ email: email });
    console.log(user);
  } catch (error) {}
};
