"use client";
import React, { useState } from "react";

const NavButton = ({ text }: { text: string }) => {
  const [isClicked, setIsClicked] = useState(true);
  const handleOnClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div onClick={handleOnClick} className="flex flex-col w-[165px] h-fit">
      <button
        className={`flex justify-center items-center w-full h-[40px] rounded-4xl ${
          isClicked ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        {text}
      </button>
    </div>
  );
};

export default NavButton;
