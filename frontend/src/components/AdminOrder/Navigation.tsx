"use client";
import React from "react";
import Logo from "../logo/Logo";
import NavButton from "./NavButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const router = useRouter();

  const handleReDirect = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col h-screen w-[205px] bg-white gap-[40px] mx-[36px] my-[20px]">
      <Logo />
      <Tabs defaultValue="orders" className="flex w-[400px] h-fit">
        <TabsList className="flex flex-col h-fit gap-[24px] mt-[40px]">
          <TabsTrigger
            onClick={() => handleReDirect("/admin/food-menu")}
            className="w-[165px] h-[40px]"
            value="account"
          >
            Food Menu
          </TabsTrigger>
          <TabsTrigger
            onClick={() => handleReDirect("/admin/orders")}
            className="w-[165px] h-[40px]"
            value="orders"
          >
            Orders
          </TabsTrigger>
          <TabsTrigger
            className="w-[165px] h-[40px]"
            value="settings"
            onClick={() => handleReDirect("/admin/settings")}
          >
            Settings
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default Navigation;
