import React from 'react'

import { useState } from "react";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-30 bg-gradient-to-r from-primary-black to-dark-blue transition-all">
      
      {/* Logo */}
      <p className='text-5xl'>🛸</p>

      {/* Desktop Menu */}
      <ul className="text-primary-white md:flex hidden items-center gap-10">
        <li><a className="hover:text-primary-white/70 transition" href="#">Home</a></li>
        <li><a className="hover:text-primary-white/70 transition" href="#">Services</a></li>
        <li><a className="hover:text-primary-white/70 transition" href="#">Portfolio</a></li>
        <li><a className="hover:text-primary-white/70 transition" href="#">Pricing</a></li>
      </ul>

      {/* Desktop Button */}
      <button
        type="button"
        className="bg-primary-white text-primary-black md:inline hidden text-sm cursor-pointer hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full"
      >
        GET STARTED
      </button>

      {/* Mobile Menu Button */}
      <button
        aria-label="menu-btn"
        type="button"
        onClick={() => setMobileOpen(prev => !prev)}
        className="inline-block md:hidden active:scale-90 transition cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#fff">
          <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[70px] left-0 w-full bg-primary-black p-6 md:hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col space-y-4 text-primary-white text-lg">
          <li><a href="#" className="text-sm">Home</a></li>
          <li><a href="#" className="text-sm">Services</a></li>
          <li><a href="#" className="text-sm">Portfolio</a></li>
          <li><a href="#" className="text-sm">Pricing</a></li>
        </ul>

        <button
          type="button"
          className="bg-primary-white cursor-pointer text-primary-black mt-6 inline md:hidden text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full"
        >
          GET STARTED
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
