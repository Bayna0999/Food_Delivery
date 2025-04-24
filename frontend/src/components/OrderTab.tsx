"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderDetail from "./OrderDetail";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Plus, X } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
const OrderTab = () => {
  const [number, setNumber] = useState(0);
  const handleOnClick = () => {
    setNumber(number + 1);
  };
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <Tabs defaultValue="account" className="w-[471px] h-fit">
          <TabsList>
            <TabsTrigger value="Cart">Cart</TabsTrigger>
            <TabsTrigger value="Order">Order</TabsTrigger>

            <button className="flex justify-center items-center size-[36px] bg-white rounded-full">
              <X />
            </button>
          </TabsList>
          <TabsContent value="Cart">
            <OrderDetail
              foodname="buuz"
              image="https://blog.russianfoods.com/wp-content/uploads/2011/11/%D0%B3%D1%83%D0%BB%D1%8F%D1%88-%D1%81-%D1%8F%D0%B1%D0%BB-1.jpg"
              content="meat"
              HandleMinus={handleOnClick}
              HandlePlus={handleOnClick}
              orderCount={1}
              price={12.99}
            />
          </TabsContent>
          <TabsContent value="Order">
            <OrderDetail
              foodname="huushuur"
              image="https://blog.russianfoods.com/wp-content/uploads/2011/11/%D0%B3%D1%83%D0%BB%D1%8F%D1%88-%D1%81-%D1%8F%D0%B1%D0%BB-1.jpg"
              content="meat"
              HandleMinus={handleOnClick}
              HandlePlus={handleOnClick}
              orderCount={1}
              price={12.99}
            />
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
  // <SidebarProvider className="bg-[#404040] w-[471px] rounded-4xl">
  //   <Sidebar className="bg-[#404040] w-[471px] rounded-4xl">
  //     <SidebarHeader></SidebarHeader>
  //     <SidebarContent>
  //       <SidebarGroup></SidebarGroup>
  //     </SidebarContent>
  //     <SidebarFooter></SidebarFooter>
  //   </Sidebar>
  // </SidebarProvider>
};

export default OrderTab;
