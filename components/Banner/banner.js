import React from "react";
import "./banner.css";
import Image from "next/image";
import IPhone14 from "../../public/imgs/phones.png";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="banner flex justify-between items-center">
      <div className="banner-info">
        <p className="text-gray-500 font-[600] text-[25px]">Pro.Beyond.</p>
        <h1 className="text-white font-[200] text-[90px]">
          IPhone 14 <strong className="text-white font-bold">Pro</strong>
        </h1>
        <p className="text-gray-500 font-[500] text-[18px] long">
          Created to change everything for the better. For everyone
        </p>
        <div className="shop-btn">
          <Link href={"/smartphones"}>
            <button className="bg-inherit border-2 border-white w-[120px] h-[40px] text-white hover:border-black hover:text-green-400 transition 500ms ease-linear">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <div className="banner-img overflow-hidden flex items-start h-[350px]">
        <Image
          src={IPhone14}
          unoptimized
          style={{ objectFit: "cover" }}
          alt="iphone"
        />
      </div>
    </div>
  );
};

export default Banner;