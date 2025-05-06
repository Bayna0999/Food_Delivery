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
import { FoodType } from "@/lib/utils";

type FoodMenuProps = {
  HandleMinus: () => void;
  HandlePlus: () => void;
  orderCount: number;
  id: string;
};
const FoodMenu = ({
  id,
  HandleMinus,
  HandlePlus,
  orderCount,
}: FoodMenuProps) => {
  const [foods, setFoods] = useState([]);
  const [orders, setOrders] = useState([]);

  const fetchFoods = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/food/category?categoryId=${id}`
    );
    setFoods(res.data.Foods);
  };
  console.log(foods, "foods");
  useEffect(() => {
    fetchFoods();
    fetchOrders();
  }, [id]);
  const fetchOrders = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/foodOrder`
    );
    setOrders(res.data.foodOrder);
  };

  const [food, setFood] = useState([]);

  const handleClick = async (value: { _id: string; quantity: number }) => {
    // const token = localStorage.getItem("token");
    // const response = await axios.post(
    //   `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/foodOrder`,
    //   {
    //     totalPrice: "20000",
    //     FoodOrderItems: [
    //       {
    //         food: value._id,
    //         quantity: 2,
    //       },
    //     ],
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }
    // );

    // alert(response.data.success);
    const card = JSON.parse(localStorage.getItem("foods") || "[]");
    const existingIndex = card.findIndex((o: any) => o._id === value._id);
    let updatedOrders;
    if (existingIndex !== -1) {
      card[existingIndex].quantity += orderCount;
      updatedOrders = [...card];
    } else {
      value.quantity = orderCount;
      updatedOrders = [...card, value];
    }
    localStorage.setItem("foods", JSON.stringify(updatedOrders));
    window.location.reload();
    console.log(value, "value");
  };

  return (
    <div className="flex  flex-col  w-full h-fit mx-[20px] my-[20px] rounded-3xl gap-[36px] ">
      {foods?.map((value: any, index: number) => {
        return (
          <div key={index} className="flex flex-col ">
            <h2 className="text-[30px] mx-[80px] text-white">{value.name}</h2>
            <div className="flex flex-wrap gap-[36px] w-auto h-full mx-[80px] my-[54px] bg-neutral-700">
              {value.foods.map((food: FoodType, index: number) => {
                return (
                  <div key={index} className="relative">
                    <Dialog>
                      <DialogTrigger>
                        <Card
                          foodname={food.foodname}
                          content={food.context}
                          image={food.image}
                          price={food.price}
                        />
                      </DialogTrigger>
                      <DialogContent className="[&>button]:hidden max-w-[874px]!">
                        <FoodDetail
                          HandlePlus={HandlePlus}
                          HandleMinus={HandleMinus}
                          orderCount={orderCount}
                          foodname={food.foodname}
                          content={food.context}
                          image={food.image}
                          price={food.price}
                          onClick={() => {
                            handleClick(food);
                          }}
                        />
                      </DialogContent>
                    </Dialog>
                    <div
                      onClick={() => {
                        handleClick(food);
                      }}
                      className="size-[44px] mb-[100px] mr-[20px] rounded-full flex justify-center items-center absolute z-1 bg-white hover:bg-amber-950 bottom-3.5 right-3.5 "
                    >
                      <Plus />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodMenu;
