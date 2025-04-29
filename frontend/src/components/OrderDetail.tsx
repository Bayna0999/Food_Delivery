"use client";
import { Minus, Plus, X } from "lucide-react";
import React from "react";
type OrderDetailProps = {
  image: string;
  foodname: string;
  content: string;
  price: number;
  orderCount: number;
  HandlePlus: () => void;
  HandleMinus: () => void;
};
const OrderDetail = ({
  image,
  foodname,
  content,
  price,
  orderCount,
  HandlePlus,
  HandleMinus,
}: OrderDetailProps) => {
  return (
    <div className="flex flex-col w-auto h-auto ml-[16px] my-[16px]">
      <div className="flex w-[471px] h-[120px] rounded-2xl bg-white my-[20px] ">
        <div className="flex gap-[24px] w-auto   ">
          <div className="flex rounded-2xl size-[120px]">
            <img src={image} alt="" className="flex rounded-2xl size-[120px]" />
          </div>
          <div className="flex flex-col justify-between w-[305px] ">
            <div className="flex justify-between  w-full h-fit ">
              <div className="flex">
                <div className="flex flex-col w-[259px]">
                  <p className="text-[16px] text-[#FD543F] font-bold">
                    {foodname}
                  </p>
                  <p className="text-[12px] text-[#09090B]  h-fit">{content}</p>
                </div>
                {/* <div className="border-[1px] rounded-full size-[36px] border-red-500">
                  <p className="text-red-500">X</p>
                </div> */}
              </div>

              <div className="flex w-fit h-full justify-center items-center  ">
                <button className="flex justify-center items-center size-[36px] bg-white rounded-full border-[1px] border-[#EF4444] ">
                  <X className="fill-red-600" />
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-between w-full gap-[24px]">
              <div className="flex justify-between items-center">
                <div className="flex gap-2.5 justify-center items-center">
                  <div
                    onClick={HandleMinus}
                    className="flex bg-white rounded-full size-[36px] justify-center items-center border-[1px] border-[#E4E4E7]"
                  >
                    <Minus />
                  </div>
                  <p className="text-[18px]">{orderCount}</p>
                  <div
                    onClick={HandlePlus}
                    className="flex bg-white rounded-full size-[36px] justify-center items-center border-[1px] border-[#E4E4E7]"
                  >
                    <Plus />
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-[16px] text-[#09090B]">${price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t-[#09090B · 50%] border-dashed border-b-0 border-2"></div>
    </div>
  );
};

export default OrderDetail;
