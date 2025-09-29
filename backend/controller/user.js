import { Usermodel } from '../model/user.js';
import bcrypt from 'bcrypt';
export const createUser = async (req, res) => {
  const { email, password, phoneNumber, address, isVerified } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword, 'password');

  try {
    const oldUser = await Usermodel.find({ email: email });
    console.log(oldUser);

    if (oldUser.length > 0) {
      return res.status(405).send({
        success: false,
        message: 'user already created',
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
    console.error(error, 'err');
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
    const users = await Usermodel.find().select('-password');
    return res
      .status(200)
      .send({
        success: true,
        users: users,
      })
      .end();
  } catch (error) {
    console.error(error, 'err');
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
    console.error(error, 'err');
    res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};
export const userCheck = async (req, res) => {
  const { email } = req.body;

  try {
    const olduser = await Usermodel.find({ email: email });

    if (olduser.length > 0) {
      return res.status(409).send({
        success: false,
        message: 'User already exists',
      });
    }

    res.status(200).send({ success: true, message: 'Email is available' });
  } catch (error) {
    console.error('Error checking user:', error);

    res.status(400).send({
      success: false,
      message: 'An error occurred while checking the user',
    });
  }
};
export const updateUser = async (req, res) => {
  const { password, email, phoneNumber, address, userData } = req.body;

  try {
    const user = await Usermodel.findById(userData._id);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'User not found.',
      });
    }

    if (password !== undefined) user.password = password;
    if (email !== undefined) user.email = email;
    if (phoneNumber !== undefined) user.phoneNumber = phoneNumber;
    if (address !== undefined) user.address = address;

    await user.save();

    return res.status(200).send({
      success: true,
      message: 'User updated successfully.',
      user,
    });
  } catch (error) {
    console.log(error, 'UPDATE ERROR');
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};
export const resetUserpass = async (req, res) => {
  const { password } = req.body;
  const userData = req.user;
  const hashed = await bcrypt.hash(password, 10);
  try {
    const user = await Usermodel.findById(userData.id);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    if (password !== undefined) {
      user.password = hashed;
    }

    await user.save();

    return res.status(200).send({
      success: true,
      message: 'User updated successfully.',
      user,
    });
  } catch (error) {
    console.log(error, 'UPDATE ERROR');
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
