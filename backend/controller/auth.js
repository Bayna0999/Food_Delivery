import { Usermodel } from '../model/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
// import nodemailer from 'nodemailer';
import { sendMail } from '../utils/sendmailer.js';

dotenv.config();

const secret = process.env.SECRET_KEY;

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Usermodel.findOne({ email });
    if (!user) {
      return res.status(400).send({
        success: false,
        message: 'Имэйл эсвэл нууц үг буруу байна!',
      });
    }

    const pass = await bcrypt.compare(password, user.password);
    if (!pass) {
      return res.status(400).send({
        success: false,
        message: 'Имэйл эсвэл нууц үг буруу байна!',
      });
    }

    // зөвхөн хэрэгтэй мэдээлэл дамжуулах
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      secret,
      { expiresIn: '1h' }
    );

    return res.status(200).send({
      success: true,
      message: 'Амжилттай нэвтэрлээ',
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: 'Серверийн алдаа!',
    });
  }
};

export const reset = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await Usermodel.findOne({ email });
    if (!user) {
      return res.status(400).send({
        success: false,
        message: 'Имэйл бүртгэлтэй олдсонгүй!',
      });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, secret, {
      expiresIn: '15m', // 15 минутын хүчинтэй
    });

    const resetLink = `${process.env.FRONTEND_URL}/reset-pass?token=${token}`;

    await sendMail(
      email,
      'Reset your password',
      `Click here to reset your password: ${resetLink}`
    );

    return res.status(200).send({
      success: true,
      message: 'Нууц үг сэргээх линк илгээгдлээ',
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: 'Серверийн алдаа!',
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

// export const sendMailer = async (req, res) => {
//   const { email, text, subject } = req.body;
//   try {
//     const response = await sendMail(email, subject, text);
//     res.status(200).send({ success: true, data: response });
//   } catch (error) {
//     res.status(400).send({ success: false, error: error });
//   }
// };
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
