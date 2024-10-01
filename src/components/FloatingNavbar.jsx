import React, { useEffect, useState } from "react";
import gsap from "gsap";

const FloatingNavbar = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    // GSAP animation function to show or hide the navbar
    const handleNavbarAnimation = (show) => {
        if (show) {
            gsap.to('#floating-navbar', { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' });
        } else {
            gsap.to('#floating-navbar', { y: '-100%', opacity: 0, duration: 0.5, ease: 'power2.in' });
        }
    };

    // Function to check scroll position and toggle navbar visibility
    const checkScrollPosition = () => {
        const highlightSection = document.getElementById("highlights");
        if (!highlightSection) return; // Prevent errors if section is not present

        const highlightPosition = highlightSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        const highlightHeight = highlightSection.offsetHeight;

        // Trigger point when the user has scrolled past half of the Highlights section
        const triggerPoint = highlightPosition <= screenHeight - (highlightHeight / 2);

        // Show or hide navbar based on scroll position
        setIsNavbarVisible(triggerPoint);
    };

    // Scroll detection to trigger navbar visibility
    useEffect(() => {
        window.addEventListener("scroll", checkScrollPosition);

        // Initial check on component mount
        checkScrollPosition();

        return () => {
            window.removeEventListener("scroll", checkScrollPosition);
        };
    }, []);

    // Trigger the GSAP animation when the state changes
    useEffect(() => {
        handleNavbarAnimation(isNavbarVisible);
    }, [isNavbarVisible]);

    return (
        <header
            id="floating-navbar"
            className="fixed top-0 left-0 w-full bg-zinc z-50 py-3 px-5 sm:px-10 flex justify-between items-center border-b border-[#4A4A4A]"
            style={{ transform: 'translateY(-100%)', opacity: 0 }} // Initially hidden
        >
            <div className="text-white text-xl font-bold ml-56">
                iPhone 16 Pro
            </div>

            <nav className="flex gap-x-8 text-sm" style={{ fontSize: '0.75rem', marginRight: '230px' }}>
                <a href="#overview" className="relative text-white">
                    Overview
                    {/* Thinner underline */}
                    <span className="absolute left-0 bottom-[-15px] w-full h-[0.1px] bg-white"></span>
                </a>
                <a href="#switch">Switch from Android to iPhone</a>
                <a href="#tech-specs">Tech Specs</a>
                <button className="bg-blue text-white rounded-full text-xs" style={{ padding: '4px 12px', fontSize: '0.75rem' }}>
                    Buy
                </button>
            </nav>
        </header>
    );
};

export default FloatingNavbar;
