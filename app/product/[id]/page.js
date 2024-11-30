import { productData } from "@/mock/productData";
import React from "react";
import ProductClient from "@/components/ProductClient";

const ProductDetail = ({ params }) => {
  const { id } = params;
  const product = productData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="loading">Loading product details...</div>;
  }

  return <ProductClient product={product} />;
};

export default ProductDetail;
