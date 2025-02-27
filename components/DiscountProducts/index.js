"use client";
import React, { useEffect } from "react";
import "./discountProducts.css";
import { CiHeart } from "react-icons/ci";
import { discountProducts } from "@/mock/discountData";
import Link from "next/link";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";
const DiscountProducts = () => {
  const { addItem } = useCart();
  const { t, i18n } = useTranslation();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    i18n.changeLanguage(savedLanguage);
  }, []);

  const handleAddToCart = (product) => {
    if (!user) return;
    const cart =
      JSON.parse(localStorage.getItem(`cart_${user.firstname}`)) || [];
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem(`cart_${user.firstname}`, JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <section className="py-10">
      <div className="w-[75%] mx-auto py-2">
        <div className="categories text-[15px] pb-3">
          <span>
            <p>{t("discount")}</p>
          </span>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {discountProducts.map((item, index) => (
            <div
              className="relative bg-gray-200 rounded-[8px] p-1 h-[300px]"
              key={index}
            >
              <Link href={`discountProduct/${item.id}`}>
                <span className="absolute right-1 top-3">
                  <CiHeart className="text-xl cursor-pointer" />
                </span>
                <div className="product-img flex justify-center">
                  <img
                    src={item.img}
                    alt={item.title.slice(0, 6)}
                    width={120}
                    height={160}
                    className="py-5"
                  />
                </div>
                <div className="w-[230px] h-[50px] flex justify-center items-center text-center">
                  <p className="truncate">{item.title}</p>
                </div>
                <div className="w-[230px] flex justify-center">
                  <p>${item.price}</p>
                </div>
              </Link>
              <div className="align-bottom flex justify-center">
                <button
                  className="w-[130px] h-[40px] bg-black rounded-[8px] text-white p-3 hover:bg-slate-300 hover:text-black"
                  onClick={() => handleAddToCart(item)}
                >
                  {t("buyNow")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscountProducts;
