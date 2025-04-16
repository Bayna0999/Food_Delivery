import mongoose, { Mongoose } from "mongoose";

const foodSchema = new mongoose.Schema({
  foodname: String,
  price: Number,
  context: String,
  image: String,
});

export const foodModel = mongoose.model("food", foodSchema);
