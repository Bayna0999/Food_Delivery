import { foodModel } from "../model/food.js";
import { CategoryModel } from "../model/categories.js";
import { Types } from "mongoose";

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
  const { id } = req.params;
  try {
    const Foods = await foodModel.findById(id).populate("category");
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
    const Foods = await foodModel.find().populate("category");
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
export const getFoodsByCategoryId = async (req, res) => {
  const { categoryId } = req.query;
  const match = categoryId
    ? {
        $match: {
          _id: new Types.ObjectId(categoryId),
        },
      }
    : {
        $match: {},
      };
  try {
    const food = await CategoryModel.aggregate([
      match,
      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "category",
          as: "foods",
        },
      },
      {
        $project: {
          name: 1,
          foods: 1,
        },
      },
    ]);
    return res
      .status(200)
      .send({
        success: true,
        Foods: food,
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
// export const getFoodsByCategoryId = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const Foods = await foodModel.find().populate("category");
//     const filtered = Foods.filter((val) => val.category.id == id);
//     return res
//       .status(200)
//       .send({
//         success: true,
//         Foods: filtered,
//       })
//       .end();
//   } catch (error) {
//     console.error(error, "err");
//     res
//       .status(400)
//       .send({
//         success: false,
//         message: error,
//       })
//       .end();
//   }
// };
