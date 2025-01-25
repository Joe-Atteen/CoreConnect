import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute("id") || "";
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="background-light900_dark200 fixed z-50 w-full gap-5 p-6 py-3 shadow-light-300 dark:shadow-none sm:px-12 ">
      <div className="flex-between w-full max-w-[1400px] mx-auto">
        <Link
          href="/"
          className={`flex items-center gap-1 ${
            activeSection === "home" ? "active" : ""
          }`}
        >
          <Image
            src="/logo.png"
            width={150}
            height={0}
            alt="DevFlow Logo"
          />
        </Link>

        <div className="hidden md:flex gap-8 uppercase">
          <Link
            href="#about"
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </Link>
          <Link
            href="#services"
            className={activeSection === "services" ? "active" : ""}
          >
            Services
          </Link>
          <Link
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </Link>
        </div>

        <div className="flex-between gap-4 md:hidden">
          <MobileNavigation />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
