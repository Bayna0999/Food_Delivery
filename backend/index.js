import express, { json } from "express";
import { connectMongoDB } from "./connectDB.js";
import { userRouter } from "./routes/user.js";
import cors from "cors";
import { foodRouter } from "./routes/food.js";
import { categoryRouter } from "./routes/categories.js";
import { OrderItemrouter } from "./routes/FoodOrderItem.js";
import { foodOrderRouter } from "./routes/FoodOrder.js";

const port = 8000;
const app = express();
connectMongoDB();
app.use(cors());
app.use(json());
app.use("/user", userRouter);
app.use("/food", foodRouter);
app.use("/category", categoryRouter);
app.use("/foodOrderItem", OrderItemrouter);
app.use("/foodOrder", foodOrderRouter);
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
