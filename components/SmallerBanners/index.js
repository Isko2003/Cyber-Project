"use client";
import React, { useEffect } from "react";
import "./smallerbanners.css";
import Image from "next/image";
import PS5 from "../../public/imgs/playstation.png";
import Headphone from "../../public/imgs/headphone.png";
import Vrglass from "../../public/imgs/vrglass.png";
import Macbook from "../../public/imgs/macbook.png";
import SecondButton from "@/pages/SecondButton";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const SmallerBanners = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    i18n.changeLanguage(savedLanguage);
  }, []);
  return (
    <section className="banners flex flex-col lg:flex-row justify-between items-center p-4 lg:p-8">
      <div className="left-banners w-full lg:w-[50%] space-y-6 lg:space-y-8">
        {/* Main banner section */}
        <div className="main-banner flex flex-col lg:flex-row justify-between items-center gap-4">
          <div>
            <Image src={PS5} unoptimized width={300} height={200} alt="ps5" />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="font-semibold text-[28px] md:text-[36px] lg:text-[49px]">
              Playstation 5
            </h1>
            <p className="font-medium text-[12px] md:text-[14px] text-gray-500">
              {t("playstation5")}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 headphone-banner h-[280px] p-3 md:p-0 border rounded-lg">
            <div>
              <Image
                src={Headphone}
                unoptimized
                width={200}
                height={220}
                alt="headphone"
              />
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-medium text-[16px] w-auto md:w-[100px]">
                Apple Airpods <strong>Max</strong>
              </h4>
              <p className="font-medium text-[12px] md:text-[14px] text-gray-500">
                {t("airpods")}
              </p>
            </div>
          </div>

          {/* Apple Vision Pro */}
          <div className="flex flex-col md:flex-row justify-between vr-banner items-center h-[280px] p-3 md:p-0 border rounded-lg bg-black text-white gap-3">
            <div>
              <Image
                src={Vrglass}
                unoptimized
                width={200}
                height={220}
                alt="vr-glass"
              />
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-medium text-[16px] w-auto md:w-[80px]">
                Apple Vision <strong>Pro</strong>
              </h4>
              <p className="font-medium text-[12px] md:text-[14px] text-gray-400">
                {t("visionPro")}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* MacBook Air Section */}
      <div className="right-banners w-full lg:w-[50%] flex flex-col lg:flex-row items-center h-auto lg:h-[400px] mt-6 lg:mt-0 space-y-4 lg:space-y-0">
        <div className="banner-info text-center space-y-3 lg:space-y-4 px-4">
          <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-light">
            Macbook <strong>Air</strong>
          </h1>
          <p className="font-medium text-[12px] md:text-[14px]">
            {t("macbook")}
          </p>
          <div className="shop-btn">
            <Link href={"/smartphones"}>
              <button className="bg-transparent border-2 border-black w-[140px] md:w-[140px] h-[35px] md:h-[40px] text-black hover:border-white transition duration-500 ease-linear">
                {t("shopNow")}
              </button>
            </Link>
          </div>
        </div>
        <div className="macbook-img mt-4 lg:mt-0">
          <Image
            src={Macbook}
            unoptimized
            width={400}
            height={180}
            alt="macbook"
          />
        </div>
      </div>
    </section>
  );
};

export default SmallerBanners;
