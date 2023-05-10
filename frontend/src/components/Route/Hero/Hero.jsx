import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { useSelector } from "react-redux";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  const { isSeller } = useSelector((state) => state.seller);

  return (
    <div
      className={`relative flex min-h-screen max-w-screen mx-4 600px:mx-20 bg-no-repeat `}
    >
      {/* style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }} */}
     
      <div className={`${styles.section} 600px:justify-center flex flex-col 800px:w-[60%]`}>
        <h1
          className={` leading-[1.2] text-5xl md:w-[70%] text-white opacity-80  1100px:text-7xl font-semibold capitalize`}
        >
          Best Collection for home Decoration
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins]  text-white opacity-40">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaqueexercitationem labore vel, dolore
          quidem asperiores,("")
        </p>
        <div className="flex flex-col 600px:flex-row 600px:space-x-4 800px:items-center mt-5">
          <div className={`${styles.button} `}>
            <Link to="/products" className="inline-block">
            <h1 className="text-[#fff] flex font-semibold items-center"> Shop Now</h1>     
            </Link>
          </div>
        <div className={`${styles.button} `}>
                <Link to={`${isSeller ? "/dashboard" : "/shop-create"}`}>
                  <h1 className="text-[#fff] flex font-semibold  items-center ">
                    {isSeller ? "Go Dashboard" : "Become Seller"}{" "}
                    <IoIosArrowForward className="mt-1"  />
                  </h1>
                </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 hidden md:flex justify-center items-center">
        <img src="/e-commerce.png" height={600} width={600} />
      </div>
    </div>
  );
};

export default Hero;
