import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

const FloatingNavbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the hamburger menu

  // GSAP animation function to show or hide the navbar
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

  // Function to toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the hamburger menu when the screen size increases beyond 800px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800 && isMenuOpen) {
        setIsMenuOpen(false); // Close the menu when screen size increases
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header
      id="floating-navbar"
      className="fixed top-0 left-0 w-full bg-zinc z-50 py-3 px-5 sm:px-10 flex justify-between items-center border-b border-[#4A4A4A]" // Reduced padding
      style={{ transform: "translateY(-100%)", opacity: 0 }}
    >
      <div className="text-white text-lg font-bold ml-56">iPhone 16 Pro</div> {/* Reduced font size */}
      
      {/* Hamburger Icon - Visible on screens smaller than 800px */}
      <div className="block lg:hidden text-white cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Navigation Links */}
      <nav
        className={`flex items-center gap-x-8 text-sm lg:flex ${
          isMenuOpen ? "flex flex-col absolute top-12 left-0 w-full bg-zinc-900 text-center" : "hidden lg:flex"
        }`}
        style={{ fontSize: "0.75rem", marginRight: "230px" }}
      >
        <Link to="/" className="relative text-white">
          Overview
          <span className="absolute left-0 bottom-[-15px] w-full bg-white"></span>
        </Link>
        <Link to="/Switch" className="text-white no-underline">
          Switch from Android to iPhone
        </Link>
        <Link to="/Specs" className="text-white no-underline">
          Tech Specs
        </Link>
        {/* Center the Buy button using flex properties */}
        <button
          className="bg-blue text-white rounded-full text-xs"
          style={{ padding: "4px 12px", fontSize: "0.75rem" }} // Keep original styling
        >
          <Link to="/Iphone16Pro" className="text-white no-underline">
            Buy
          </Link>
        </button>
      </nav>
    </header>
  );
};

export default FloatingNavbar;
