import { Plus } from "lucide-react";
import React from "react";
type cardProps = {
  content: string;
  image: string;
  foodname: string;
  price: number;
  onclick: () => void;
};
const Card = ({ content, image, foodname, price, onclick }: cardProps) => {
  return (
    <div className="flex flex-col w-fit bg-white  h-fit rounded-2xl">
      <div className="flex relative w-fit h-[210px] rounded-2xl mx-[16px] my-[16px]">
        <img src={image} className="flex w-full h-full rounded-2xl" />
        <div
          onClick={onclick}
          className="size-[44px] rounded-full flex justify-center items-center absolute z-10 bg-white hover:bg-amber-950 bottom-3.5 right-3.5 "
        >
          <Plus />
        </div>
      </div>
      <div className="flex flex-col ml-[16px]  w-fit h-fit">
        <div className="flex justify-between items-center w-full h-fit  ">
          <p className="text-[24px] text-[#FD543F]">{foodname} </p>
          <p className="text-[18px] text-[#09090B]">${price}</p>
        </div>
        <p className="text-[30px] text-black w-[365px]">{content}</p>
      </div>
    </div>
  );
};
export default Card;
