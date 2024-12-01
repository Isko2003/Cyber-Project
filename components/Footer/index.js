"use client";
import React, { useEffect } from "react";
import "./footer.css";
import Logo from "@/pages/Logo";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    i18n.changeLanguage(savedLanguage);
  }, []);
  return (
    <section className="footer w-full bg-black text-white p-6 md:p-12 h-full lg:h-[400px]">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-around w-full lg:mx-auto lg:items-center p-4">
        <div className="w-full xlg:w-auto text-center xlg:text-left">
          <div className="flex justify-center lg:justify-start">
            <Logo />
          </div>
          <div className="mt-4">
            <p className="w-full md:w-[460px] text-center lg:text-left">
              {t("residental")}
            </p>
          </div>
        </div>
        <div className="w-full xlg:w-auto text-center xlg:text-left">
          <div className="font-semibold">{t("services")}</div>
          <ul className="list-none mt-2 mb-1 footer-list space-y-2 md:space-y-1">
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              {t("bonus")}
            </li>
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              {t("gift")}
            </li>
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              {t("credit")}
            </li>
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              {t("contracts")}
            </li>
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              {t("nonCash")}
            </li>
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              {t("payment")}
            </li>
          </ul>
        </div>
        <div className="w-full xlg:w-auto text-center xlg:text-left">
          <div className="font-semibold">{t("assistance")}</div>
          <ul className="list-none mt-2 footer-list space-y-2 md:space-y-1">
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              {t("findOrder")}
            </li>
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              {t("delivery")}
            </li>
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              {t("exchange")}
            </li>
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              {t("guarantee")}
            </li>
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              {t("askedQuestions")}
            </li>
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              {t("terms")}
            </li>
          </ul>
        </div>
      </div>
      <div className="logos flex justify-center lg:justify-start gap-2 w-[90%] mx-auto">
        <div className="twitter">
          <FaTwitter />
        </div>
        <div className="facebook">
          <FaFacebookF />
        </div>
        <div className="tiktok">
          <FaTiktok />
        </div>
        <div className="instagram">
          <PiInstagramLogoFill />
        </div>
      </div>
    </section>
  );
};

export default Footer;
