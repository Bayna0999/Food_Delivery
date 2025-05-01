import { Usermodel } from "../model/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import { sendMail } from "../utils/sendmailer.js";
export const login = async (req, res) => {
  const { email, password } = req.body;

  const secret_key = process.env.SECRET_KEY;
  try {
    const user = await Usermodel.findOne({ email: email }).select("+password");
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

// const mailTranporter = nodemailer.createTransport({
//   service: "gmail",
//   host: "smtp.gamil.com",
//   secure: true,
//   port: 465,
//   auth: {
//     user: "baynaa123455@gmail.com",
//     pass: "tlxglxbsrtqtulbm",
//   },
// });

export const sendMailer = async (req, res) => {
  const { email, text, subject } = req.body;
  try {
    const response = await sendMail(email, subject, text);
    res.status(200).send({ success: true, data: response });
  } catch (error) {
    res.status(400).send({ success: false, error: error });
  }
};
// const info = {
//   from: '"Maddison Foo Koch 👻" <baynaa123455@gmail.com>', // sender address
//   to: "baynaa9998837@gmail.com, bayarjavkhlan8005@gmail.com", // list of receivers
//   subject: "Hello ✔", // Subject line
//   text: "Hello world?", // plain text body
//   html: "<b>Hello world?</b>", // html body
// };
// try {
//   const response = await mailTranporter.sendMail(info);
//   return res.send(response);
// } catch (error) {
//   return res.send(error);
// }
