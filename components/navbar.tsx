"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "./assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-transparent backdrop-blur-md shadow-sm fixed w-full z-50 transition-all border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            height={40}
            width={40}
            className="h-10 w-auto object-contain cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>

        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="hover:text-blue-300 relative group transition-colors duration-300"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        <div
          className="md:hidden cursor-pointer text-white hover:text-blue-400 transition"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      <div
        className={`md:hidden absolute w-full bg-black/90 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[300px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={toggleMenu}
              className="block px-3 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all font-medium"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
