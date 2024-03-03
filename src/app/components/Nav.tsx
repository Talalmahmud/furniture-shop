import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className=" h-[75px] xl:h-[98px] w-[100%] bg-white flex justify-center items-center sticky z-40 top-0 left-0 border-b-2">
      <div className=" w-[736px] xl:w-[1100px] mx-auto flex items-center justify-between">
        <Logo />
        <div className=" hidden md:flex items-center gap-8 text-[14px] xl:text-[18px]">
          <Link href={"/"}>
            <div className=" flex gap-2">
              <div>
                <span>Home</span>
              </div>
              <Image
                src={"/icons/dropdown.svg"}
                height={24}
                width={20}
                alt="cart-img"
              />
            </div>
          </Link>
          <Link href={"/"}>
            <span>Shop</span>
          </Link>
          <Link href={"/"}>
            <span>About</span>
          </Link>
          <Link href={"/"}>
            <span>Contact</span>
          </Link>
          <Link href={"/"}>
            <span>Blog</span>
          </Link>
          <Link href={"/"}>
            <span>Team</span>
          </Link>
        </div>
        <div className=" hidden md:flex items-center gap-4">
          <div>
            <Image
              src={"/icons/search-bar.svg"}
              height={24}
              width={24}
              alt="cart-img"
            />
          </div>

          <div>
            <Image
              src={"/icons/profile.svg"}
              height={24}
              width={24}
              alt="cart-img"
            />
          </div>
          <div className=" relative ">
            <Image
              src={"/icons/cart.svg"}
              height={24}
              width={24}
              alt="cart-img"
            />
            <p className=" absolute top-0 -right-1 rounded-full h-[8px] w-[8px] bg-red-500"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
