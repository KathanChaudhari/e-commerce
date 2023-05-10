import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../redux/actions/wishlist";
import { backend_url } from "../../server";
import { addTocart } from "../../redux/actions/cart";

const Wishlist = ({ setOpenWishlist, openWishlist }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const removeFromWishlistHandler = (data) => {
    dispatch(removeFromWishlist(data));
  };

  const addToCartHandler = (data) => {
    const newData = {...data, qty:1};
    dispatch(addTocart(newData));
    setOpenWishlist(false);
  }

  return (
    <div
  className={`fixed top-0 left-0 bg-[#0000004b] h-screen z-10 transition-opacity duration-700 ${
    openWishlist ? "opacity-100" : "opacity-0 pointer-events-none"
  }`}
>
  <div className="fixed top-0 right-0 min-h-full w-3/5 900px:w-[25%] bg-[#75b5c9] flex flex-col justify-between shadow-sm">
    {wishlist && wishlist.length === 0 ? (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
          <RxCross1
            size={25}
            className="cursor-pointer"
            onClick={() => setOpenWishlist(false)}
          />
        </div>
        <h5>Wishlist Items is empty!</h5>
      </div>
    ) : (
      <>
        <div>
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => console.log("hello")}
            />
          </div>
          {/* Item length */}
          <div className={`${styles.noramlFlex} p-4`}>
            <AiOutlineHeart size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">
              {wishlist && wishlist.length} items
            </h5>
          </div>

          {/* cart Single Items */}
          <br />
          <div className="w-full border-t">
            {wishlist &&
              wishlist.map((i, index) => (
                <CartSingle
                  key={index}
                  data={i}
                  removeFromWishlistHandler={removeFromWishlistHandler}
                  addToCartHandler={addToCartHandler}
                />
              ))}
          </div>
        </div>
      </>
    )}
  </div>
</div>
  );
};

const CartSingle = ({ data,removeFromWishlistHandler,addToCartHandler }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.discountPrice * value;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center justify-between">
        <RxCross1 className="cursor-pointer text-xl"
        onClick={() => removeFromWishlistHandler(data)}
        />

        <div className="pl-[5px]">
        <img
          src={`${backend_url}${data?.images[0]}`}
          alt=""
          className="w-[130px] h-min ml-2 mr-2 rounded-[5px]"
        />
          <h1>{data.name}</h1>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#393d3f] font-Roboto">
          ₹{totalPrice}
          </h4>
        </div>
           <div>
          <BsCartPlus size={30} className="cursor-pointer " tile="Add to cart"
           onClick={() => addToCartHandler(data)}
          />
        </div>
        </div>
    </div>
  );
};

export default Wishlist;
