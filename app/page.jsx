'use client'
import React from "react";
import HeaderSlider from "@/app/components/HeaderSlider";
import HomeProducts from "@/app/components/HomeProducts";
import NewsLetter from "@/app/components/NewsLetter";
import FeaturedProduct from "@/app/components/FeaturedProduct";
import Footer from "@/app/components/Footer";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

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
