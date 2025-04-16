import Card from "@/components/Card";
import FoodDetail from "@/components/FoodDetail";
import { Car } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <Card
      image="https://blog.russianfoods.com/wp-content/uploads/2011/11/%D0%B3%D1%83%D0%BB%D1%8F%D1%88-%D1%81-%D1%8F%D0%B1%D0%BB-1.jpg"
      foodname="buuz"
      content="helloasdasasdasdasdhjagsdjhagdjahgsdjashgdjashgdasdashdjagdjahgdjhasgdjhgd"
      price={12000}
    />
  );
};

export default page;
