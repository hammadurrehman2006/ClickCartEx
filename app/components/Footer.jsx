import React from "react";
import { assets } from "@/app/assets/assets";
import Image from "next/image";
import ccex from "@/app/assets/ccex.png";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image className="w-40 md:w-44" src={ccex} alt="logo" />
          <p className="mt-6 text-sm">
          Welcome to ClickCart Express, your go-to online destination where finding exactly what you need is always fast and easy. We're all about bringing a vast selection of products right to your fingertips, ensuring a seamless shopping experience from the moment you click to the speedy delivery at your door.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">About us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Contact us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+92 311 3675863</p>
              <p>contact@clickcart.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 © ClickCartex.com All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;