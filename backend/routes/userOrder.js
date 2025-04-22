import express from "express";
import { findUserOrder } from "../controller/userOrder.js";

export const userOrderRouter = express.Router();
userOrderRouter.get("/", findUserOrder);
