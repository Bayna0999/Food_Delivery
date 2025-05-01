import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const mailTranporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gamil.com",
  secure: true,
  port: 465,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

export const sendMail = async (email, text, subject) => {
  const info = {
    from: `bayn baynaa" <${process.env.EMAIL}>`, // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
  };
  try {
    return await mailTranporter.sendMail(info);
  } catch (error) {
    return res.send(error);
  }
};
