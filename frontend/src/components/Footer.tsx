import React from "react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import Logo1 from "./Logo1";
const Footer = () => {
  return (
    <div className="flex w-screen h-[755px] bg-black flex-col">
      <div className="flex w-full h-[92px] gap-[30px]  items-center my-[80px] bg-red-800 ">
        <p className="flex text-white text-[30px] w-[272px] h-[36px] ml-[88px]">
          Fresh fast delivered
        </p>
      </div>
      <div className="flex w-full mx-[88px] mt-[88px] h-[228px] gap-[220px]">
        <div className="flex w-fit h-full ">
          <Logo1 />
        </div>
        <div className="flex gap-[112px]">
          <div className="flex flex-col w-fit h-full">
            <p className="text-[16px] text-[#71717A]"> NOMNOM </p>
            <p className="text-[16px] text-white">Home </p>
            <p className="text-[16px] text-white">Contact us</p>
            <p className="text-[16px] text-white">Delivery zone</p>
          </div>
          <div className="flex  w-fit h-full gap-[88px]">
            <div className="flex flex-col w-fit h-full">
              <p className="text-[16px] text-[#71717A]"> NOMNOM </p>
              <p className="text-[16px] text-white">Appetizers</p>
              <p className="text-[16px] text-white">Salads</p>
              <p className="text-[16px] text-white">Pizzas</p>
              <p className="text-[16px] text-white">Lunch favorites</p>
              <p className="text-[16px] text-white">Main dishes</p>
            </div>
            <div className="flex flex-col w-fit h-full">
              <p className="text-[16px] text-[#71717A]"> </p>
              <p className="text-[16px] text-white">Side dish </p>
              <p className="text-[16px] text-white">Brunch</p>
              <p className="text-[16px] text-white">Desserts</p>
              <p className="text-[16px] text-white">Beverages</p>
              <p className="text-[16px] text-white">Fish & Sea foods</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="flex text-[16px] text-[#71717A]">FOLLOW US</p>
            <div className="flex w-fit gap-[10px]">
              <Facebook className="fill-white" />
              <Instagram className="fill-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full mx-[88px] my-[111px] justify-start items-center h-[82px] border-t-[1px] border-[#71717A] gap-[32px]">
        <div className="flex gap-[4px]">
          <p className="text-[14px] text-[#71717A]">Copyright 2024</p>
          <p className="text-[14px] text-[#71717A]"> ©</p>
          <p className="text-[14px] text-[#71717A]">Nomnom LLC</p>
        </div>
        <p className="text-[14px] text-[#71717A]">Privacy policy </p>
        <p className="text-[14px] text-[#71717A]">Terms and conditoin</p>
        <p className="text-[14px] text-[#71717A]">Cookie policy</p>
      </div>
    </div>
  );
};

export default Footer;
