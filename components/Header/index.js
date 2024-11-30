"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/imgs/logo.png";
import "./header.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { IoMdPhonePortrait } from "react-icons/io";
import { useCart } from "react-use-cart";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const { totalUniqueItems } = useCart();

  useEffect(() => {
    setTotalItems(totalUniqueItems);
  }, [totalUniqueItems]);

  return (
    <div className="pt-[70px] bg-white">
      <div className="w-[85%] mx-auto h-[70px] pt-[20px] flex items-center justify-between header fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="logo">
          <Link href={"/"}>
            <Image
              unoptimized
              src={logo}
              alt="logo"
              className="logo cursor-pointer"
              width={70}
            />
          </Link>
        </div>
        <div className="search-field relative hidden lg:flex">
          <input
            type="text"
            placeholder="Search"
            className="search-input outline-none rounded-[8px] p-[7px] w-[300px] h-[40px] z-[1]"
          />
          <div className="absolute top-3 left-[7px] text-white magn-glass">
            <FaMagnifyingGlass />
          </div>
        </div>
        <div className="routes flex gap-[15px] items-center hidden lg:flex">
          <div>
            <Link
              href={"/"}
              className={pathname === "/" ? "link" : "text-inherit"}
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              href={"/about"}
              className={pathname === "/about" ? "link" : "text-inherit"}
            >
              About
            </Link>
          </div>
          <div>
            <Link
              href={"/contact"}
              className={pathname === "/contact" ? "link" : "text-inherit"}
            >
              Contact Us
            </Link>
          </div>
          <div>
            <Link
              href={"/blog"}
              className={pathname === "/blog" ? "link" : "text-inherit"}
            >
              Blog
            </Link>
          </div>
        </div>
        <div className="icons flex gap-[10px] hidden lg:flex">
          <div>
            <CiHeart className="icon text-2xl cursor-pointer" />
          </div>
          <Link href={"/basket"}>
            <div className="relative">
              <MdOutlineShoppingCart className="icon text-2xl cursor-pointer" />
              <span className="absolute top-[-17px] right-[-8px] bg-yellow-600 rounded-full p-0 m-0 w-[18px] text-center">
                {totalItems}
              </span>
            </div>
          </Link>
          <Link href={"/register"}>
            <div>
              <FiUser className="icon text-2xl cursor-pointer" />
            </div>
          </Link>
        </div>
        {/* HAMBURGER MENU */}
        <div
          className="hamburger-menu lg:hidden cursor-pointer flex flex-col gap-[4px]"
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        {menuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center gap-6 text-white z-50 lg:hidden">
            <Link href={"/"} onClick={toggleMenu} className="text-2xl">
              Home
            </Link>
            <Link href={"/about"} onClick={toggleMenu} className="text-2xl">
              About
            </Link>
            <Link href={"/contact"} onClick={toggleMenu} className="text-2xl">
              Contact Us
            </Link>
            <Link href={"/blog"} onClick={toggleMenu} className="text-2xl">
              Blog
            </Link>
            <div className="icons flex gap-[20px]">
              <CiHeart className="icon text-3xl cursor-pointer" />
              <MdOutlineShoppingCart className="icon text-3xl cursor-pointer" />
              <FiUser className="icon text-3xl cursor-pointer" />
            </div>
          </div>
        )}
      </div>
      <section className="subnav">
        <div className="w-[75%] mx-auto flex items-center justify-around h-[40px]">
          <div className="flex items-center">
            <IoMdPhonePortrait className="text-gray-500" />
            <Link className="text-gray-500" href={"#"}>
              Phones
            </Link>
          </div>
          <div>
            <span>|</span>
          </div>
          <div className="flex items-center">
            <IoMdPhonePortrait className="text-gray-500" />
            <Link className="text-gray-500" href={"#"}>
              Computers
            </Link>
          </div>
          <div>
            <span>|</span>
          </div>
          <div className="flex items-center">
            <IoMdPhonePortrait className="text-gray-500" />
            <Link className="text-gray-500" href={"#"}>
              Smart Watches
            </Link>
          </div>
          <div>
            <span>|</span>
          </div>
          <div className="flex items-center">
            <IoMdPhonePortrait className="text-gray-500" />
            <Link className="text-gray-500" href={"#"}>
              Cameras
            </Link>
          </div>
          <div>
            <span>|</span>
          </div>
          <div className="flex items-center">
            <IoMdPhonePortrait className="text-gray-500" />
            <Link className="text-gray-500" href={"#"}>
              Headphones
            </Link>
          </div>
          <div>
            <span>|</span>
          </div>
          <div className="flex items-center">
            <IoMdPhonePortrait className="text-gray-500" />
            <Link className="text-gray-500" href={"#"}>
              Gaming
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
