import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-[10px]">
      <img className={``} src="DeliveryLOGO.svg" alt="" />
      <div className="flex flex-col">
        <div className="flex">
          <p className="text-white text-[20px]">Nom</p>
          <p className="text-red-800 text-[20px]">Nom</p>
        </div>
        <p className="text-[#71717A] text-[12px]">Swift delivery</p>
      </div>
    </div>
  );
};

export default Logo;
