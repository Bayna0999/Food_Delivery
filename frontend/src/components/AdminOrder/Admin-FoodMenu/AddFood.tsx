"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { FoodType } from "@/lib/utils";
import Card from "@/components/FoodGenre/Card";
import { Pen } from "lucide-react";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const AddFood = () => {
  const [foods, setFoods] = useState([]);
  const [id, setId] = useState("");
  const fectchFoods = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/food/category?categoryId=${id}`
    );
    setFoods(res.data.Foods);
  };
  useEffect(() => {
    fectchFoods();
  }, []);
  console.log(foods, "foodss");
  const [position, setPosition] = React.useState("");
  return (
    <div className="flex flex-col w-fit  h-fit gap-[40px]">
      {foods.map((food: any, index: number) => {
        return (
          <div className="flex flex-col bg-white w-full h-[552px] rounded-xl ">
            <p>{food.name}</p>
            <div className="flex" key={index}>
              {food.foods.map((value: FoodType, index: number) => {
                return (
                  <div className="w-fit h-fit relative px-[24px] py-[24px]">
                    <Card
                      key={index}
                      image={value.image}
                      price={value.price}
                      content={value.context}
                      foodname={value.foodname}
                    />
                    <Dialog>
                      <DialogTrigger>
                        <div className="size-[50px] bg-white flex justify-center items-center rounded-full absolute bottom-[150px] right-[50px]">
                          <Pen className="text-red-600" />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="flex flex-col w-[472px] h-[596px] ">
                        <div className="w-full px-[24px]">
                          <p className="text-[18px] font-bold">Dishes info</p>
                        </div>
                        <div className="flex justify-between px-[24px] w-full h-full">
                          <div className="w-full h-full">
                            <p className="text-[12px] text-[#71717A]">
                              Dish name
                            </p>
                          </div>

                          <div className="w-[288px] h-[36px]">
                            <p className="text-[14px] ">{value.foodname}</p>
                          </div>
                        </div>
                        <div className="flex justify-between px-[24px] w-full h-full">
                          <div className="w-full h-full">
                            <p className="text-[12px] text-[#71717A]">
                              Dish category
                            </p>
                          </div>
                          <div className="w-[200px] h-full">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="outline">
                                  <div className="flex w-fit rounded-3xl bg-[#F4F4F5] px-[10px]">
                                    {position}
                                  </div>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="w-56">
                                <DropdownMenuRadioGroup
                                  value={position}
                                  onValueChange={setPosition}
                                >
                                  {foods.map((el, index) => {
                                    return (
                                      <DropdownMenuRadioItem value={el.name}>
                                        <div className="flex w-fit rounded-3xl bg-[#F4F4F5] px-[10px]">
                                          {el.name}
                                        </div>
                                      </DropdownMenuRadioItem>
                                    );
                                  })}
                                </DropdownMenuRadioGroup>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                        <div className="flex justify-between px-[24px] w-full h-full">
                          <div className="w-full h-full">
                            <p className="text-[12px] text-[#71717A]">
                              Ingredients
                            </p>
                          </div>
                          <div className="w-[288px] h-[36px]">
                            <p className="text-[14px] ">{value.context}</p>
                          </div>
                        </div>
                        <div className="flex justify-between px-[24px] w-full h-full">
                          <div className="w-full h-full">
                            <p className="text-[12px] text-[#71717A]">Price</p>
                          </div>
                          <div className="w-[288px] h-[36px]">
                            <p className="text-[14px] ">{value.price}</p>
                          </div>
                        </div>
                        <div>
                          <div className="w-full h-full">
                            <p className="text-[12px] text-[#71717A]">Image</p>
                          </div>
                          <div></div>
                        </div>
                      </DialogContent>
                    </Dialog>
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

export default AddFood;
