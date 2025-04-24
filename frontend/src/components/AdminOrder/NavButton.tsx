"use client";
import React, { useState } from "react";

const NavButton = ({ text, index }: { text: string; index: number }) => {
  // const [isClicked, setIsClicked] = useState(true);
  // const [count, setCount] = useState(-1);
  // const handleOnClick = () => {
  //   if (count == index) {
  //     setIsClicked(!isClicked);
  //   } else {
  //     setIsClicked(!isClicked);
  //     setCount(index);
  //   }
  // };
  // onClick={handleOnClick}
  return (
    <div className="flex flex-col w-[165px] h-fit">
      <button
        className={`flex justify-center items-center w-full h-[40px] rounded-4xl bg-white text-black focus:bg-black focus:text-white`}
      >
        {text}
      </button>
    </div>
  );
};

export default NavButton;
