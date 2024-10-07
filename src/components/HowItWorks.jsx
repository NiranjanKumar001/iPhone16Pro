import React, { useRef } from "react";
import { chipImg } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        {/* Chip Image */}
        <div id="chip" className="flex-center w-full">
          <img src={chipImg} alt="chip" width={600} height={600} />
        </div>

        {/* Title and Description */}
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">Powerful possibilities.</h2>
          <p className="text-lg mt-12 text-gray-500">
            Starting in US English later this year
          </p>
        </div>

        {/* Rebuilt Video Section */}
        <div className="mt-10 md:mt-20 mb-14">
          <div className="flex justify-center">
            <video
              className="pointer-events-none max-w-full h-auto"
              playsInline
              preload="none"
              muted
              autoPlay
              ref={videoRef}
            >
              <source src="/assets/videos/frame.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Text Section */}
        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col items-center">
            <p className="hiw-text g_fadeIn text-center">
              iPhone 16 Pro is built for Apple Intelligence, the personal
              intelligence
              <br /> system that helps you 
              <span className="text-white font-bold">
                write, express yourself and get things done
                <br /> effortlessly
              </span>
              .With groundbreaking privacy protections, it gives you <br />
              peace of mind that no one else can access your data — not even
              Apple.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
