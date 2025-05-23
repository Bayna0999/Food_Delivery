import { FoodOrderModel } from "../model/FoodOrder.js";
import { userOrderModel } from "../model/userOrder.js";

export const findUserOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const userOrder = await FoodOrderModel.findById(id);
    res.status(200).send({
      success: true,
      userOrder: userOrder,
    });
  } catch (error) {
    console.error(error, "err");
    res.status(400).send({
      success: false,
      message: error,
    });
  }
};
