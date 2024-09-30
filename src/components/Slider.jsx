import React, { useRef, useState, useEffect } from 'react';
import { ic1Img, ic2Img, ic3Img, ic4Img } from "../utils/index";

const Slider = () => {
  const scrollRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScroll = (e) => {
    if (scrollRef.current && e.deltaY !== 0 && e.shiftKey) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -532 : 532; // Adjust based on image width
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition(); // Initial check
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        onWheel={handleScroll}
        className="relative overflow-x-auto w-full mx-auto flex scrollbar-hide"
        style={{
          overflowY: 'hidden',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          borderRadius: '12px',
          margin: '0 auto',
          background: 'transparent',
          width: '100vw',
          paddingLeft: '180px',
        }}
      >
        <style>
          {`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {/* Flex container for images */}
        <div className="flex flex-nowrap w-full">
          {[ic1Img, ic2Img, ic3Img, ic4Img].map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-0"
              style={{
                marginLeft: index === 0 ? '0px' : '16px',
              }}
            >
              <div className="rounded-2xl overflow-hidden"
                style={{
                  height: '532px',
                  width: '532px',
                }}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-left text-[#fafafa] ml-12 mt-4 text-lg font-normal leading-tight max-w-[532px]">
                {index === 0 && (
                  <>iPhone 16 Pro Max has our largest iPhone <br /> display ever</>
                )}
                {index === 1 && "The thinnest borders on any Apple product"}
                {index === 2 && "Premium Grade 5 titanium is exceptionally durable"}
                {index === 3 && (
                  <>Four striking colours, from Black Titanium to new <br/> Desert Titanium</>
                )}
              </p>
            </div>
          ))}
          {/* Add extra space after the last image */}
          <div className="flex-shrink-0" style={{ width: '780px' }}></div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => scroll('left')}
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            isAtStart ? 'bg-gray-700 text-gray-500' : 'bg-white text-black'
          }`}
          disabled={isAtStart}
        >
          &lt;
        </button>
        <button
          onClick={() => scroll('right')}
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            isAtEnd ? 'bg-gray-700 text-gray-500' : 'bg-white text-black'
          }`}
          disabled={isAtEnd}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slider;