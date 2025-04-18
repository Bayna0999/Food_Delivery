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
  const [foods, setFoods] = useState([]);
  const [istrue, setIstrue] = useState(false);
  const fetchFoods = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}food`
    );
    setFoods(res.data.Foods);
    console.log(foods);
  };
  useEffect(() => {
    fetchFoods();
  }, []);
  const [food, setFood] = useState({});
  const [foodIndex, setFoodIndex] = useState(-1);
  const createFoods = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}food`,
      {
        userId: "id",
        totalPrice: 20000,
        foodOrderItem: [
          {
            quantity: 2,
            food: "fasdfasdf",
          },
        ],
      }
    );
    setFoods(res.data.Foods);
    console.log(foods);
  };

  const handleClick = (value: any, index: number) => {
    setFood(value);
    setFoodIndex(index);
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
                  }}
                  foodname={value.foodname}
                  content={value.context}
                  image={value.image}
                  price={value.price}
                />
              </DialogTrigger>
              <DialogContent className="[&>button]:hidden max-w-[874px]!">
                <FoodDetail
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
