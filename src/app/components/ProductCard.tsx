import Image from "next/image";
import React from "react";

type Props = {};

const ProductCard = (props: Props) => {
  return (
    <div className=" w-[262px]">
      <div className=" h-[300px] custom-box-shadow w-full relative overflow-auto rounded-md cursor-pointer">
        <Image src={"/assets/others/furniture.png"} fill alt="img" />
      </div>
      <div className=" text-[16px] flex items-center justify-between">
        <p>Product name</p>
        <span>$20</span>
      </div>
    </div>
  );
};

export default ProductCard;
