import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { server } from "../server";

const SellerActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/shop/activation`, {
            activation_token,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            setError(true);
          });
      };
      sendRequest();
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <div className="flex flex-col">        
      
        <p className="text-3xl font-bold  text-[#62929E] my-10" >Your token is expired </p>
          <Link to="/shop-create" >
            <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-[#393d3F] hover:opacity-80"
              >
                create again!
              </button>
              </Link>
              </div>
      ) : (
        <div className="flex flex-col items-center justif-center">        
      
        <p className="text-3xl font-bold  text-[#62929E] my-10" >Your account is created Successfully </p>
          <Link to="/shop-login" >
            <button
                type="submit"
                className="group relative w-1/2 h-[40px] py-2 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-[#393d3F] hover:opacity-80"
              >
                Login Now!
              </button>
              </Link>
              </div>
      )}
    </div>
  );
};

export default SellerActivationPage;
