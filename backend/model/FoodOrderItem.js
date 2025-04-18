import mongoose, { Schema } from "mongoose";

const FoodOrderItemSchema = new mongoose.Schema(
  {
    food: {
      type: Schema.Types.ObjectId,
      ref: "food",
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);
export const FoodOrderSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
    default: "PENDING",
  },
  FoodOrderItems: { type: [FoodOrderItemSchema] },
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
    default: "PENDING",
  },
  totalprice: {
    type: Number,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const FoodOrderItemModel = mongoose.model(
  "FoodOrderItem",
  FoodOrderItemSchema
);
