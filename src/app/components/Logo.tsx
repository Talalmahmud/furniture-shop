import Link from "next/link";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className=" text-[22px] xl:text-[28px] font-bold cursor-pointer">
      <Link href={"/"}>Logo</Link>
    </div>
  );
};

export default Logo;
