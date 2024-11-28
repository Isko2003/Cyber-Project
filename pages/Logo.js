import React from "react";
import logo from "../public/imgs/whiteLogo.png";
import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
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
  );
};

export default Logo;
