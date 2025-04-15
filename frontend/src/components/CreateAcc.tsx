import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";

export const CreateAcc = () => {
  return (
    <div className="w-[416px] h-[288px] left-[48px] top-[226px] bottom-[390px] flex flex-col gap-6">
      <div className="size-[36px] border-[1px] border-[#E4E4E7] flex justify-center items-center rounded-md">
        <IoChevronBackOutline />
      </div>
      <div className="w-full h-[60px] gap-1 flex flex-col ">
        <p className="[h-32px] text-[#09090B] text-[24px]">
          Create your account
        </p>
        <p className="h-[24px] text-#71717A">
          Sign up to explore your favorite dishes.
        </p>
      </div>
      <div className="">
        <input
          type="text"
          placeholder="Enter your email address"
          className="w-full h-[36px] border-[1px] border-[#71717A] rounded-md"
        />
      </div>

      <button className="w-full bg-[#71717A] rounded-md text-white ">
        Let's Go
      </button>
      <div className="flex gap-2">
        <p className="text-4 text-[#71717A]">Already have an account?</p>
        <p className="text-4 text-[#2563EB]"> Log in </p>
      </div>
    </div>
  );
};
