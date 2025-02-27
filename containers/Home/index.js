"use client";
import Banner from "@/components/Banner/banner";
import Categories from "@/components/Categories/categories";
import DiscountProducts from "@/components/DiscountProducts";
import PopularProducts from "@/components/PopularProducts";
import ProductsList from "@/components/Products";
import SmallerBanners from "@/components/SmallerBanners";
import SummerSale from "@/components/SummerSale";
import React from "react";

const index = () => {
  return (
    <div>
      <Banner />
      <SmallerBanners />
      <Categories />
      <ProductsList />
      <PopularProducts />
      <DiscountProducts />
      <SummerSale />
    </div>
  );
};

export default index;
