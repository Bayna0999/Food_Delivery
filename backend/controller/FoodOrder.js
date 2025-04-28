import mongoose from "mongoose";
import { FoodOrderModel } from "../model/FoodOrder.js";

export const createFoodOrder = async (req, res) => {
  try {
    const foodOrder = await FoodOrderModel.create(req.body);
    res
      .status(200)
      .send({
        success: true,
        foodOrder: foodOrder,
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
export const getFoodOrder = async (_, res) => {
  try {
    const foodOrder = await FoodOrderModel.find();
    res
      .status(200)
      .send({
        success: true,
        foodOrder: foodOrder,
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
export const DeleteFoodOrder = async (req, res) => {
  const id = req.body.id;
  try {
    const DeleteFoodOrder = await FoodOrderModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Deleted",
    });
  } catch (error) {
    console.log(error, "err");
    res.status(400).send({
      success: false,
      message: error,
    });
  }
};

export const UpdateFoodOrder = async (req, res) => {
  const { user, status, FoodOrderItems, totalPrice } = req.body;
  try {
    const updateFoodOrder = await FoodOrderModel.findByIdAndUpdate({
      user: user,
      status: status,
      FoodOrderItems: FoodOrderItems,
      totalPrice: totalPrice,
    });
  } catch (error) {
    console.log(error, "err");
    res.status(400).send(
      {
        success: false,
        message: error,
      }.end()
    );
  }
};
