"use client";
import React, { useState } from "react";
import { DiVim } from "react-icons/di";
import { ChevronRight } from "lucide-react";
import { MapPin } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { User } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const istrue = false;
  const [notifCount, SetNotifCount] = useState(0);

  return (
    <div className=" flex w-screen h-[68px] bg-black justify-center items-center">
      <div className="flex w-full justify-between pl-[88px] pr-[88px]">
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
          <div className="flex justify-center items-center gap-[13px]">
            <div className="flex justify-center items-center w-[251px] h-[36px] gap-1 bg-white rounded-3xl">
              <MapPin />
              <p className="text-[12px] text-[#EF4444] ">Delivery address:</p>
              <p className="text-[12px] text-[#71717A] ">Add Location</p>
              <ChevronRight />
            </div>
            <div className="size-[36px]  bg-white flex relative justify-center items-center rounded-full">
              <ShoppingCart className="size-[16px]" />
              {notifCount > 0 && (
                <div className=" flex size-[20px] bg-red-800 rounded-full justify-center items-center text-white absolute top-[-5px] right-[-5px]">
                  {notifCount}
                </div>
              )}
            </div>
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
