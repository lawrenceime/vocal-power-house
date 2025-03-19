"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    router.push('/contact')
  }

  return (
    <div className="fixed top-0 w-full h-16 bg-white text-black shadow-sm font-mono px-6 md:px-20 z-50">
      <div className="flex justify-between items-center h-full">
        <div>
          <Image alt="logo" src="/assets/VPH Logo 2-01.png" width={70} height={100}/>
        </div>

        {/* Hamburger Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links (Hidden on small screens) */}
        <div className="hidden md:flex gap-5">
          <div className="cursor-pointer hover:text-blue-500">About Us</div>
          <div className="cursor-pointer hover:text-blue-500">Contact</div>
          <div onClick={handleClick} className="cursor-pointer hover:text-blue-500">Register</div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 z-10 md:hidden">
          <div className="cursor-pointer hover:text-blue-500">About Us</div>
          <div className="cursor-pointer hover:text-blue-500">Contact</div>
          <div onClick={handleClick} className="cursor-pointer hover:text-blue-500">Register</div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
