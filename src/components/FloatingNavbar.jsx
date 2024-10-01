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

    // Scroll detection to trigger navbar visibility
    useEffect(() => {
        const handleScroll = () => {
            const highlightSection = document.getElementById("highlights");
            const highlightPosition = highlightSection.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            const highlightHeight = highlightSection.offsetHeight;

            // Trigger point when the user has scrolled past half of the Highlights section
            const triggerPoint = highlightPosition <= screenHeight - (highlightHeight / 2);

            // Show or hide navbar based on scroll position
            if (triggerPoint) {
                setIsNavbarVisible(true);
            } else {
                setIsNavbarVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Trigger the GSAP animation when the state changes
    useEffect(() => {
        handleNavbarAnimation(isNavbarVisible);
    }, [isNavbarVisible]);

    return (
        <header
            id="floating-navbar"
            className="fixed top-0 left-0 w-full bg-zinc z-50 py-3 px-5 sm:px-10 flex justify-between items-center opacity-0 border-b border-[#4A4A4A]"
        >
            <div className="text-white text-lg font-semibold ml-64">
                iPhone 16 Pro
            </div>

            <nav className="flex gap-x-8 text-sm" style={{fontSize:'0.75rem'}}>
                <a href="#overview" className=" text-white border-b-2">Overview</a>
                <a href="#switch">Switch from Android to iPhone</a>
                <a href="#tech-specs">Tech Specs</a>
            </nav>

            <div>
            <a href="#highlights" className="btn bg-white text-white rounded-full text-xs hover:bg-opacity-90 transition-all" style={{ padding: '4px 12px', fontSize: '0.75rem' }}>Buy</a>
            </div>
        </header>
    );
};

export default FloatingNavbar;