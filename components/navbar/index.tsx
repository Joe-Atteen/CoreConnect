"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Track scroll position for navbar background
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.getAttribute("id") || "";
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHeroSection = activeSection === "/" || activeSection === "";

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="flex justify-between items-center w-full max-w-[1400px] mx-auto px-6 sm:px-12">
        <Link href="/" className="flex items-center gap-1 group">
          <Image
            src="/logo.png"
            width={140}
            height={40}
            alt="CoreConnect Logo"
            className={`transition-all duration-300 ${
              !scrolled && isHeroSection ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {[
            { href: "#about", label: "About" },
            { href: "#services", label: "Services" },
          ].map((link) => {
            const isActive = activeSection === link.href.slice(1);
            const isLight = !scrolled && isHeroSection;

            let linkClasses =
              "relative px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-200 rounded-full ";

            if (isActive) {
              linkClasses += isLight
                ? "text-white bg-white/15"
                : "text-[#eb0f53] bg-[#eb0f53]/5";
            } else {
              linkClasses += isLight
                ? "text-white/80 hover:text-white hover:bg-white/10"
                : "text-[#545454] hover:text-[#1a1a1a] hover:bg-[#f5f5f5]";
            }

            return (
              <Link key={link.href} href={link.href} className={linkClasses}>
                {link.label}
              </Link>
            );
          })}
          <Link
            href="#contact"
            className={`ml-4 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
              scrolled || !isHeroSection
                ? "bg-[#1a1a1a] text-white hover:bg-[#333]"
                : "bg-white text-[#1a1a1a] hover:bg-white/90"
            }`}
          >
            Get in touch
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <MobileNavigation isHeroSection={!scrolled && isHeroSection} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
