import express from "express";
import {
  createFood,
  DeleteFood,
  getFoodById,
  getFoods,
} from "../controller/food.js";

export const foodRouter = express.Router();
foodRouter
  .post("/", createFood)
  .get("/", getFoods)
  .delete("/", DeleteFood)
  .get("/foodId", getFoodById);
