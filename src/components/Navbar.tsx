"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-16 bg-white text-black shadow-sm font-mono px-6 md:px-20 relative">
      <div className="flex justify-between items-center h-full">
        <div>Logo</div>

        {/* Hamburger Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links (Hidden on small screens) */}
        <div className="hidden md:flex gap-5">
          <div className="cursor-pointer hover:text-blue-500">About Us</div>
          <div className="cursor-pointer hover:text-blue-500">Contact</div>
          <div className="cursor-pointer hover:text-blue-500">Register</div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
          <div className="cursor-pointer hover:text-blue-500">About Us</div>
          <div className="cursor-pointer hover:text-blue-500">Contact</div>
          <div className="cursor-pointer hover:text-blue-500">Register</div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
