import React from "react";
import "./summerSale.css";
import Image from "next/image";
import Notepad from "../../public/imgs/notepad.png";
import BlackWatch from "../../public/imgs/blackWatch.png";
import Notebook from "../../public/imgs/notebook.png";
import IPhonePro from "../../public/imgs/IPhonePro.png";
import GoldMacbook from "../../public/imgs/goldMacbook.png";
import ThirdButton from "@/pages/ThirdButton";
import Link from "next/link";

const SummerSale = () => {
  return (
    <section className="summer-sale xlg:h-[348px] h-[600px]">
      <div className="relative flex flex-col items-center justify-between xlg:flex-row xlg:justify-between xlg:items-center overflow-x-hidden h-[100%] overflow-y-hidden">
        <div className="left-banner">
          <div className="absolute left-0 top-28">
            <Image
              src={Notepad}
              unoptimized
              alt="notepad"
              width={300}
              height={200}
            />
          </div>
          <div className="absolute top-0 left-[2%]">
            <Image
              src={Notebook}
              unoptimized
              alt="notepad"
              width={200}
              height={140}
            />
          </div>
          <div className="absolute left-[20%] top-0 h-[100px] flex items-end overflow-hidden">
            <Image
              src={GoldMacbook}
              unoptimized
              alt="notepad"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="content">
          <span>
            <h1 className="text-white text-center text-[50px] font-[300]">
              Big Summer <strong>Sale</strong>
            </h1>
          </span>
          <p className="text-gray-400 text-[11px] text-center">
            Commodo fames vitae vitae leo mauris in. Eu consequat.
          </p>
          <div className="py-4 flex justify-center">
            <Link href={"/smartphones"}>
              <ThirdButton />
            </Link>
          </div>
        </div>
        <div className="right-banner overflow-hidden">
          <div className="absolute right-5 top-3">
            <Image
              src={IPhonePro}
              unoptimized
              alt="iphone"
              className="iphone-pro"
            />
          </div>
          <div className="absolute right-7">
            <Image
              src={BlackWatch}
              unoptimized
              alt="watch"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerSale;
