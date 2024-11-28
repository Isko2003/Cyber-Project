import React from "react";
import "./discountProducts.css";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import Button from "@/pages/Button";
import { discountProducts } from "@/mock/discountData";
import Link from "next/link";
const DiscountProducts = () => {
  return (
    <section className="py-10">
      <div className="w-[75%] mx-auto py-2">
        <div className="categories text-[15px] pb-3">
          <span>
            <p>Discounts up to -50%</p>
          </span>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {discountProducts.map((item, index) => (
            <div
              className="relative bg-gray-200 rounded-[8px] p-1 h-[270px]"
              key={index}
            >
              <Link href={`discountProduct/${item.id}`}>
                <span className="absolute right-1 top-3">
                  <CiHeart className="text-xl cursor-pointer" />
                </span>
                <div className="product-img flex justify-center">
                  <Image
                    src={item.img}
                    unoptimized
                    alt={item.title.slice(0, 6)}
                    width={120}
                    height={120}
                  />
                </div>
                <div className="w-[230px] h-[50px] flex justify-center items-center text-center">
                  <p className="truncate">{item.title}</p>
                </div>
                <div className="w-[230px] flex justify-center">
                  <p>${item.price}</p>
                </div>
                <div className="align-bottom flex justify-center">
                  <Button />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscountProducts;
