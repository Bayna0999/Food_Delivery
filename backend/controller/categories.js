import { CategoryModel } from "../model/categories.js";

export const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await CategoryModel.create({
      name: name,
    });
    res.status(200).send({
      success: true,
      category: category,
    });
  } catch (error) {
    console.error(error, "err");
    res.status(400).send({
      success: false,
      message: error,
    });
  }
};

export const getCategory = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    return res.status(200).send({
      success: true,
      categories: categories,
    });
  } catch (error) {
    console.error({
      success: false,
      message: error,
    });
  }
};
// export const getCategoryById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const categories = await CategoryModel.findById();
//     return res.status(200).send({
//       success: true,
//       categories: categories,
//     });
//   } catch (error) {
//     console.error({
//       success: false,
//       message: error,
//     });
//   }
// };
