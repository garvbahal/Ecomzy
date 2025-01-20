import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between">
        <NavLink to="/">
          <img src=".../public/logo.png" />
        </NavLink>

        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <FaCartShopping />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
