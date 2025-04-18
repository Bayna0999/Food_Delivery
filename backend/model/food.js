import mongoose, { Mongoose, Schema } from "mongoose";

const foodSchema = new mongoose.Schema({
  foodname: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  context: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
  },
});

export const foodModel = mongoose.model("food", foodSchema);
