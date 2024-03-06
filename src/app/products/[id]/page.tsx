import Product from "@/app/components/product/Product";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className=" w-[1100px] mx-auto">
      <Product />
    </div>
  );
};

export default page;
