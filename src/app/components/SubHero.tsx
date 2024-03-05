import Image from "next/image";
import React from "react";

type Props = {};

const SubHero = (props: Props) => {
  return (
    <div className=" flex w-[1100px] mx-auto items-center justify-between">
      <div className=" w-[518px] flex items-center justify-center h-[340px] bg-blue-500">
        <div className=" flex items-center justify-between">
          <div className=" flex flex-col gap-[32px] w-[300px]">
            <p>Shop your items. </p>
            <p className=" text-[18px] font-extrabold">
              This is the best place for shopping. You will get best shopping
              experience.
            </p>
            <div>
              <button className=" h-[30px] flex justify-center items-center text-[14px] px-[8px] py-[4px] bg-orange-500 text-white rounded-md">
                Shop now
              </button>
            </div>
          </div>
          <div className="h-[200px] w-[100px] relative overflow-auto">
            <Image src={"/assets/others/furniture.png"} fill alt="img" />
          </div>
        </div>
      </div>
      <div className=" w-[518px] flex items-center justify-center h-[340px] bg-blue-500">
        <div className=" flex items-center justify-between">
          <div className=" flex flex-col gap-[32px] w-[300px]">
            <p>Shop your items. </p>
            <p className=" text-[18px] font-extrabold">
              This is the best place for shopping. You will get best shopping
              experience.
            </p>
            <div>
              <button className=" h-[30px] flex justify-center items-center text-[14px] px-[8px] py-[4px] bg-orange-500 text-white rounded-md">
                Shop now
              </button>
            </div>
          </div>
          <div className="h-[200px] w-[100px] relative overflow-auto">
            <Image src={"/assets/others/furniture.png"} fill alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
