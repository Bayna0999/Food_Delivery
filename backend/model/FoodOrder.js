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
export const FoodOrderSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELED", "DELIVERED"],
      default: "PENDING",
    },
    FoodOrderItems: { type: [FoodOrderItemSchema], required: true },

    status: {
      type: String,
      enum: ["PENDING", "CANCELED", "DELIVERED"],
      default: "PENDING",
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const FoodOrderModel = mongoose.model("FoodOrder", FoodOrderSchema);
