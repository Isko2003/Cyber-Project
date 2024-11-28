import React from "react";
import Image from "next/image";
import "./discountProduct.css";
import { discountProducts } from "@/mock/discountData";

const DiscountProducts = async ({ params }) => {
  const { id } = await params;
  const product = discountProducts.find((item) => item.id === parseInt(id));

  if (!product)
    return <div className="loading">Loading product details...</div>;

  return (
    <div className="product-detail-container">
      <div className="product-detail-wrapper">
        <div className="product-image-section">
          <Image
            src={product.img}
            alt={product.title}
            width={500}
            height={500}
            className="product-image"
          />
        </div>

        <div className="product-info-section">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-description">
            {product.description || "Detailed description is not available."}
          </p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default DiscountProducts;
