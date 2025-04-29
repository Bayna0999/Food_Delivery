"use client";
import { useParams } from "next/navigation";
import { Router } from "next/router";
import React, { Dispatch, SetStateAction, useState } from "react";

const CategoryButton = ({
  name,
  categoryID,
  setSelectedCategory,
  selectedCategory,
}: {
  name: string;
  categoryID: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  selectedCategory: string;
}) => {
  const isSelected = categoryID === selectedCategory;
  const HandleOnClick = () => {
    setSelectedCategory(categoryID);
  };

  return (
    <button
      onClick={HandleOnClick}
      className={` flex justify-center items-center rounded-4xl mr-[20px] w-[132px] h-[36px] ${
        isSelected ? "bg-red-500" : "bg-white"
      }`}
    >
      {name}
    </button>
  );
};

export default CategoryButton;
