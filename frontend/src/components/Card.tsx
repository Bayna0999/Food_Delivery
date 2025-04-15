import React from "react";

const Card = () => {
  return (
    <div className="flex w-[400px] h-[342px] rounded-3xl">
      <div className="flex w-full h-[210px] rounded-3xl">
        <img src="" className="flex w-full h-full" />
      </div>
      <div className="flex mx-[16px] my-[16px] w-full h-fit">
        <div className="">
          <p className="text-[24px] text-[#FD543F]">Sunshine Stackers </p>
          <p className="text-[18px] text-[#09090B]">$12.99</p>
        </div>
        <p className="text-[14px] text-[#09090B] w-full h-fit">
          Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.
        </p>
      </div>
    </div>
  );
};

export default Card;
