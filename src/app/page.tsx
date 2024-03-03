import Image from "next/image";
import Hero from "./components/Hero";
import SubHero from "./components/SubHero";
import ProductCard from "./components/ProductCard";
import AdvertiseSection from "./components/AdvertiseSection";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" ">
      <Hero />
      <div className=" py-[20px]">
        <SubHero />
      </div>
      <div className=" flex flex-col justify-center items-center py-[16px]">
        <h1 className="  text-[24px] font-bold ">Our New Arrivals</h1>
        <p>Get your new product for new experience</p>
      </div>
      <div className=" w-[1100px] mx-auto flex flex-wrap gap-[16px]">
        <ProductCard />
        <ProductCard /> <ProductCard /> <ProductCard />
        <ProductCard /> <ProductCard /> <ProductCard />
        <ProductCard />
      </div>
      <div className="flex flex-col justify-center items-center py-[16px]">
        <Link href={"/products"}>
          {" "}
          <span className=" text-[14px] underline cursor-pointer  text-red-500">
            See more
          </span>
        </Link>
      </div>
      <AdvertiseSection />

      <div className=" flex flex-col justify-center items-center py-[16px]">
        <h1 className="  text-[24px] font-bold ">Our New Arrivals</h1>
        <p>Get your new product for new experience</p>
      </div>
      <div className=" w-[1100px] mx-auto flex flex-wrap gap-[16px]">
        <ProductCard />
        <ProductCard /> <ProductCard /> <ProductCard />
        <ProductCard /> <ProductCard /> <ProductCard />
        <ProductCard />
      </div>
      <div className="flex flex-col justify-center items-center py-[16px]">
        <span className=" text-[14px] underline cursor-pointer  text-red-500">
          See more
        </span>
      </div>
    </main>
  );
}
