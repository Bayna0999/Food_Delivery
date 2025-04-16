import { configDotenv } from "dotenv";
import { connect } from "mongoose";

configDotenv();
const uri = process.env.MONGO_URI;
console.log(process.env.MONGO_URI);

export const connectMongoDB = async () => {
  try {
    await connect(uri);
    console.log("connected to DB");
  } catch (error) {
    console.error(error, "err");
  }
};
