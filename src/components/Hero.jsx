import React, { useEffect, useState } from "react";
import gsap from "gsap";
import {
  heroVideo,
  smallHeroVideo,
  appleImg,
  bagImg,
  searchImg,
} from "../utils";
import { navData } from "../constants";
import appleIntelligenceImage from "./1.png";
import FloatingNavbar from "./FloatingNavbar";
import { Link } from "react-router-dom";

const HeroWithNavbar = () => {
  const [expandedNav, setExpandedNav] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useEffect(() => {
    gsap.to("#hero", { opacity: 1, delay: 4.7 });
    gsap.fromTo(
      "#image",
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 4.8 }
    );
    gsap.fromTo(
      "#cta",
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 4.8 }
    );
  }, []);

 const handleMouseEnter = (nav) => {
    setExpandedNav(nav);
    setHasAnimated(true);
  };
  
  const handleMouseLeave = () => {
    setExpandedNav(null);
  };

  
  return (
    <>
      <section className="w-full h-screen bg-black relative">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-95 object-cover"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

        <header className="w-full flex flex-col justify-between items-center relative z-20">
          <nav className="flex w-full screen-max-width items-center py-3 sm:px-10 px-5 bg-transparent">
            <Link to="/" ><img src={appleImg} alt="Apple" width={12} height={12} /></Link>
            <div className="flex justify-center max-sm:hidden">
              {navData.map((nav) => (
              <div
                key={nav.id}
                onMouseEnter={() => handleMouseEnter(nav.title)}
                className="relative text-sm cursor-pointer text-gray-200  transition-all"
              >
                <Link to={`/${nav.title}`} >
                <div
                  key={nav.id}
                  className="px-6 text-sm cursor-pointer text-gray-200  transition-all"
                >
                  {nav.title}
                </div>
                {expandedNav === nav.title && (
                 <div className={`fixed top-10 left-0 w-full h-full bg-black/20 backdrop-blur-lg
                   ${hasAnimated ? '' : 'animate-fade-in'}`}>
                   <div 
                     className={`absolute top-0 left-0 w-full bg-gray-950 shadow-lg
                       ${hasAnimated ? 'translate-y-0' : 'animate-slide-down'}`}
                     onMouseLeave={handleMouseLeave}
                   >
                     <div className="max-w-6xl mx-auto py-8 px-8 flex flex-col gap-4">
                       <div className="flex gap-32 text-white">
                         {nav.sections.map((section, index) => (
                           <div 
                             key={section.heading} 
                             className={`flex flex-col
                               ${hasAnimated ? '' : 'animate-content-fade'}`}
                             style={!hasAnimated ? { animationDelay: `${index * 0.1}s` } : {}}
                           >
                             <h3 className="font-semibold text-gray-200 text-xs mb-4">
                               {section.heading}
                             </h3>
                             <ul className="space-y-2">
                               {section.links.map((link) => (
                                 <li 
                                   key={link} 
                                   className={`cursor-pointer transition-colors
                                     ${index === 0 ? 'text-2xl font-bold' : 'text-xs'}
                                     ${hasAnimated ? '' : 'animate-content-fade'}`}
                                   style={!hasAnimated ? { animationDelay: `${(index * 0.1) + 0.1}s` } : {}}
                                 >
                                   {link}
                                 </li>
                               ))}
                             </ul> 
                           </div>
                         ))}
                       </div>
                       <div className="grid grid-cols-3 gap-8 text-white">
                         {nav.extra && nav.extra.length > 0 && (
                           <ul className="space-y-2">
                             {nav.extra.map((extra) => (
                               <li 
                                 key={extra} 
                                 className={`cursor-pointer transition-colors text-xs
                                   ${hasAnimated ? '' : 'animate-content-fade'}`}
                                 style={!hasAnimated ? { animationDelay: '0.3s' } : {}}
                               >
                                 {extra}
                               </li>
                             ))}
                           </ul>
                         )}
                       </div>
                     </div>
                   </div>
                 </div>
               )}
                </Link>
              </div>

              ))}
            </div>
            <div className="flex items-center gap-9">
              <img
                src={searchImg}
                alt="search"
                width={14}
                height={14}
                className="cursor-pointer"
              />
              <img
                src={bagImg}
                alt="bag"
                width={14}
                height={14}
                className="cursor-pointer"
              />
            </div>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="relative h-full w-full flex-center flex-col z-10">
          <div className="flex flex-col items-center">
            <p
              id="hero"
              className=" hero-title text-5xl font-semibold mb-4"
              style={{ color: "white" }}
            >
              iPhone 16 Pro
            </p>
            <img
              id="image"
              src={appleIntelligenceImage}
              alt="Built for Apple Intelligence"
              className="w-full max-w-4xl -mt-48 opacity-100"
            />
          </div>
          <div
            id="cta"
            className="flex flex-col items-center opacity-0 translate-y-80"
          >
            <a
              href="#highlights"
              className="btn bg-white text-black rounded-full text-lg font-medium mb-4 hover:bg-opacity-90 transition-all"
            >
              Buy
            </a>
            <p className="text-gray text-xl">From ₹119900.00*</p>
            <p className="text-gray text-xl">
              Apple Intelligence starting in US English later this year
            </p>
          </div>
        </div>
      </section>

      <FloatingNavbar />
    </>
  );
};

export default HeroWithNavbar;
