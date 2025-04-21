import React from "react";
import OrderDetail from "./OrderDetail";

const Order = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex gap-[10px]">
        <p>Order details</p>
      </div>
      <div className="flex flex-col ">
        <div className="text-[20px] w-[380px] h-[28px]">My Cart</div>
        <div>
          {/* <OrderDetail
            foodname="buuz"
            image="https://blog.russianfoods.com/wp-content/uploads/2011/11/%D0%B3%D1%83%D0%BB%D1%8F%D1%88-%D1%81-%D1%8F%D0%B1%D0%BB-1.jpg"
            content="meat"
            HandleMinus={handleOnClick}
            HandlePlus={handleOnClick}
            orderCount={1}
            price={12.99}
          /> */}
        </div>

        <div className="flex flex-col gap-[30px] ">
          <div className="text-[#09090B] text-[20px] h-[28px] w-full">
            Payment info
          </div>

          <div className="flex w-full">
            <p className="text-[16px] text-[#71717A]">Items </p>
            <p className="text-[16px] text-[#09090B]">$12</p>
          </div>
          <div className="flex w-full">
            <p className="text-[16px] text-[#71717A]">Shipping </p>
            <p className="text-[16px] text-[#09090B]">0.99$</p>
          </div>
          <div className="w-full h-[1px] outline-dashed"></div>
        </div>
      </div>
    </div>
  );
};

export default Order;
