"use client";
import LoginAcc from "@/components/LoginAcc";
import axios from "axios";
import { Router } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const LoginPage = () => {
  const [input, setInput] = useState({});
  const router = useRouter();
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput((val) => ({
      ...val,
      [name]: value,
    }));
  };

  const handleOnClick = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/login`,
      input
    );
    localStorage.setItem("token", response.data.token);
    alert("amjilttai nevterlee");
    router.push("/homepage");
  };
  return (
    <div className="justify-center items-center">
      <LoginAcc onchange={handleOnChange} onclick={handleOnClick} />
    </div>
  );
};

export default LoginPage;
