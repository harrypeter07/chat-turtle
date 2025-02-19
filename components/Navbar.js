"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import gsap from 'gsap';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    // Initial animation
    gsap.from(logoRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(linksRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Animate mobile menu
    gsap.to(".mobile-menu", {
      height: isMenuOpen ? "0%" : "auto",
      duration: 0.5,
      ease: "power3.inOut"
    });
  };

  return (
   
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white fixed top-0 left-0 w-full z-50 shadow-lg border-b-[2px] border-white/30">
    <div className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <Link 
          href="/" 
          ref={logoRef}
          className="font-bold text-2xl tracking-tight group"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 group-hover:from-blue-100 group-hover:to-white transition-all duration-300">
            CHAT-TURTLE
          </span>
        </Link>
  
        {/* Hamburger button */}
        <button
          className="block md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 border border-white/20"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
  
        {/* Desktop menu */}
        <nav className="hidden md:block" ref={navRef}>
          <ul className="flex items-center space-x-8">
            {[
              { href: "/", text: "Home" },
              { href: "/forums", text: "Forums" },
              { href: "/chat", text: "User-Chat" },
            ].map((link, index) => (
              <li key={link.href} ref={el => linksRef.current[index] = el}>
                <Link 
                  href={link.href} 
                  className="relative py-2 px-1 hover:text-white transition-colors duration-200 group"
                >
                  {link.text}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
            <li ref={el => linksRef.current[3] = el} className="ml-4">
              <UserButton afterSignOutUrl="/" />
            </li>
          </ul>
        </nav>
      </div>
  
      {/* Mobile menu */}
      <div className={`mobile-menu md:hidden overflow-hidden h-0 transition-all duration-300 border-t border-white/20 ${isMenuOpen ? 'mt-4' : ''}`}>
        <nav className="py-4">
          <ul className="flex flex-col space-y-4">
            {[
              { href: "/", text: "Home" },
              { href: "/forums", text: "Forums" },
              { href: "/chat", text: "User-Chat" },
            ].map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="block py-2 px-4 hover:bg-white/10 rounded-lg transition-colors duration-200 border border-transparent hover:border-white/20"
                  onClick={toggleMenu}
                >
                  {link.text}
                </Link>
              </li>
            ))}
            <li className="px-4">
              <UserButton afterSignOutUrl="/" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  
   
  );
};

export default Navbar;