import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

type Props = {};

export default function page({}: Props) {
  return (
    <div className=" w-[1100px] mx-auto">
      <Banner />
    </div>
  );
}
