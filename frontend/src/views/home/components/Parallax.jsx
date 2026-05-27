"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ParallaxContent = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.to(
      imageRef.current,
      {
        yPercent: 30,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          scroller: window,
          invalidateOnRefresh: true,
        },
      },
      { scope: containerRef },
    );
  }, []);

  return (
    <section id="gallery" className="relative h-[180px] lg:h-[600px] overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 -top-16">
        <Image
          ref={imageRef}
          alt=""
          src="/images/img_parallax.webp"
          width={1600}
          height={746}
          className="object-cover w-full h-full object-[50%_70%]"
        />
      </div>
    </section>
  );
};

const Parallax = () => {
  return (
    <>
      <ParallaxContent />
    </>
  );
};

export default Parallax;
