import mongoose, { Mongoose } from "mongoose";

export const userOrderSchema = new mongoose.Schema({
  userId: {
    type: String,
    reqiured: true,
  },
});

export const userOrderModel = mongoose.model("UserOrder", userOrderSchema);
