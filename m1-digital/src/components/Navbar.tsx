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
        <li><a className="hover:text-primary-white/70 transition cursor-pointer" href="#">Home</a></li>
        <li><a className="hover:text-primary-white/70 transition cursor-pointer" href="#">Services</a></li>
        <li><a className="hover:text-primary-white/70 transition cursor-pointer" href="#">Portfolio</a></li>
        <li><a className="hover:text-primary-white/70 transition cursor-pointer" href="#">Pricing</a></li>
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
        <ul className="flex flex-col items-center space-y-4 text-primary-white text-lg">
          <li className='cursor-pointer'><a href="#" className="text-sm cursor-pointer">Home</a></li>
          <li className='cursor-pointer'><a href="#" className="text-sm cursor-pointer">Services</a></li>
          <li className='cursor-pointer'><a href="#" className="text-sm cursor-pointer">Portfolio</a></li>
          <li className='cursor-pointer'><a href="#" className="text-sm ">Pricing</a></li>
          <li>          <a
            href="#"
            className="mt-4 rounded-2xl border-none inline-block border text-primary-black bg-primary-white px-8 py-3 uppercase tracking-wide"
          >
             GET STARTED
          </a></li>
        </ul>


      </div>
    </nav>
  );
};

export default Navbar;
