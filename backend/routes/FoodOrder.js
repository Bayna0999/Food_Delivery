import express from "express";
import { createFoodOrder, getFoodOrder } from "../controller/FoodOrder.js";
import { verifyToken } from "../middleware/auth.js";

export const foodOrderRouter = express.Router();
foodOrderRouter.post("/", verifyToken, createFoodOrder).get("/", getFoodOrder);
