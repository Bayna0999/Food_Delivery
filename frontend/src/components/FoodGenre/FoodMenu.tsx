"use client";
import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FoodDetail from "./FoodDetail";
import axios from "axios";

type FoodMenuProps = {
  id: string;
  HandleMinus: () => void;
  HandlePlus: () => void;
  orderCount: number;
};
const FoodMenu = ({
  id,
  HandleMinus,
  HandlePlus,
  orderCount,
}: FoodMenuProps) => {
  const [foods, setFoods] = useState([]);
  const fetchFoods = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}food/category/${id}`
    );
    setFoods(res.data.Foods);
    console.log(foods, "Foods");
  };
  useEffect(() => {
    fetchFoods();
  }, []);
  const [food, setFood] = useState({});
  const handleClick = (value: any, index: number) => {
    setFood(value);
  };
  return (
    <div className="flex flex-wrap w-full h-fit mx-[20px] my-[20px] rounded-3xl gap-[36px] ">
      {foods.map((value: any, index: number) => {
        return (
          <div key={index} className="relative">
            <Dialog>
              <DialogTrigger>
                <Card
                  foodname={value.foodname}
                  content={value.context}
                  image={value.image}
                  price={value.price}
                />
              </DialogTrigger>
              <DialogContent className="[&>button]:hidden max-w-[874px]!">
                <FoodDetail
                  HandlePlus={HandlePlus}
                  HandleMinus={HandleMinus}
                  orderCount={orderCount}
                  foodname={value.foodname}
                  content={value.context}
                  image={value.image}
                  price={value.price}
                />
              </DialogContent>
            </Dialog>
            <div
              onClick={() => {
                handleClick(value, index);
              }}
              className="size-[44px] mb-[100px] mr-[20px] rounded-full flex justify-center items-center absolute z-50 bg-white hover:bg-amber-950 bottom-3.5 right-3.5 "
            >
              <Plus />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodMenu;
