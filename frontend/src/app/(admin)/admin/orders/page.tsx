"use client";
import { DataTableDemo } from "@/components/AdminOrder/DataTable";

import Navigation from "@/components/AdminOrder/Navigation";
import OrderFoodMenu from "@/components/AdminOrder/OrderFoodMenu";
import React, { useState } from "react";

const page = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex w-auto h-auto ml-[20px] mr-[40px] my-[80px]">
      <DataTableDemo />
    </div>
  );
};

export default page;
