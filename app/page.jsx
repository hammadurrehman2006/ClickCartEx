'use client'
import React from "react";
import HeaderSlider from "@/app/cart/components/HeaderSlider";
import HomeProducts from "@/app/cart/components/HomeProducts";
import NewsLetter from "@/app/cart/components/NewsLetter";
import FeaturedProduct from "@/app/cart/components/FeaturedProduct";
import Footer from "@/app/cart/components/Footer";
import Navbar from "./cart/components/Navbar";
import Banner from "./cart/components/Banner";

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider />
        <HomeProducts />
        <FeaturedProduct />
        <Banner />
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
};

export default Home;
