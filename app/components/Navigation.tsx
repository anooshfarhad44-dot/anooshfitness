"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "./Icons";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#calculators", label: "Calculators" },
    { href: "#transformations", label: "Transformations" },
    { href: "#competition-prep", label: "Competition Prep" },
    { href: "#championship", label: "Championship" },
    { href: "#certifications", label: "Certifications" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-4" : "py-6 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Anoosh Fitness logo"
              width={104}
              height={104}
              priority
              className="h-[4.5rem] w-[4.5rem] rounded-full object-cover ring-1 ring-[#c9a84c]/35 md:h-24 md:w-24"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-gray-400 hover:text-[#c9a84c] transition-colors text-sm lg:text-base"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="gold-btn px-4 lg:px-6 py-2 rounded-full text-sm lg:text-base">Start Now</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#333] pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-gray-400 hover:text-[#c9a84c] transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a href="#achievements" onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-[#c9a84c] transition-colors py-2">Achievements</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="gold-btn px-6 py-3 rounded-full text-center mt-2">Start Now</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
