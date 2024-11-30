import React from "react";
import { discountProducts } from "@/mock/discountData";
import DiscountClient from "@/components/DiscountClient";

const DiscountProducts = async ({ params }) => {
  const { id } = await params;
  const product = discountProducts.find((item) => item.id === parseInt(id));

  if (!product)
    return <div className="loading">Loading product details...</div>;

  return <DiscountClient product={product} />;
};

export default DiscountProducts;
