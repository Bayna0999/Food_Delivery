export const createFoodOrder = async (req, res) => {
  const { totalprice, user } = req.body;
  try {
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
