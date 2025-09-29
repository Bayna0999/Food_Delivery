import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';

configDotenv();

const secret_key = process.env.SECRET_KEY;

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token, 'token');
  //   string to array split()
  const match = jwt.verify(token.split(' ')[1], secret_key);
  console.log();
  req.body = { ...req.body, user: match._doc._id };
  console.log(match, 'match');
  next();
};
export const resettoken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).send({ message: 'Forbidden: No token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, secret_key);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('JWT error:', error.message);
  }
};
