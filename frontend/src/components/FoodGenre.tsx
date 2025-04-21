"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FoodDetail from "./FoodDetail";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "./ui/button";

const FoodGenre = () => {
  const [orderCount, setOrderCount] = useState(1);
  const HandlePlus = () => {
    setOrderCount(orderCount + 1);
  };
  const HandleMinus = () => {
    setOrderCount(orderCount - 1);
  };
  const [foods, setFoods] = useState([]);
  const [istrue, setIstrue] = useState(false);
  const fetchFoods = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}food`
    );
    setFoods(res.data.Foods);
    console.log(foods);
  };
  const [food, setFood] = useState({});
  const [foodIndex, setFoodIndex] = useState(-1);
  const createOrder = (order: any) => {
    const res = axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}FoodOrderItem`,
      {
        userId: "6805bb810bb5963fac417282",
        totalprice: order.price + 1,
        quantity: 1,
        foodOrderItem: [order],
      }
    );
  };
  useEffect(() => {
    fetchFoods();
  }, []);
  const handleClick = (value: any, index: number) => {
    setFood(value);
  };

  return (
    <div className="flex w-full h-full bg-neutral-700">
      <div className="flex flex-wrap w-full h-fit mx-[20px] my-[20px] rounded-3xl gap-[36px] ">
        {foods?.map((value: any, index: number) => {
          return (
            <div key={index} className="relative">
              <Dialog key={index}>
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
                  createOrder(value);
                }}
                className="size-[44px] mb-[100px] mr-[20px] rounded-full flex justify-center items-center absolute z-50 bg-white hover:bg-amber-950 bottom-3.5 right-3.5 "
              >
                <Plus />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodGenre;
