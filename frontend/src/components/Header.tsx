"use client";
import React, { useEffect, useState } from "react";
import { DiVim } from "react-icons/di";
import { ChevronRight, Divide, Hand } from "lucide-react";
import { MapPin } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { User } from "lucide-react";
import Logo from "./logo/Logo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderDetail from "./OrderDetail";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Plus, X } from "lucide-react";
import { FoodType } from "@/lib/utils";
import axios from "axios";
import { Button } from "./ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-dropdown-menu";
const Header = () => {
  // const [card, setCard] = useState([]);
  const istrue = false;
  const [notifCount, SetNotifCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const HandleOnClick = () => {
    setIsClicked(!isClicked);
  };
  const [number, setNumber] = useState(0);
  const handleOnClick = () => {
    setNumber(number + 1);
  };
  // const fetchFoods = async () => {
  //   const res = await axios.get(
  //     `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}food/category`
  //   );
  //   setFoods(res.data.Foods);
  // };
  const [foods, setFoods] = useState<FoodType[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const storedFoods = JSON.parse(localStorage.getItem("foods") || "[]");
    setFoods(storedFoods);
    window.addEventListener("storage", storedFoods);

    return () => window.removeEventListener("storage", storedFoods);
  }, []);
  console.log(foods, "jjjj");

  const handleCheckOut = () => {
    return;
  };

  return (
    <div className=" flex w-screen  h-[68px] bg-black justify-center items-center fixed z-2">
      <div className="flex w-full h-full justify-between pl-[88px] pr-[88px]">
        <Logo />
        {istrue ? (
          <div className="flex justify-center items-center gap-4">
            <button className="w-[75px] h-[36px] bg-white flex justify-center items-center rounded-2xl text-black text-[14px] font-Inter">
              Sign up
            </button>
            <button className="w-[75px] h-[36px] bg-red-800 flex justify-center items-center rounded-2xl text-white text-[14px] font-Inter">
              Log in
            </button>
          </div>
        ) : (
          <div className="flex  relative justify-center items-center gap-[13px]">
            <div className="flex justify-center items-center w-[251px] h-[36px] gap-1 bg-white rounded-3xl">
              <Dialog>
                <DialogTrigger className="flex justify-center items-center gap-[5px]">
                  <MapPin />

                  <DialogTitle className="text-[12px] text-[#EF4444] ">
                    Delivery address:
                  </DialogTitle>

                  <p className="text-[12px] text-[#71717A] ">Add Location</p>
                  <ChevronRight />
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>Edit profile</DialogTitle>

                  <textarea
                    placeholder="Please provide specific address details such as building number, entrance, and apartment number"
                    className="w-[432px] h-[110px]"
                  />
                  <div className="flex justify-end gap-[20px]">
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Close
                      </Button>
                    </DialogClose>
                    <Button type="submit">Save changes</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <Sheet>
              <SheetTrigger>
                {" "}
                <div
                  onClick={HandleOnClick}
                  className="size-[36px]  bg-white flex relative justify-center items-center rounded-full"
                >
                  <ShoppingCart className="size-[16px]" />
                  {foods !== null && (
                    <div className=" flex size-[20px] bg-red-800 rounded-full justify-center items-center text-white absolute top-[-5px] right-[-5px]">
                      {foods.length}
                    </div>
                  )}
                </div>
              </SheetTrigger>
              <SheetContent className="min-w-[536px] ">
                <div className="flex w-auto gap-[10px] items-center mx-[32px] mt-[32px] ">
                  <ShoppingCart className="size-[24px] text-white" />
                  <p className="text-[20px] text-white">Order detail</p>
                </div>
                <Tabs defaultValue="account" className="w-full h-[540px] flex">
                  <TabsList className="w-auto mx-[24px] rounded-3xl">
                    <TabsTrigger className="rounded-3xl" value="Cart">
                      Cart
                    </TabsTrigger>
                    <TabsTrigger className="rounded-3xl" value="Order">
                      Order
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent
                    className="flex flex-col mx-[24px] h-[540px] bg-white rounded-3xl  overflow-scroll"
                    value="Cart"
                  >
                    {foods &&
                      foods.map((food: FoodType, index: number) => {
                        return (
                          <OrderDetail
                            key={index}
                            foodname={food.foodname}
                            image={food.image}
                            content={food.context}
                            HandleMinus={HandleOnClick}
                            HandlePlus={handleOnClick}
                            orderCount={food.quantity}
                            price={food.price}
                          />
                        );
                      })}
                  </TabsContent>
                  <TabsContent
                    className="flex flex-col mx-[24px] h-[540px] bg-white rounded-3xl  overflow-scroll"
                    value="Order"
                  >
                    <OrderDetail
                      foodname="huushuur"
                      image="https://blog.russianfoods.com/wp-content/uploads/2011/11/%D0%B3%D1%83%D0%BB%D1%8F%D1%88-%D1%81-%D1%8F%D0%B1%D0%BB-1.jpg"
                      content="meat"
                      HandleMinus={handleOnClick}
                      HandlePlus={handleOnClick}
                      orderCount={1}
                      price={12.99}
                    />
                  </TabsContent>
                </Tabs>
                <Tabs className="w-auto mx-[24px] bg-white h-[270px] rounded-3xl my-[20px]">
                  <div className="flex flex-col mx-[16px] my-[16px] gap-[20px]">
                    <p>Payment Info</p>
                    <div className="flex justify-between">
                      <p className="text-[16px] text-[#71717A]">items</p>
                      <p className="text-[16px] text-black">$13</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[16px] text-[#71717A]">Shipping</p>
                      <p className="text-[16px] text-black">0.99$</p>
                    </div>
                    <div className="w-full border-t-[#09090B · 50%] border-dashed border-b-0 border-2"></div>
                    <div className="flex justify-between">
                      <p className="text-[16px] text-[#71717A]">total</p>
                      <p className="text-[16px] text-black">0.99$</p>
                    </div>

                    <div className="flex w-[440px] h-[44px] rounded-full bg-red-500 items-center justify-center">
                      <p className="text-[14px] text-white">checkout</p>
                    </div>
                  </div>
                </Tabs>
              </SheetContent>
            </Sheet>
            <div className="size-[36px] bg-red-800 flex justify-center items-center rounded-full">
              <User className="size-[16px]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
