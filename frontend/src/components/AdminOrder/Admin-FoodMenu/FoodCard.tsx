import Image from "next/image";
import React from "react";
type FoodcardProps = {
  image: string;
  foodname: string;
  price: number;
  context: string;
};
const FoodCard = ({ image, foodname, price, context }: FoodcardProps) => {
  return (
    <div className="flex w-[270px] h-[240px] border-[1px] border-[#E4E4E7] rounded-xl">
      <div className="w-full h-full flex flex-col">
        <div className="mx-[16px] my-[16px] w-[200px] h-[200px]">
          <Image
            width={240}
            height={130}
            src={image}
            alt="foodimg"
            className="rounded-xl w-[240px] h-[130px]"
          />
        </div>
        <div>
          <p>{foodname}</p>
          <p>{price}</p>
        </div>
        <p>{context}</p>
      </div>
    </div>
  );
};

export default FoodCard;
