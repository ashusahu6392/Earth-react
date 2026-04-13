import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";

const Footer = () => {
  const navStyle = ({ isActive }) =>
    isActive
      ? "text-green-600 font-semibold border-b-2 border-green-600 pb-1"
      : "text-gray-700 hover:text-green-600";

  return (
    <div className="w-full grid grid-cols-3 items-center px-18 py-10 bg-transparent z-50">

      {/* Navigation Links */}
      <div className="flex gap-10 text-lg font-medium justify-self-start">
        <NavLink to="/" className={navStyle}>
          Home
        </NavLink>

        <NavLink to="/about" className={navStyle}>
          About
        </NavLink>

        <NavLink to="/services" className={navStyle}>
          Services
        </NavLink>

        <NavLink to="/contact" className={navStyle}>
          Contact
        </NavLink>
      </div>

        {/* Logo */}
        <div className="justify-self-center">
          <img src={logo} alt="Earth Logo" className="h-5 w-20 bg-cover bg-center" />
        </div>

        <div className="justify-self-end">
        <p className="text-gray-500 text-sm">
          &copy; 2024 Earth. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;