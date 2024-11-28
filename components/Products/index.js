import React from "react";
import "./products.css";
import { productData } from "@/mock/productData";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import Button from "@/pages/Button";
import Link from "next/link";
const ProductsList = () => {
  return (
    <section className="py-10">
      <div className="w-[75%] mx-auto py-2">
        <div className="categories w-[330px] text-[15px] pb-2">
          <span className="cursor-pointer">
            <p>New Arrival</p>
            <div className="line w-20 h-[2px] bg-black"></div>
          </span>
          <span className="cursor-pointer">
            <p className="text-gray-600">Best Seller</p>
          </span>
          <span className="cursor-pointer">
            <p className="text-gray-600">Featured Products</p>
          </span>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {productData.map((item, index) => (
            <div
              className="relative bg-gray-200 rounded-[8px] p-1 h-[270px]"
              key={index}
            >
              <Link href={`/product/${item.id}`} passHref>
                <span className="absolute right-1 top-3">
                  <CiHeart className="text-xl cursor-pointer" />
                </span>
                <div className="product-img flex justify-center">
                  <Image
                    src={item.img}
                    unoptimized
                    alt={item.title.slice(0, 6)}
                    width={120}
                    height={140}
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

export default ProductsList;
