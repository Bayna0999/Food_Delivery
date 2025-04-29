import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type FoodType = {
  _id: string;
  foodname: string;
  price: number;
  context: string;
  image: string;
  category: string;
  quantity: number;
};
