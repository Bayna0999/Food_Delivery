import React from "react";
import Logo from "../logo/Logo";
import NavButton from "./NavButton";

const mockData = ["Food Menu", "Orders", "Settings"];
const Navigation = () => {
  return (
    <div className="flex flex-col h-screen w-[205px] bg-white gap-[40px] mx-[36px] my-[20px]">
      <Logo />
      <div className="flex flex-col gap-[24px]">
        {mockData.map((value, index) => {
          return <NavButton key={index} index={index} text={value} />;
        })}
      </div>
    </div>
  );
};

export default Navigation;
