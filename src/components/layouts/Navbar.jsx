import { Link } from "react-router-dom"
import { navLists } from "../../constants"
import { appleImg, bagImg, searchImg } from "../../utils"
import { useState } from "react"
import { navData } from "../../constants";
const Navbar = () => {
const [expandedNav, setExpandedNav] = useState(null);
const [hasAnimated, setHasAnimated] = useState(false);
const handleMouseEnter = (nav) => {
    setExpandedNav(nav);
    setHasAnimated(true);
  };
  
  const handleMouseLeave = () => {
    setExpandedNav(null);
  };

  
return (

      
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

    )
}

export default Navbar
