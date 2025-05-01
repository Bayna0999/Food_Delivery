"use client";
import React, { useEffect, useState } from "react";

import axios from "axios";

import Category from "./Category";
import FoodMenu from "./FoodMenu";
import MainPageImage from "../MainPageImage";

const FoodGenre = () => {
  const [orderCount, setOrderCount] = useState(1);
  const HandlePlus = () => {
    setOrderCount(orderCount + 1);
  };
  const HandleMinus = () => {
    setOrderCount(orderCount - 1);
  };
  const [istrue, setIstrue] = useState(false);
  const [foodIndex, setFoodIndex] = useState(-1);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const fetchCategoreis = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}category`
    );
    setCategory(res.data.categories);
  };
  const HandleOnClick = (id: string) => {
    setSelectedCategory(id);
  };
  useEffect(() => {
    fetchCategoreis();
  }, []);
  console.log(selectedCategory, "category");
  return (
    <div className="flex flex-col w-full h-full bg-neutral-700">
      <div className="flex w-screen h-[136px]">
        <Category onclick={HandleOnClick} />
      </div>
      <FoodMenu
        id={selectedCategory}
        HandleMinus={HandleMinus}
        HandlePlus={HandlePlus}
        orderCount={orderCount}
      />
    </div>
  );
};

export default FoodGenre;

// <Dialog key={index}>
//         <DialogTrigger>
//           <Card
//             foodname={value.foodname}
//             content={value.context}
//             image={value.image}
//             price={value.price}
//           />
//         </DialogTrigger>
//         <DialogContent className="[&>button]:hidden max-w-[874px]!">
//           <FoodDetail
//             HandlePlus={HandlePlus}
//             HandleMinus={HandleMinus}
//             orderCount={orderCount}
//             foodname={value.foodname}
//             content={value.context}
//             image={value.image}
//             price={value.price}
//           />
//         </DialogContent>
//       </Dialog>
//       <div
//         onClick={() => {
//           handleClick(value, index);
//         }}
//         className="size-[44px] mb-[100px] mr-[20px] rounded-full flex justify-center items-center absolute z-50 bg-white hover:bg-amber-950 bottom-3.5 right-3.5 "
//       >
//         <Plus />
//       </div>
//     </div>
