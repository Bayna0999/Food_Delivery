"use client";
import FoodGenre from "@/components/FoodGenre/FoodGenre";
import MainPageImage from "@/components/MainPageImage";
import React, { useEffect, useState } from "react";

const homepage = () => {
  return (
    <div>
      <MainPageImage />
      <FoodGenre />
    </div>
  );
};

export default homepage;
