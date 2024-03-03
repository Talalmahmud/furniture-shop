import Image from "next/image";
import React from "react";

type Props = {};

const AdvertiseSection = (props: Props) => {
  return (
    <div className=" h-[250px] w-full flex justify-center items-center  bg-pink-600/30  ">
      <div className=" w-[800px] mx-auto flex items-center justify-between">
        <h2 className=" text-[32px] font-bold w-[400px]">
          New things get now flavour. So don't be late
        </h2>

        <div className="h-[200px] w-[100px] relative overflow-auto">
          <Image src={"/assets/others/furniture.png"} fill alt="img" />
        </div>
      </div>
    </div>
  );
};

export default AdvertiseSection;
