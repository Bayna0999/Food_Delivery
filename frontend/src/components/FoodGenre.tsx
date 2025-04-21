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
  const createOrder = async (order: any) => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}foodOrder`,
      {
        userId: "6805bb810bb5963fac417282",
        totalprice: order.price,
        foodOrderItem: [
          {
            quantity: 1,
            food: "6801d35dcd0f228f7222806c",
          },
        ],
      }
    );
    setFoods(res.data.Foods);
    console.log(foods);
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
            <Dialog key={index}>
              <DialogTrigger>
                <Card
                  onclick={() => {
                    handleClick(value, index);
                    createOrder(value);
                  }}
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
          );
        })}
      </div>
    </div>
  );
};

export default FoodGenre;
