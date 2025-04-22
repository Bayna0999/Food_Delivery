import React from "react";
import Logo from "../Logo";
import NavButton from "./NavButton";

const Navigation = () => {
  return (
    <div className="flex flex-col h-screen w-[205px] bg-white gap-[40px] mx-[36px] my-[20px]">
      <Logo />
      <div className="flex flex-col gap-[24px]">
        <NavButton text="Food Menu" />
        <NavButton text="Orders" />
        <NavButton text="Settings" />
      </div>
    </div>
  );
};

export default Navigation;
