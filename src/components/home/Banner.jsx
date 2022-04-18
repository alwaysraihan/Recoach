import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/images/bg.jpg";
const Banner = () => {
  const navigrate = useNavigate();
  return (
    <>
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="h-[50vh] lg:h-[70vh] bg-cover bg-center"
      >
        <div className="bg-teal-500 flex justify-start items-center w-[50%] px-3 md:px-[5%] h-full bg-opacity-50">
          <div>
            <h1 className="text-2xl md:text-4xl leading-7 md:leading-10 lg:leading-10 lg:text-6xl font-semibold text-white">
              Your Perfect
            </h1>
            <h1 className="text-2xl leading-6 md:leading-10 lg:leading-tight md:text-4xl lg:text-6xl font-semibold text-white">
              Health Coatch
            </h1>
            <p className=" text-teal-50  my-2 md:mt-2 md:mb-3  lg:mt-2 text-xs md:text-sm lg:text-xl lg:mb-5 ">
              You know that you need to make your health a priority so that you
              can chase your dreams and do so in a body you’re wild about
            </p>
            <button
              type="button"
              className=" text-white bg-green-700 hover:bg-green-800 foc font-medium rounded-full text-sm px-3 py-2 md:px-7  md:py-3.5  mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={() => navigrate("/contact")}
            >
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
