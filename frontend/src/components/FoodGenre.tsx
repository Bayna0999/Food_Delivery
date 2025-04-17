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
  };
  useEffect(() => {
    fetchFoods();
  }, []);
  console.log(foods, "foods");
  const IsClicked = () => {
    setIstrue(!istrue);
  };
  return (
    <div className="flex w-full h-full bg-neutral-700">
      <div className="flex flex-wrap w-full h-fit mx-[20px] my-[20px] rounded-3xl gap-[36px] ">
        {foods?.map((value: any, index: number) => {
          return (
            <Dialog key={index}>
              <DialogTrigger>
                <Card
                  foodname={value.foodname}
                  content={value.context}
                  image={value.image}
                  price={value.price}
                />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                  <DialogDescription>
                    <FoodDetail
                      foodname={value.foodname}
                      content={value.context}
                      image={value.image}
                      price={value.price}
                    />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </div>
  );
};

export default FoodGenre;
