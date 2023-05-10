import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { categoriesData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const Wishlistref = useRef(null);
  const cartref = useRef(null)
  const menuref = useRef(null)

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (Wishlistref.current && !Wishlistref.current.contains(event.target)) {
        setOpenWishlist(false);
      }
      if (cartref.current && !cartref.current.contains(event.target)) {
        setOpenCart(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDown(false);
      }
      if (menuref.current && !menuref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
      return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [Wishlistref,cartref,dropdownRef,menuref]);

  return (
    <>
      <div
        className={`${
          active === true ? "shadow-md fixed top-0 left-0 z-10" : null
        } transition flex items-center  w-full bg-[#62929E] h-20`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          <div className="flex cursor-pointer 1100px:hidden" ref={menuref}>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
  
          <div
            className={`fixed z-20 h-full top-0 left-0  transition-opacity duration-400 ${
              open ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="fixed w-[60%] bg-[#75b5c9] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="my-8 w-[92%] m-auto h-[40px relative]">
              <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] pl-10 pr-2 w-full bg-white border-[#393d3F] border-2 bg-opacity-60 rounded-3xl focus:outline-none"
            />
                {searchData && (
                  <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
                    {searchData.map((i) => {
                      const d = i.name;

                      const Product_name = d.replace(/\s+/g, "-");
                      return (
                        <Link to={`/product/${Product_name}`}>
                          <div className="flex items-center">
                            <img
                              src={i.image_Url[0].url}
                              alt=""
                              className="w-[50px] mr-2"
                            />
                            <h5>{i.name}</h5>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Navbar active={activeHeading} />
              <div className={`${styles.button} ml-4 !rounded-[4px]`}>
                <Link to="/shop-create">
                  <h1 className="text-[#fff] flex items-center">
                    Become Seller <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>
              <br />
              <br />
              <br />

              <div className="flex w-full justify-center">
                {isAuthenticated ? (
                  <div>
                    <Link to="/profile">
                      <img
                        src={`${backend_url}${user.avatar}`}
                        alt=""
                        className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                      />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#000000b7]"
                    >
                      Login /
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-[18px] text-[#000000b7]"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          </div>
      
 
          <div className="w-10">
            <Link to="/">
              <img
                src="/logo192.png"
                alt=""
                width={30}
                height={30}
              />
            </Link>
          </div>
          
          {/* search box */}
          <div className="relative hidden 1300px:flex">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] pl-10 pr-2 bg-white bg-opacity-60 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#393d3F]"
            />

            <AiOutlineSearch
              size={30}
              className="absolute left-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    return (
                      <Link to={`/product/${i._id}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={`${backend_url}${i.images[0]}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>

          {/* navitems */}
          <div className={`${styles.noramlFlex} hidden 1100px:flex`}>
            <Navbar active={activeHeading} />
          </div>
          {/* categories */}
          <div ref={dropdownRef} className="hidden 1100px:flex">
            <div ref={dropdownRef}>
              <div className="relative flex items-center h-[60px]  1100px:block">
                <button
                  onClick={toggleDropDown}
                  className={`h-[100%] flex justify-between items-center font-sans text-slate-50 text-lg font-[500] select-none rounded-t-md`}
                >
                  All Categories
                </button>
                {dropDown ? (
                  <IoIosArrowUp
                    size={20}
                    className="absolute -right-8 top-6 text-slate-50 mx-2 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropDown();
                    }}
                  />
                ) : (
                  <IoIosArrowDown
                    size={20}
                    className="absolute -right-8 top-6 mx-2 text-slate-50 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropDown();
                    }}
                  />
                )}
                
              </div>

              <div className="relative -left-16">
                {dropDown && (
                  <DropDown
                    categoriesData={categoriesData}
                    setDropDown={setDropDown}
                  />
                )}
              </div>
            </div>
          {/* seller Login */}

            {/* {isSeller && (
              <div className={`${styles.button}`}>
                <Link to={`${isSeller ? "/dashboard" : "/shop-create"}`}>
                  <h1 className="text-[#fff] flex items-center">
                    {isSeller ? "Go Dashboard" : "Become Seller"}{" "}
                    <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>
            )} */}
          </div>

          {/* PROFILE, Shop-Cart, wishlist,  */}
          <div className="flex space-x-4 mr-0">
          <div ref={Wishlistref} className={`${styles.noramlFlex}`}>
            <div
              className="relative cursor-pointer mr-[15px]"
              onClick={() => setOpenWishlist(true)}
            >
              <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
              <span className="absolute right-0 top-0 rounded-full bg-[#393D3F] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                {wishlist && wishlist.length}
              </span>
            </div>
             <Wishlist setOpenWishlist={setOpenWishlist} openWishlist={openWishlist} />
          </div>
          <div ref={cartref} className={`${styles.noramlFlex}`}>
            <div
              className="relative cursor-pointer mr-[15px]"
              onClick={() => setOpenCart(true)}
            >
               <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%)"
                />
              <span className="absolute right-0 top-0 rounded-full bg-[#393D3F] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
            </div>
             <Cart setOpenCart={setOpenCart} openCart={openCart}/>
          </div>
          <div className={`${styles.noramlFlex} hidden 1100px:flex`}>
            <div className="relative cursor-pointer mr-[15px]">
              {isAuthenticated ? (
                <Link to="/profile">
                  <img
                    src={`${backend_url}${user.avatar}`}
                    className="w-[35px] h-[35px] rounded-full"
                    alt=""
                  />
                </Link>
              ) : (
                <Link to="/login">
                  <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                </Link>
              )}
            </div>
          </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;
