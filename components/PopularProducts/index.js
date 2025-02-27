"use client";
import { bannersData } from "@/mock/bannersData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./popularProd.css";
const PopularProducts = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    i18n.changeLanguage(savedLanguage);
  }, []);
  return (
    <section className="popularProds">
      <div className="flex flex-wrap justify-center items-center w-[75%] mx-auto lg:flex lg:flex-row lg:flex-nowrap">
        {bannersData.map((product, index) => (
          <div
            key={index}
            data-key={index}
            className="product-box w-[250px] border border-gray-100 rounded-[8px] xlg:w-[250px]"
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
              <h1
                className="text-[26px] font-[300] w-[230px]"
                data-title={index}
              >
                {t(product.title)}
              </h1>
            </div>
            <div className="product-desc px-4 py-3">
              <p className="text-[#909090]" data-title={index}>
                {t(product.desc)}
              </p>
            </div>
            <div className="product-btn px-4 py-3">
              <Link href={"/smartphones"}>
                <button
                  className="bg-transparent border-2 border-black w-[140px] md:w-[140px] h-[35px] md:h-[40px] text-black hover:border-white transition duration-500 ease-linear"
                  data-button={index}
                >
                  {t("shopNow")}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
