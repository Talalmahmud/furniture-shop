import Image from "next/image";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";

type Props = {};

const ProductCard = (props: Props) => {
  return (
    <div className=" w-[262px]">
      <Link href={"/products/12"}>
        {" "}
        <div className=" h-[300px] custom-box-shadow w-full relative overflow-auto rounded-md cursor-pointer">
          <Image
            src={"/assets/others/furniture.png"}
            fill
            alt="img"
            loading="lazy"
          />
        </div>
        <div className=" text-[16px] flex items-center justify-between">
          <p>Product name</p>
          <span>$20</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
