import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";
import CategoryButton from "./CategoryButton";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const fetchCategoreis = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}category`
    );
    setCategory(res.data.categories);
  };
  useEffect(() => {
    fetchCategoreis();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-[30px] text-white">Categories</p>
      <div>
        <Carousel className=" flex  w-screen px-[100px]">
          <CarouselContent className="flex w-fit ">
            <CarouselItem className="flex">
              {category?.map((value: any, index: number) => {
                return (
                  <CategoryButton
                    key={index}
                    name={value.name}
                    categoryID={value._id}
                    setSelectedCategory={setSelectedCategory}
                    selectedCategory={selectedCategory}
                  />
                );
              })}
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
export default Category;
