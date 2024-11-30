"use client";
import React from "react";
import "./discountClient.css";
import { useCart } from "react-use-cart";

const DiscountClient = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };
  return (
    <div className="product-detail-container">
      <div className="product-detail-wrapper">
        <div className="product-image-section">
          <img
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
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountClient;
