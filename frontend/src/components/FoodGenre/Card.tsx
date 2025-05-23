import { Plus } from "lucide-react";
import React from "react";
type cardProps = {
  content: string;
  image: string;
  foodname: string;
  price: number;
};
const Card = ({ content, image, foodname, price }: cardProps) => {
  return (
    <div className="flex flex-col w-fit bg-white  h-fit rounded-2xl">
      <div className="flex relative w-auto h-[210px] rounded-2xl mx-[16px] my-[16px]">
        <img src={image} className="flex w-full h-full rounded-2xl" />
      </div>
      <div className="flex flex-col mx-[16px] mb-[16px] w-auto h-fit">
        <div className="flex justify-between items-center w-full h-fit  ">
          <p className="text-[24px] text-[#FD543F]">{foodname} </p>
          <p className="text-[18px] text-[#09090B]">${price}</p>
        </div>
        <p className="flex text-[14px] text-black w-[365px] items-start">
          {content}
        </p>
      </div>
    </div>
  );
};
export default Card;
