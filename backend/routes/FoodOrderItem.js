import { Router } from "express";
import {
  createFoodOrderItem,
  getFoodOrderItem,
} from "../controller/FoodOrderItem.js";

export const OrderItemrouter = new Router();

OrderItemrouter.post("/", createFoodOrderItem).get("/", getFoodOrderItem);
