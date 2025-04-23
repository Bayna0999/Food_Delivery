import { Usermodel } from "../model/user.js";
import bcrypt from "bcrypt";
export const createUser = async (req, res) => {
  const { email, password, phoneNumber, address, isVerified } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword, "password");

  try {
    const oldUser = await Usermodel.find({ email: email });
    console.log(oldUser);

    if (oldUser.length > 0) {
      return res.status(405).send({
        success: false,
        message: "user already created",
      });
    }
    const user = await Usermodel.create({
      email: email,
      password: hashedPassword,
      phoneNumber: phoneNumber,
      address: address,
      isVerified: isVerified,
    });
    res.status(200).send({
      success: true,
      user: user,
    });
  } catch (error) {
    console.error(error, "err");
    res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const getUsers = async (_, res) => {
  try {
    const users = await Usermodel.find().select("-password");
    return res
      .status(200)
      .send({
        success: true,
        users: users,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const getUsersById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Usermodel.findById(id);
    return res
      .status(200)
      .send({
        success: true,
        user: user,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};
