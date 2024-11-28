import React from "react";
import "./footer.css";
import Logo from "@/pages/Logo";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <section className="footer w-full bg-black text-white p-6 md:p-12 h-full lg:h-[400px]">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-around w-full lg:mx-auto lg:items-center p-4">
        <div className="w-full xlg:w-auto text-center xlg:text-left">
          <div className="flex justify-center lg:justify-start">
            <Logo />
          </div>
          <div className="mt-4">
            <p className="w-full md:w-[460px] text-center lg:text-left">
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than
            </p>
          </div>
        </div>
        <div className="w-full xlg:w-auto text-center xlg:text-left">
          <div className="font-semibold">Services</div>
          <ul className="list-none mt-2 mb-1 footer-list space-y-2 md:space-y-1">
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              Bonus Program
            </li>
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              Gift Cards
            </li>
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              Credit and Payment
            </li>
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              Service Contracts
            </li>
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              Non-cash account
            </li>
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              Payment
            </li>
          </ul>
        </div>
        <div className="w-full xlg:w-auto text-center xlg:text-left">
          <div className="font-semibold">Assistance to the buyer</div>
          <ul className="list-none mt-2 footer-list space-y-2 md:space-y-1">
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              Find an order
            </li>
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              Terms of delivery
            </li>
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              Exchange and return of goods
            </li>
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              Guarantee
            </li>
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              Frequently asked questions
            </li>
            <li className="text-sm md:text-base lg:text-lg py-1 md:py-0">
              Terms of use of the site
            </li>
          </ul>
        </div>
      </div>
      <div className="logos flex justify-center lg:justify-start gap-2 w-[90%] mx-auto">
        <div className="twitter">
          <FaTwitter />
        </div>
        <div className="facebook">
          <FaFacebookF />
        </div>
        <div className="tiktok">
          <FaTiktok />
        </div>
        <div className="instagram">
          <PiInstagramLogoFill />
        </div>
      </div>
    </section>
  );
};

export default Footer;
