import { foodModel } from "../model/food.js";
import { Usermodel } from "../model/user.js";

export const createFood = async (req, res) => {
  const { foodname, price, context, image } = req.body;
  try {
    const food = await foodModel.create({
      foodname: foodname,
      price: price,
      context: context,
      image: image,
    });
    res
      .status(200)
      .send({
        success: true,
        food: food,
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

export const getFoods = async (_, res) => {
  try {
    const Foods = await foodModel.find();
    return res
      .status(200)
      .send({
        success: true,
        Foods: Foods,
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
export const DeleteFood = async (req, res) => {
  const id = req.body.id;
  try {
    const DeleteFood = await foodModel.findByIdAndDelete(id);
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
