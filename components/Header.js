"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-2  bg-white sticky top-0 z-50">
      {/* Logo + Title */}
      <Link href="/">
        <div className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={90}
            height={90}
            className="w-24 h-24"
          />
          <span className="text-black text-2xl font-bold">Foodzy</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
        <Link href="/" className="relative group px-1 py-2">
          <span className="inline-block transition-all duration-300 hover:text-Primary hover:scale-105">
            Home
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-Primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/about" className="relative group px-1 py-2">
          <span className="inline-block transition-all duration-300 hover:text-Primary hover:scale-105">
            About
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-Primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/produits" className="relative group px-1 py-2">
          <span className="inline-block transition-all duration-300 hover:text-Primary hover:scale-105">
            Products
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-Primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/cart" className="relative group px-1 py-2">
          <span className="inline-block transition-all duration-300 hover:text-Primary hover:scale-105">
            Cart
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-Primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/login" className="relative group px-1 py-2">
          <span className="inline-block transition-all duration-300 hover:text-Primary hover:scale-105">
            Login
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-Primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </nav>
      {/* Mobile Call Button (Only visible on mobile) */}
      <p className="lg:flex  font-normal text-sm mr-2 hidden">
        +123 (456) 7890
      </p>

      {/* Mobile Hamburger Menu Toggle */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        <RxHamburgerMenu size={30} />
      </button>

      {/* Animated Mobile Menu */}
      <nav
        className={`fixed top-24 left-0 w-full shadow-md flex flex-col items-start gap-4 bg-white px-6 py-4 text-sm font-medium transition-all duration-300 ease-in-out z-50 lg:hidden ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <Link
          href="/"
          className="relative group"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="block transition-all duration-300 hover:text-Primary hover:scale-105">
            Home
          </span>
          <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-Primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/about"
          className="relative group"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="block transition-all duration-300 hover:text-Primary hover:scale-105">
            About
          </span>
          <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-Primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/produits"
          className="relative group"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="block transition-all duration-300 hover:text-Primary hover:scale-105">
            Products
          </span>
          <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-Primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/cart"
          className="relative group"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="block transition-all duration-300 hover:text-Primary hover:scale-105">
            Cart
          </span>
          <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-Primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/login"
          className="relative group"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="block transition-all duration-300 hover:text-Primary hover:scale-105">
            Login
          </span>
          <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-Primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <p className="font-normal text-sm pt-2 border-t">+123 (456) 7890</p>
      </nav>
    </header>
  );
};

export default Header;
