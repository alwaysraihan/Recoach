import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { XIcon, MenuIcon } from "@heroicons/react/solid";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className=" py-2 md:py-4 bg-gray-800 text-white">
        <div className="container  mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <Link to="/" className="font-bold text-xl text-indigo-600">
              FWR
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-6 transition delay-75 text-white md:hidden"
              id="navbar-toggle"
            >
              {menuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* <div
            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            
          > */}
          <nav
            className={`flex gap-6 md:ml-auto  justify-between md:justify-end items-center absolute w-full md:static flex-col md:flex-row transition delay-200 ease-in-out  z-10 bg-gray-800 ${
              menuOpen ? "top-[44px] left-0 w-full pb-5" : "top-[-500px]"
            }`}
          >
            <NavLink
              to="/"
              className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
            >
              Home
            </NavLink>
            <NavLink
              to="/"
              className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              About
            </NavLink>
            <NavLink
              to="/"
              className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Features
            </NavLink>
            <NavLink
              to="/"
              className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Pricing
            </NavLink>
            <NavLink
              to="/"
              className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Contact
            </NavLink>
            <NavLink
              to="/"
              className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
            >
              Login
            </NavLink>
            <NavLink
              to="/"
              className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
            >
              Signup
            </NavLink>
          </nav>
          {/* </div> */}
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
