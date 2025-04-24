import { Usermodel } from "../model/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const login = async (req, res) => {
  const { email, password } = req.body;

  const secret_key = process.env.SECRET_KEY;
  try {
    const user = await Usermodel.findOne({ email: email });
    console.log(user);

    if (!user) {
      return res.status(400).send({
        success: false,
        message: "User not found",
      });
    }
    console.log(password, user.password, "password");
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch, "FROM BCRYPT");

    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Email or password is incorrect",
      });
    }
    const token = jwt.sign({ ...user }, secret_key, { expiresIn: 3600 });
    return res.status(200).send({
      success: true,
      token,
    });
  } catch (error) {
    console.error("login error:", error);
    return res.status(500).send({
      success: false,
      message: "Email or password is incorrect",
    });
  }
};
