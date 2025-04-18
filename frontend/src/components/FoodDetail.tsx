"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { X } from "lucide-react";
type FoodProps = {
  image: string;
  foodname: string;
  content: string;
  price: number;
};
const FoodDetail = ({ image, foodname, content, price }: FoodProps) => {
  const [orderCount, setOrderCount] = useState(1);
  const HandlePlus = () => {
    setOrderCount(orderCount + 1);
  };
  const HandleMinus = () => {
    setOrderCount(orderCount - 1);
  };
  return (
    <div className="flex w-[826px] h-[412px] rounded-2xl bg-white">
      <div className="flex gap-[24px] w-auto mx-[20px] my-[20px] ">
        <div className="flex rounded-2xl w-[48%]">
          <img src={image} alt="" className="flex rounded-2xl" />
        </div>
        <div className="flex flex-col justify-between w-[48%]">
          <div className="flex flex-col w-full h-fit">
            <div className="flex w-full h-fit justify-end">
              <button className="flex justify-center items-center size-[36px] bg-white rounded-full">
                <X />
              </button>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-[30px] text-[#FD543F] w-full">{foodname} </p>
              <p className="text-[16px] text-[#09090B] w-full h-fit">
                {content}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between w-full gap-[24px]">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-[16px]">Total price</p>
                <p className="text-[24px] text-[#09090B]">${price}</p>
              </div>
              <div className="flex gap-2.5 justify-center items-center">
                <div
                  onClick={HandlePlus}
                  className="flex bg-white rounded-full size-[44px] justify-center items-center border-[1px] border-[#E4E4E7]"
                >
                  <Plus />
                </div>
                <p className="text-[18px]">{orderCount}</p>
                <div
                  onClick={HandleMinus}
                  className="flex bg-white rounded-full size-[44px] justify-center items-center border-[1px] border-[#E4E4E7]"
                >
                  <Minus />
                </div>
              </div>
            </div>
            <button className="w-full h-[44px] flex justify-center items-center bg-black rounded-3xl text-white">
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
