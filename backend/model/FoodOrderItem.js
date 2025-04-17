import express from "express";
import mongoose, { mongo, Schema } from "mongoose";

const FoodOrderItemSchema = new mongoose.Schema({
  food: {
    type: Schema.Types.ObjectId,
    ref: "food",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export const FoodOrderItemModel = mongoose.model(
  "FoodOrderItem",
  FoodOrderItemSchema
);
