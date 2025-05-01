"use client";
import { useParams } from "next/navigation";
import { Router } from "next/router";
import React, { Dispatch, SetStateAction, useState } from "react";

const CategoryButton = ({
  name,
  categoryID,
  setSelectedCategory,
  selectedCategory,
  onclick,
}: {
  name: string;
  categoryID: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  selectedCategory: string;
  onclick: any;
}) => {
  const isSelected = categoryID === selectedCategory;

  return (
    <button
      onClick={onclick}
      className={` flex justify-center items-center rounded-4xl mr-[20px] w-[132px] h-[36px] ${
        isSelected ? "bg-red-500" : "bg-white"
      }`}
    >
      {name}
    </button>
  );
};

export default CategoryButton;
