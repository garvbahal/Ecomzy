import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <img src="../logo.png" className="h-14" />
        </NavLink>

        <div className="flex items-center space-x-6 text-slate-100 font-medium mr-5">
          <NavLink
            to="/"
            className="cursor-pointer hover:text-green-400 transition-all duration-300 ease-in"
          >
            <p>Home</p>
          </NavLink>
          <NavLink
            to="/cart"
            className="text-2xl relative cursor-pointer hover:text-green-400 transtion-all duration-200"
          >
            <FaCartShopping />
            {cart.length > 0 && (
              <span className="absolute bg-green-600 text-xs w-5 h-5 flex justify-center items-center -top-1 -right-2 rounded-full animate-bounce text-white">
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
