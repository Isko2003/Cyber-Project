"use client";
import "./basket.css";
import React, { useEffect, useState } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const { isEmpty, items, totalUniqueItems, removeItem, updateItemQuantity } =
    useCart();

  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const resolvedItems = items.map((item) => ({
    ...item,
    img:
      typeof item.img === "string"
        ? item.img.startsWith("/imgs")
          ? item.img
          : `/imgs${item.img}`
        : item.img.src,
  }));

  if (!isHydrated) {
    return (
      <div className="loading h-[300px]">
        <div className="spinner"></div>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="text-center p-10">
        <h2 className="text-2xl font-semibold">{t("cartEmpty")}</h2>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">{t("shoppingCart")}</h2>

      <div className="space-y-8">
        {resolvedItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-6 mb-6"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  className="text-xl text-gray-500 hover:text-gray-700"
                >
                  <FaMinusCircle />
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  className="text-xl text-gray-500 hover:text-gray-700"
                >
                  <FaPlusCircle />
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold text-gray-900">
                  ${item.price * item.quantity}
                </span>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <MdRemoveShoppingCart className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-10 border-t pt-6">
        <div>
          <h3 className="text-xl font-semibold">
            {t("totalItems")}: {totalUniqueItems}
          </h3>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md text-lg hover:bg-blue-600">
            {t("checkout")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
