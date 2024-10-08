import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";
import { yellowImg } from "../utils";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animations";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "15.93 cm (6.3″) iPhone 16 Pro in four colours",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  //camera
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  //model

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  //rotation of the model

  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const t1 = gsap.timeline();
  useEffect(() => {
    if (size === "large") {
      animateWithGsapTimeline(t1, small, smallRotation, "#view1", "#view2", {
        transform: "translateX(-100%)",
        duration: 2,
      });
    }
    if (size === "small") {
      animateWithGsapTimeline(t1, large, largeRotation, "#view2", "#view1", {
        transform: "translateX(0)",
        duration: 2,
      });
    }
  });

  const parentRef = useRef(null);
  const divRef = useRef(null);
  const titleRef = useRef(null);
  const colorPickerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      divRef.current,
      { opacity: 0.9, y: 0, visibility: "hidden", position: "fixed" },
      {
        opacity: 1,
        y: 0,
        visibility: "visible",
        duration: 0.7, // Increased duration for a smoother effect
        scrollTrigger: {
          trigger: parentRef.current,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play none none reverse",
          scrub: true,
          onEnter: () => {
            gsap.to(divRef.current, {
              opacity: 1,
              visibility: "visible",
              y: 0,
              position: "sticky",
              bottom: 20,
              duration: 0.7, // Increased duration for a smoother effect
            });
          },
          onLeaveBack: () => {
            gsap.to(divRef.current, {
              position: "fixed",
              bottom: 20,
              duration: 0.7, // Increased duration for a smoother effect
              opacity: 1,
            });
          },
        },
      }
    );

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -20 }, // Start hidden and slightly above
      {
        opacity: 1,
        y: 0,
        duration: 0.7, // Increased duration for a smoother effect
        ease: "bounce.out", // Changed easing for a more vibrant effect
        scrollTrigger: {
          trigger: divRef.current,
          start: "top bottom", // Trigger when the top of the section hits the bottom of the viewport
          end: "bottom top", // End when the bottom of the section hits the top of the viewport
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
        },
      }
    );

    gsap.fromTo(
      colorPickerRef.current,
      { opacity: 0, y: 20, scale: 0.8 }, // Start hidden, slightly below, and scaled down
      {
        opacity: 1,
        y: 0,
        scale: 0.8, // Scale to normal size
        duration: 0.7, // Duration for a smoother effect
        ease: "back.out(1.7)", // Easing for a more vibrant effect
        scrollTrigger: {
          trigger: divRef.current,
          start: "top bottom", // Trigger when the top of the section hits the bottom of the viewport
          end: "bottom top", // End when the bottom of the section hits the top of the viewport
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
        },
      }
    );

    // Add mouse enter and leave event listeners
    colorPickerRef.current.addEventListener('mouseenter', () => {
      gsap.to(colorPickerRef.current, {
        scale: 1.4, // Scale up on hover
        duration: 0.1, // Duration for the scale effect
        ease: "bounce.out", // Bouncy easing for the hover effect
      });
    });

    colorPickerRef.current.addEventListener('mouseleave', () => {
      gsap.to(colorPickerRef.current, {
        scale: 0.8, // Scale back to original size
        duration: 0.3, // Duration for the scale effect
        ease: "bounce.out", // Bouncy easing for the hover effect
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { // Check if the element is in view
          gsap.to(colorPickerRef.current, {
            scale: 1.05, // Subtle scale up when in view
            rotation: 5, // Slight rotation for added effect
            duration: 0.3, // Duration for the scale effect
            ease: "bounce.out", // Bouncy easing for the scroll effect
          });
        } else {
          gsap.to(colorPickerRef.current, {
            scale: 1, // Scale back to original size when out of view
            rotation: 0, // Reset rotation when out of view
            duration: 0.3, // Duration for the scale effect
            ease: "bounce.out", // Bouncy easing for the scroll effect
          });
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is in view
    });

    // Start observing the colorPickerRef element
    observer.observe(colorPickerRef.current);

    window.addEventListener('scroll', () => { 
      gsap.to(colorPickerRef.current, {
        scale: 1.2, // Adjusted scale for a more subtle effect
        duration: 0.3, // Duration for the scale effect
        ease: "bounce.out", // Bouncy easing for the scroll effect
      });
    });

  }, []);

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);
  return (
    <section className="common-padding" ref={parentRef}>
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading" style={{ color: "white" }}>
          Take a closer look.
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>

          <div
            className="mx-auto left-1 right-1 z-10 overflow-visible w-fit"
            ref={divRef}
            style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)' }}
          >
            <div className="flex-center flex-col"> {/* Added flex-col to stack items vertically */}
              <p
                ref={titleRef} // Attach the ref here
                className="text-sm font-light text-center mb-5 bg-gray-300 w-fit p-2 rounded-full"
              >
                {model.title}
              </p>
              <ul className="color-container gap-2" ref={colorPickerRef}> {/* Attach the ref here */}
                {models.map((item, i) => (
                  <div
                    className={`rounded-full cursor-pointer w-8 h-8 flex-center ${
                      model.title === item.title
                        ? "border-blue border-1"
                        : "border-0"
                    }`}
                    key={i} // Moved key to the correct element
                  >
                    <div
                      className={`rounded-full cursor-pointer w-7 h-7 flex-center ${
                        model.title === item.title
                          ? "border-gray-700 border-1"
                          : "border-0"
                      }`}
                    >
                      <li
                        className={`w-6 h-6 rounded-full shadow-top ${
                          model.title === item.title ? "border-sky-50" : ""
                        } border-2`}
                        style={{ backgroundColor: item.color[0] }}
                        onClick={() => setModel(item)}
                      />
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Model;
