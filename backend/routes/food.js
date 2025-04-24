import express from "express";
import {
  createFood,
  DeleteFood,
  getFoodById,
  getFoods,
  getFoodsByCategoryId,
} from "../controller/food.js";

export const foodRouter = express.Router();
foodRouter
  .post("/", createFood)
  .get("/", getFoods)
  .delete("/", DeleteFood)
  .get("/foodId", getFoodById)
  .get("/category/:id", getFoodsByCategoryId);
