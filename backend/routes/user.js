import express from 'express';
import {
  createUser,
  getUsers,
  getUsersById,
  resetUserpass,
  updateUser,
  userCheck,
} from '../controller/user.js';
import { resettoken, verifyToken } from '../middleware/auth.js';

export const userRouter = express.Router();
userRouter
  .post('/', createUser)
  .post('/check', userCheck)
  .get('/', getUsers)
  .get('/:id', getUsersById)
  .put('/', verifyToken, updateUser)
  .put('/ress', resettoken, resetUserpass);
