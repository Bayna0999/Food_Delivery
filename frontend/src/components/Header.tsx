"use client";
import React, { useState } from "react";
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

import { Plus, X } from "lucide-react";
const Header = () => {
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
  const localstorage = () => {
    return localStorage.setItem("hello", "zail");
  };
  const local = () => {
    return localStorage.getItem("zail");
  };
  localstorage();
  const z = local();
  console.log(z);

  return (
    <div className=" flex w-screen h-[68px] bg-black justify-center items-center">
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
              <MapPin />
              <p className="text-[12px] text-[#EF4444] ">Delivery address:</p>
              <p className="text-[12px] text-[#71717A] ">Add Location</p>
              <ChevronRight />
            </div>

            <Sheet>
              <SheetTrigger>
                {" "}
                <div
                  onClick={HandleOnClick}
                  className="size-[36px]  bg-white flex relative justify-center items-center rounded-full"
                >
                  <ShoppingCart className="size-[16px]" />
                  {notifCount > 0 && (
                    <div className=" flex size-[20px] bg-red-800 rounded-full justify-center items-center text-white absolute top-[-5px] right-[-5px]">
                      {notifCount}
                    </div>
                  )}
                </div>
              </SheetTrigger>
              <SheetContent>
                <div className="flex w-auto gap-[10px] items-center mx-[32px] mt-[32px] ">
                  <ShoppingCart className="size-[24px] text-white" />
                  <p className="text-[20px] text-white">Order detail</p>
                </div>
                <Tabs defaultValue="account" className="w-[471px] h-fit">
                  <TabsList className="w-auto mx-[32px] rounded-3xl">
                    <TabsTrigger className="rounded-3xl" value="Cart">
                      Cart
                    </TabsTrigger>
                    <TabsTrigger className="rounded-3xl" value="Order">
                      Order
                    </TabsTrigger>

                    <button className="flex justify-center items-center size-[36px] bg-white rounded-full">
                      <X />
                    </button>
                  </TabsList>
                  <TabsContent className="flex mx-[24px] w-auto" value="Cart">
                    <OrderDetail
                      foodname="buuz"
                      image="https://blog.russianfoods.com/wp-content/uploads/2011/11/%D0%B3%D1%83%D0%BB%D1%8F%D1%88-%D1%81-%D1%8F%D0%B1%D0%BB-1.jpg"
                      content="meat"
                      HandleMinus={handleOnClick}
                      HandlePlus={handleOnClick}
                      orderCount={1}
                      price={12.99}
                    />
                  </TabsContent>
                  <TabsContent value="Order">
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
