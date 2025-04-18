import { foodModel } from "../model/food.js";

export const createFood = async (req, res) => {
  try {
    const food = await foodModel.create(req.body);
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

export const getFoodById = async (req, res) => {
  const { category } = req.body;
  try {
    const Foods = await foodModel
      .find({ category: category })
      .populate("category");
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
export const getFoods = async (req, res) => {
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
