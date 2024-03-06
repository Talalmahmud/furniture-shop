"use client";

import Image from "next/image";
import React from "react";

type Props = {};

const Product = (props: Props) => {
  return (
    <div className=" w-full flex  gap-x-[64px]">
      <div className=" w-[450px] relative bg-slate-400 h-[500px]">
        <Image src={"/assets/others/furniture.png"} alt="" fill priority />
      </div>
      <div className=" w-[586px] h-[200px] ">
        <h2 className=" text-[24px] font-bold">The Product Title</h2>
        <div className=" flex gap-[16px] pt-[32px] pb-[8px]">
          <div className=" flex items-center gap-x-[4px]">
            <Image src={"/icons/rating.svg"} alt="" height={16} width={16} />
            <Image src={"/icons/rating.svg"} alt="" height={16} width={16} />
            <Image src={"/icons/rating.svg"} alt="" height={16} width={16} />
            <Image src={"/icons/rating.svg"} alt="" height={16} width={16} />
          </div>
          <p>(10) reviews</p>
        </div>
        <p>Price: $20.00</p>
        <p>
          In order to sit comfortably for long periods, people need freedom of
          movement. The Form rocking chair has a molded plastic shell with a
          wide, curved seat, which gives plenty of opportunity for changing
          one’s sitting position.
        </p>
        <div className=" flex gap-[16px]">
          <div className=" h-[40px] flex items-center gap-[8px]">
            <div className=" h-[24px] w-[24x] relative ">
              <Image src={"/icons/round-plus.svg"} fill alt="" />
            </div>
            <p>0</p>
            <div className=" h-[24px] w-[24x] relative ">
              <Image src={"/icons/round-minus.svg"} fill alt="" />
            </div>
          </div>
          <button className=" h-[40px] px-[8px] bg-black text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
