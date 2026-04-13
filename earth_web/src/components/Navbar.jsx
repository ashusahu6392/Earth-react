import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const navStyle = ({ isActive }) =>
    isActive
      ? "text-green-600 font-semibold border-b-2 border-green-600 pb-1"
      : "text-gray-700 hover:text-green-600";

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between px-18 py-10 bg-transparent z-50">
      {/* Logo */}
      <div>
        <img src={logo} alt="Earth Logo" className="h-5 w-20 bg-cover bg-center" />
      </div>

      {/* Navigation Links */}
      <div className="flex gap-10 text-lg font-medium">
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
    </div>
  );
};

export default Navbar;