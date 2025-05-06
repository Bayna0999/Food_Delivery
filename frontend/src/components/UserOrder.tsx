import React from "react";

const UserOrder = () => {
  return (
    <div className="flex flex-col w-auto h-auto ml-[16px] my-[16px]">
      <div className="flex w-[471px] h-[120px] rounded-2xl bg-white my-[20px] ">
        <div className="flex gap-[24px] w-full pr-4   ">
          <div className="flex flex-col justify-between w-full ">
            <div className="flex justify-between">
              <p>$price</p>
              <div className="flex w-fit h-[30px] border-amber-400 border-[1px] rounded-4xl justify-center items-center">
                <p className="flex px-[20px]">pending</p>
              </div>
            </div>
            <div></div>

            <div className="flex flex-col justify-between w-full gap-[24px]">
              <div className="flex justify-between items-center">
                <div className="flex gap-2.5 justify-center items-center">
                  <p className="text-[18px]">orderCount</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[16px] text-[#09090B]">price</p>
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

export default UserOrder;
