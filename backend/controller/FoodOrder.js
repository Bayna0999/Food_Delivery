import mongoose from "mongoose";
import { FoodOrderModel } from "../model/FoodOrder.js";

export const createFoodOrder = async (req, res) => {
  const { totalprice, user } = req.body;
  try {
    const foodOrder = new mongoose.create(req.body);
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
export const getFoodOrder = async (_, res) => {
  try {
    const foodOrder = FoodOrderModel.find();
    res.status(200).send({
      success: true,
      foodOrder: foodOrder,
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
