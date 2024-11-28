import { bannersData } from "@/mock/bannersData";
import SecondButton from "@/pages/SecondButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const PopularProducts = () => {
  return (
    <section>
      <div className="flex flex-wrap justify-center items-center w-[75%] mx-auto lg:flex lg:flex-row lg:flex-nowrap">
        {bannersData.map((product, index) => (
          <div
            key={index}
            className="product-box w-[300px] border border-gray-100 rounded-[8px] xlg:w-[250px]"
          >
            <div className="product-img h-[170px] flex justify-center">
              <Image
                src={product.img}
                unoptimized
                alt={product.title}
                width={120}
                height={120}
              />
            </div>
            <div className="product-title px-4 py-3">
              <h1 className="text-[30px] font-[300] w-[226px]">
                {product.title}
              </h1>
            </div>
            <div className="product-desc px-4 py-3">
              <p className="text-[#909090]">{product.desc}</p>
            </div>
            <div className="product-btn px-4 py-3">
              <Link href={"/smartphones"}>
                <SecondButton />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
