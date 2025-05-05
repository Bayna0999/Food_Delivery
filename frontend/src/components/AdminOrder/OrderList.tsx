"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTableDemo } from "./DataTable";
type OrderListProps = {
  number: number;
  email: string;
  food: [];
  date: Date;
  total: string;
  address: string;
};
const OrderList = ({
  number,
  email,
  food,
  date,
  total,
  address,
}: OrderListProps) => {
  return (
    // <div className="flex w-[800px] h-[52px]">
    //   <div className="flex justify-center items-center">
    //     <input className="p-4" type="checkbox" />
    //   </div>
    //   <div className="flex justify-center items-center">{number}</div>
    //   <div className="flex justify-center items-center">
    //     <p>{email}</p>
    //   </div>

    // </div>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => navigator.clipboard}>
          Copy payment ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>View customer</DropdownMenuItem>
        <DropdownMenuItem>View payment details</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default OrderList;
