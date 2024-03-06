"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className=" w-full h-[600px] py-[80px] shadow-sm bg-green-200 ">
      <div className=" w-[1100px] mx-auto ">
        <div className=" flex items-center justify-between">
          <div className=" flex flex-col gap-[32px] w-[400px]">
            <p>Shop your items. </p>
            <p className=" text-[22px] font-extrabold">
              This is the best place for shopping. You will get best shopping
              experience.
            </p>
            <div>
              <button className=" h-[30px] flex justify-center items-center text-[14px] px-[8px] py-[4px] bg-orange-500 text-white rounded-md">
                Shop now
              </button>
            </div>
          </div>
          <div className="h-[400px] w-[300px] relative overflow-auto">
            <Image src={"/assets/others/furniture.png"} fill alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
