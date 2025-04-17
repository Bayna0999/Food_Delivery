import express from "express";
import { createCategory, getCategory } from "../controller/categories.js";

export const categoryRouter = express.Router();
categoryRouter.post("/", createCategory).get("/", getCategory);
