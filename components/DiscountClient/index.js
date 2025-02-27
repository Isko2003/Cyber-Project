"use client";
import React from "react";
import "./discountClient.css";
import { useCart } from "react-use-cart";

const DiscountClient = ({ product }) => {
  const { addItem } = useCart();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleAddToCart = () => {
    // addItem(product);
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
