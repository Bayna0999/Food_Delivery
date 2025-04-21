import { FoodOrderItemModel } from "../model/FoodOrderItem.js";

export const createFoodOrderItem = async (req, res) => {
  try {
    const orderItem = await FoodOrderItemModel.create(req.body);
    res
      .status(200)
      .send({
        success: true,
        orderItem: orderItem,
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

export const getFoodOrderItem = async (_, res) => {
  try {
    const getOrders = await FoodOrderItemModel.find();
    res
      .status(200)
      .send({
        success: true,
        getOrders: getOrders,
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
