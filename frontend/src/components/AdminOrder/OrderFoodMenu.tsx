import { Tabs, TabsContent } from "@radix-ui/react-tabs";
import React from "react";
import Card from "../FoodGenre/Card";
import FoodMenu from "../FoodGenre/FoodMenu";

const OrderFoodMenu = () => {
  return (
    <div className="flex flex-col pl-6 pt-6 pr-10 pb-[54px] gap-[50px]">
      <div className="bg-white rounded-xl">
        <div className="flex flex-col w-auto h-fit mx-[40px] py-[20px] gap-[40px] ">
          <div className="flex w-full h-fit items-center justify-start">
            <p className="text-[20px] ">Dishes catgeory</p>
          </div>
          <div>
            <div className="flex flex-wrap">
              <div className="flex justify-center items-center border-[1px] border-[#E4E4E7] rounded-4xl px-[10px] gap-[10px]">
                <p>hello</p>
                <p className="flex w-[30px] h-[18px] bg-black text-white text-[12px] rounded-4xl justify-center items-center">
                  122
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full h-[552px] rounded-xl">
        <FoodMenu />
      </div>
    </div>
  );
};

export default OrderFoodMenu;
