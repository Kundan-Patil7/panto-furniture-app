import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 z-20 w-full">
      <div className="lg:container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="logo_wrapper">
          <Link to={'/'}>
            <h3 className="text-4xl text-white font-extrabold tracking-wide transition duration-300 hover:text-orange-400">
              Panto
            </h3>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-10">
          <NavLink
            className="text-xl text-white font-semibold capitalize hover:text-orange-400 transition duration-300"
            to={'/furniture'}
          >
            Furniture
          </NavLink>
          <NavLink
            className="text-xl text-white font-semibold capitalize hover:text-orange-400 transition duration-300"
            to={'/shop'}
          >
            Shop
          </NavLink>
          <NavLink
            className="text-xl text-white font-semibold capitalize hover:text-orange-400 transition duration-300"
            to={'/about'}
          >
            About Us
          </NavLink>
          <NavLink
            className="text-xl text-white font-semibold capitalize hover:text-orange-400 transition duration-300"
            to={'/contact'}
          >
            Contact
          </NavLink>
        </nav>

        {/* Cart Icon */}
        <div className="header-right relative">
          <button className="relative flex items-center justify-center p-2 rounded-full transition duration-300">
            <FaCartArrowDown size="2rem" color="white" />
            <span className="cart-count absolute top-[-6px] right-[-6px] h-5 w-5 flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full">
              1
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
