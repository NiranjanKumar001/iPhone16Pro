import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";
import { yellowImg } from "../utils";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animations";

gsap.registerPlugin(ScrollTrigger);

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "15.93 cm (6.3″) iPhone 16 Pro in four colours",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const parentRef = useRef(null);
  const modelContainerRef = useRef(null);
  const colorPickerRef = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline();
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
  }, [size, smallRotation, largeRotation]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.to("#heading", { 
      y: 0, 
      opacity: 1, 
      duration: 1,
      ease: "power3.out"
    });

    // Color picker animation
    gsap.fromTo(
      colorPickerRef.current,
      { 
        opacity: 0, 
        y: 50, 
        scale: 0.5
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: modelContainerRef.current,
          start: "center center",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Color options animation
    gsap.fromTo(
      colorPickerRef.current.querySelectorAll('li'),
      { 
        opacity: 0, 
        scale: 0.5, 
        stagger: 0.1 
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: colorPickerRef.current,
          start: "top bottom",
          end: "center center",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Color picker hover and click animations
    const colorItems = colorPickerRef.current.querySelectorAll('li');
    colorItems.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, {
          scale: 1.2,
          duration: 0.3,
          ease: "elastic.out(1, 0.3)",
        });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          scale: 1,
          duration: 0.3,
          ease: "elastic.out(1, 0.3)",
        });
      });

      item.addEventListener('click', () => {
        gsap.to(item, {
          scale: 0.8,
          duration: 0.1,
          ease: "power2.in",
          yoyo: true,
          repeat: 1,
        });
        setModel(models[index]);
      });
    });

  }, []);

  return (
    <section className="common-padding relative" ref={parentRef}>
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading opacity-0 transform translate-y-10" style={{ color: "white" }}>
          Take a closer look.
        </h1>
        <div className="flex flex-col items-center mt-5" ref={modelContainerRef}>
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
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 bg-black bg-opacity-20 backdrop-blur-md rounded-2xl p-4"
            ref={colorPickerRef}
          >
            <p className="text-sm font-light text-center mb-3 text-white">
              {model.title}
            </p>
            <ul className="flex justify-center items-center gap-4">
              {models.map((item, i) => (
                <li
                  key={i}
                  className={`w-8 h-8 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl ${
                    model.title === item.title ? 'ring-2 ring-white' : ''
                  }`}
                  style={{ backgroundColor: item.color[0] }}
                  onClick={() => setModel(item)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;