"use client";
import React, { useState } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import { Box, Slider } from "@mui/material";
import Image from "next/image";
function valuetext(value: number) {
  return `${value}`;
}

const minDistance = 1000;
const dummyList = [1, 2, 3, 4, 5, 6];
type Props = {};

export default function page({}: Props) {
  const [maxValue, setMaxValue] = useState<number>(50000);
  const [minValue, setMinValue] = useState<number>(0);
  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    console.log(newValue);
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setMinValue(Math.min(newValue[0], maxValue - newValue[0]) * 1000);
    } else {
      setMaxValue(Math.max(newValue[1], minValue + newValue[1]) * 1000);
    }
  };

  return (
    <div className=" w-[1100px] mx-auto">
      <Banner />
      <div className="flex gap-x-[16px] py-[16px]">
        <div>
          <div className=" w-[262px] px-[16px] bg-white shadow-lg rounded-md py-[16px]">
            <Box>
              <Slider
                getAriaLabel={() => "Minimum distance"}
                value={[minValue, maxValue]}
                onChange={handleChange1}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
              />
            </Box>
            <div className=" flex items-center justify-between">
              <input
                type="text"
                value={minValue || 0}
                className=" pl-[8px] w-[100px] h-[24px] outline-none flex justify-center items-center rounded-md shadow-md hover:shadow-sm"
              />
              <input
                type="text"
                value={maxValue || 0}
                className=" pl-[8px] w-[100px] h-[24px] outline-none flex justify-center items-center rounded-md shadow-md hover:shadow-sm"
              />
            </div>
            <div className=" py-[16px]">
              <h2 className=" py-[8px]">Catagories:</h2>
              {dummyList.map((item, index) => (
                <p key={index} className=" hover:underline cursor-pointer">
                  Product({item})
                </p>
              ))}
            </div>

            <div className=" py-[16px]">
              <h2 className=" py-[8px]">Tags:</h2>
              {dummyList.map((item, index) => (
                <p key={index} className=" hover:underline cursor-pointer">
                  Tag({item})
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className=" w-[837px] flex flex-col gap-y-[16px]">
          <div className=" flex justify-between items-center">
            <div>
              <input
                type="text"
                placeholder="Search products"
                className=" h-[24px] w-[262px] outline-none shadow-md text-[14px] py-[16px] pl-[8px]"
              />
            </div>
            <div>
              <select className=" bg-white rounded-md shadow-md outline-none cursor-pointer py-[6px]">
                <option value="1">product-1</option>
                <option value="2">product-2</option>
                <option value="3">product-3</option>
              </select>
            </div>
          </div>
          <div className=" w-full flex flex-wrap gap-[16px]">
            <ProductCard />
            <ProductCard /> <ProductCard /> <ProductCard />
            <ProductCard /> <ProductCard /> <ProductCard />
            <ProductCard />
          </div>
          <div className=" w-full flex justify-center items-center">
            <div className=" w-[300px] flex items-center justify-center gap-x-[8px]">
              <div className=" h-[16px] w-[16px] relative overflow-auto cursor-pointer hover:bg-black/10  ">
                <Image src={"/icons/left-arrow.svg"} fill alt="" />
              </div>
              <button className=" w-[24px] h-[24px] text-[14px] rounded-full hover:bg-black hover:text-white bg-slate-300 flex items-center justify-center ">
                1
              </button>
              <button className=" w-[24px] h-[24px] text-[14px] rounded-full hover:bg-black hover:text-white bg-slate-300 flex items-center justify-center ">
                2
              </button>
              <button className=" w-[24px] h-[24px] text-[14px] rounded-full hover:bg-black hover:text-white bg-slate-300 flex items-center justify-center ">
                3
              </button>

              <div className=" h-[16px] w-[16px] relative overflow-auto cursor-pointer hover:bg-black/10 ">
                <Image src={"/icons/right-arrow.svg"} fill alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
