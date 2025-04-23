import React from "react";

const CategoryButton = ({
  name,
  onclick,
}: {
  name: string;
  onclick: () => void;
}) => {
  return (
    <button
      onClick={onclick}
      className={` flex justify-center items-center rounded-4xl mr-[20px] w-[132px] h-[36px] bg-white`}
    >
      {name}
    </button>
  );
};

export default CategoryButton;
