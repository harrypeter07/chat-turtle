// navbar.js
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white foxed *:top-0 left-0 w-full z-50 ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
              CHAT-TURTLE
              
              
       </Link>

        <button
          className="block md:hidden"
          onClick={toggleMenu}
        >
          {/* Hamburger icon */}
        </button>

        <nav className=" md:block">
          <ul className="flex space-x-4">
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link href="/forums" className="hover:text-gray-200">
              Forums 
            </Link>
            <Link href="/chat" className="hover:text-gray-200">
              User-Chat
            </Link>
            <li>
                <UserButton/>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
    </header>
  );
};

export default Navbar;