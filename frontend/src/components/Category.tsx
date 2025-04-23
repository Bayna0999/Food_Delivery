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
  const fetchCategoreis = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}category`
    );
    setCategory(res.data.categories);
  };

  const [isClicked, setIsClicked] = useState(false);
  const [secondClick, setSecondClick] = useState(-1);
  const HandleOnClick = (index: number) => {
    if (secondClick == index) {
    }
  };
  useEffect(() => {
    fetchCategoreis();
  }, []);
  console.log(category, "Category");
  return (
    <div className="flex justify-center items-center">
      <Carousel className=" flex  w-screen  ">
        <CarouselContent className="flex w-fit ">
          {category?.map((value: any, index: number) => {
            return (
              <CarouselItem key={index}>
                <CategoryButton
                  name={value.name}
                  onclick={() => {
                    HandleOnClick(index);
                  }}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Category;
