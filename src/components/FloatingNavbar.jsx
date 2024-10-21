import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FloatingNavbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavbarAnimation = (show) => {
    if (show) {
      gsap.to("#floating-navbar", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to("#floating-navbar", {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  };

  const checkScrollPosition = () => {
    const highlightSection = document.getElementById("highlights");
    if (!highlightSection) return;

    const highlightPosition = highlightSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    const highlightHeight = highlightSection.offsetHeight;

    const triggerPoint =
      highlightPosition <= screenHeight - highlightHeight / 2;

    setIsNavbarVisible(triggerPoint);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    checkScrollPosition();

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  useEffect(() => {
    handleNavbarAnimation(isNavbarVisible);
  }, [isNavbarVisible]);

  return (
    <header
      id="floating-navbar"
      className="fixed top-0 left-0 w-full bg-zinc z-50 py-3 px-5 md:px-10 flex justify-between items-center border-b border-[#4A4A4A]"
      style={{ transform: "translateY(-100%)", opacity: 0 }}
    >
      <div className="text-white text-xl font-bold md:ml-56">iPhone 16 Pro</div>

      {/* Desktop Navigation links and Buy Button */}
      <nav
        className="hidden md:flex gap-x-8 text-sm"
        style={{ fontSize: "0.75rem", marginRight: "230px" }}
      >
        <Link to="/" className="relative text-white">
          Overview
          <span className="absolute left-0 bottom-[-15px] w-full h-[0.1px] bg-white"></span>
        </Link>
        <Link to="/Switch" className="text-white">
          Switch from Android to iPhone
        </Link>
        <Link to="/Specs" className="text-white">
          Tech Specs
        </Link>
        <button
          className="bg-blue text-white rounded-full text-xs"
          style={{ padding: "4px 12px", fontSize: "0.75rem" }}
        >
          <Link to="/Iphone16Pro">Buy</Link>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className="flex items-center gap-3 ml-auto md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl"
          style={{ fontSize: "1.25rem", fontWeight: 100 }}
        >
          {isMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        <button
          className="bg-blue text-white rounded-full text-xs px-4 py-2"
          style={{ fontSize: "0.75rem" }}
        >
          <Link to="/Iphone16Pro">Buy</Link>
        </button>
      </div>

      {/* Mobile Navigation Links */}
      <nav
        className={`md:hidden absolute top-14 left-0 w-full bg-zinc text-sm flex flex-col gap-5 p-6 z-50 transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? "opacity-100 translate-y-0" : "hidden -translate-y-5"
        }`}
        style={{
          fontSize: "0.75rem",
          fontFamily: `"SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif`,
        }}
      >
        <Link to="/" className="text-gray-400 hover:text-white transition">
          | Overview
        </Link>
        <Link
          to="/Switch"
          className="text-gray-400 hover:text-white transition"
        >
          | Switch from Android to iPhone
        </Link>
        <Link to="/Specs" className="text-gray-400 hover:text-white transition">
          | Tech Specs
        </Link>
      </nav>
    </header>
  );
};

export default FloatingNavbar;
