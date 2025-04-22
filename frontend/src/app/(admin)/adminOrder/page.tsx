import { DataTableDemo } from "@/components/AdminOrder/DataTable";
import Navigation from "@/components/AdminOrder/Navigation";
import React from "react";

const page = () => {
  return (
    <div className="flex ">
      <Navigation />
      <DataTableDemo />
    </div>
  );
};

export default page;
