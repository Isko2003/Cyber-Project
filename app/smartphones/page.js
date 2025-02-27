"use client";
import Breadcrumb from "@/components/Breadcrumb/breadcrumb";
import React, { useEffect, useState } from "react";
import "./smartphones.css";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { smartPhonesData } from "@/mock/smartphonesData";
import samsungLogo from "../../public/imgs/samsungLogo.png";
import appleLogo from "../../public/imgs/appleLogo.jpeg";
import { useCart } from "react-use-cart";
import { productData } from "@/mock/productData";

const smartphones = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [showBrandMenu, setShowBrandMenu] = useState(false);
  const { addItem } = useCart();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      setUser(loggedInUser);
    }
  }, []);

  const handleAddToCart = (product) => {
    if (typeof window === "undefined") return;
    if (!user) return;

    const cartKey = `cart_${user.firstname}`;
    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem(cartKey, JSON.stringify(cart));

    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleMinPrice = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    setShowBrandMenu(false);
  };

  const handleBrandToggle = () => {
    setShowBrandMenu(!showBrandMenu);
  };

  const filteredPhones = smartPhonesData.filter((item) => {
    const price = parseFloat(item.price);
    const min = minPrice ? parseFloat(minPrice) : 0;
    const max = maxPrice ? parseFloat(maxPrice) : Infinity;

    const matchesPrice = price >= min && price <= max;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category ? item.category === category : true;
    const matchesColor = color ? item.color === color : true;
    const matchesBrand = selectedBrand ? item.brand === selectedBrand : true;

    return (
      matchesPrice &&
      matchesSearch &&
      matchesCategory &&
      matchesColor &&
      matchesBrand
    );
  });

  return (
    <>
      <Breadcrumb />
      <div className="py-4 flex justify-center w-[100%]">
        <input
          type="text"
          placeholder="Search"
          className="border-black border border-solid rounded-md outline-none p-1 w-[315px]"
          onChange={handleSearch}
          value={search}
        />
      </div>

      <section className="flex justify-around" id="products-wrapper">
        <div className="filter-section py-3">
          <div className="price-filter mb-3">
            <div className="min-price flex gap-2 items-center mb-4">
              <label htmlFor="min-price">Min Price</label>
              <input
                type="number"
                id="min-price"
                placeholder="Min Price"
                onChange={handleMinPrice}
                value={minPrice}
              />
            </div>
            <div className="max-price flex gap-2 items-center">
              <label htmlFor="max-price">Max Price</label>
              <input
                type="number"
                id="max-price"
                placeholder="Max Price"
                onChange={handleMaxPrice}
                value={maxPrice}
              />
            </div>
          </div>
          <div className="category-filter py-2">
            <select
              name="category-select"
              id="category-select"
              className="category-select border border-black border-solid outline-none rounded-sm p-1 w-[280px]"
              onChange={handleCategory}
              value={category}
            >
              <option value="">All</option>
              <option value="Smartphones">Smartphones</option>
              <option value="Cameras">Cameras</option>
              <option value="Watches">Watches</option>
              <option value="Headphones">Headphones</option>
            </select>
          </div>
          <div className="color-filter py-2">
            <select
              name="color-select"
              id="color-select"
              className="category-select border border-black border-solid outline-none rounded-sm p-1 w-[280px]"
              onChange={handleColor}
              value={color}
            >
              <option value="">All Colors</option>
              <option value="Black">Black</option>
              <option value="Deep Purple">Deep Purple</option>
              <option value="White">White</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
            </select>
          </div>
          <div className="brand-filter py-2">
            <div className="brand-selector" onClick={handleBrandToggle}>
              <p>{selectedBrand || "Choose Brand"}</p>
              <span className="arrow">{showBrandMenu ? "▲" : "▼"}</span>
            </div>
            {showBrandMenu && (
              <div className="brand-dropdown">
                <div
                  className="brand-item"
                  onClick={() => handleBrandSelect("Apple")}
                >
                  <Image src={appleLogo} alt="Apple" width={30} height={30} />
                  <span>Apple</span>
                </div>
                <div
                  className="brand-item"
                  onClick={() => handleBrandSelect("Samsung")}
                >
                  <Image
                    src={samsungLogo}
                    alt="Samsung"
                    width={30}
                    height={30}
                  />
                  <span>Samsung</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className={`${
            filteredPhones.length > 0
              ? "grid grid-cols-3 gap-4 justify-center items-center"
              : ""
          }`}
          id="products-grid"
        >
          {filteredPhones.length > 0 ? (
            filteredPhones.map((item, index) => (
              <div
                className="relative bg-gray-200 rounded-[8px] p-1 h-[270px]"
                key={index}
              >
                <Link href={`/product/${item.id}`} passHref>
                  <span className="absolute right-1 top-3">
                    <CiHeart className="text-xl cursor-pointer" />
                  </span>
                  <div className="product-img flex justify-center">
                    <img
                      src={item.img}
                      alt={item.title.slice(0, 6)}
                      width={120}
                      height={140}
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
                    Buy Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="nothing-found">
              Nothing found according to your search.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default smartphones;
