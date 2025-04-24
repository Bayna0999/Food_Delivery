"use client";
import LoginAcc from "@/components/LoginAcc";
import axios from "axios";
import React, { useRef } from "react";

const LoginPage = () => {
  const handleOnClick = async () => {
    await axios.post("http://localhost:8000/login");
  };
  return (
    <div className="justify-center items-center">
      <LoginAcc />
    </div>
  );
};

export default LoginPage;
