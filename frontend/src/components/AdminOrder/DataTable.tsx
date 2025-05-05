"use client";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type UserType = {
  _id: string;
  email: string;
  phoneNumber: string;
  address: string;
  isVerified: boolean;
};
type FoodOrderItemsType = {
  food: string;
  quantity: number;
};
export type PaymentType = {
  _id: string;
  user: UserType;
  totalPrice: number;
  status: "pending" | "processing" | "success" | "failed";
  food: string;
  FoodOrderItems: [FoodOrderItemsType];
  createdAt: string;
};

export function DataTableDemo() {
  const [data, setData] = useState<PaymentType[]>([]);

  const fetchOrder = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/foodOrder`
    );
    console.log(res, "res");
    setData(res.data.foodOrder);
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div className="flex w-full bg-[white] rounded-md">
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">
              <input type="checkbox" />
            </TableHead>
            <TableHead className="w-[100px] font-medium">email</TableHead>
            <TableHead className="font-medium">food count</TableHead>
            <TableHead className="w-[90px] font-medium">date</TableHead>
            <TableHead className="font-medium">address</TableHead>
            <TableHead className="">total price</TableHead>
            <TableHead className="w-[90px] font-medium">status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((order) => (
            <TableRow key={order._id}>
              <TableCell className="font-medium">
                <input type="checkbox" />
              </TableCell>
              <TableCell className="font-medium">{order.user.email}</TableCell>
              <TableCell className="font-medium flex justify-between">
                {order.FoodOrderItems.length} foods
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <ChevronDown />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem> 1 hool bga</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
              <TableCell className="font-medium">{order.createdAt}</TableCell>
              <TableCell className="font-medium">
                {order.user.address}
              </TableCell>
              <TableCell className="">{order.totalPrice}</TableCell>
              <TableCell className="font-medium">
                <div className="flex w-fit h-[30px] border-amber-400 border-[1px] rounded-4xl justify-center items-center">
                  <p className="flex px-[20px]">{order.status}</p>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  );
}
