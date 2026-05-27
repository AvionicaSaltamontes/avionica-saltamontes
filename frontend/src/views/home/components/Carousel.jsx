"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth < breakpoint : false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

    const handleChange = (e) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    setIsMobile(mediaQuery.matches);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return isMobile;
}

const Carousel = () => {
  const isMobile = useIsMobile();

  const scrollRef = useRef(null);

  const container = useRef(null);
  const carouselRef = useRef(null);
  const tweenRef = useRef(null);

  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(true);

  const listImages = [
    "/images/img_carousel_6.webp",
    "/images/img_carousel_5.webp",
    "/images/img_carousel_4.webp",
    "/images/img_carousel_1.webp",
    "/images/img_carousel_2.webp",
    "/images/img_carousel_3.webp",
    "/images/img_carousel_7.webp",
    "/images/img_carousel_8.webp",
    "/images/img_carousel_9.webp",
  ];

  const listCarouselImages = [
    "/images/img_carousel_6.webp",
    "/images/img_carousel_5.webp",
    "/images/img_carousel_4.webp",
    "/images/img_carousel_1.webp",
    "/images/img_carousel_2.webp",
    "/images/img_carousel_3.webp",
    "/images/img_carousel_7.webp",
    "/images/img_carousel_8.webp",
    "/images/img_carousel_9.webp",

    "/images/img_carousel_6.webp",
    "/images/img_carousel_5.webp",
    "/images/img_carousel_4.webp",
    "/images/img_carousel_1.webp",
    "/images/img_carousel_2.webp",
    "/images/img_carousel_3.webp",
    "/images/img_carousel_7.webp",
    "/images/img_carousel_8.webp",
    "/images/img_carousel_9.webp",

    "/images/img_carousel_6.webp",
    "/images/img_carousel_5.webp",
    "/images/img_carousel_4.webp",
    "/images/img_carousel_1.webp",
    "/images/img_carousel_2.webp",
    "/images/img_carousel_3.webp",
    "/images/img_carousel_7.webp",
    "/images/img_carousel_8.webp",
    "/images/img_carousel_9.webp",

    "/images/img_carousel_6.webp",
    "/images/img_carousel_5.webp",
    "/images/img_carousel_4.webp",
    "/images/img_carousel_1.webp",
    "/images/img_carousel_2.webp",
    "/images/img_carousel_3.webp",
    "/images/img_carousel_7.webp",
    "/images/img_carousel_8.webp",
    "/images/img_carousel_9.webp",
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    let total = 5;
    if (window.innerWidth <= 768) {
      total = 1;
    }

    const itemWidth = container.clientWidth / total;
    const scrollAmount = itemWidth * total;

    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  useGSAP(() => {
    if (!carouselRef.current || !isMobile) return;

    tweenRef.current = gsap.to(carouselRef.current, {
      xPercent: -500,
      ease: "none",
      duration: 100,
      repeat: -1,
    });

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (!tweenRef.current) return;
        const scrollingDown = self.direction === 1;
        tweenRef.current.timeScale(scrollingDown ? 1 : -1);
      },
    });

    return () => {
      trigger.kill();
      tweenRef.current?.kill();
      tweenRef.current = null;
    };
  }, [isMobile]);

  return (
    <section className="my-4 relative">
      <div className="hidden md:flex items-center justify-center overflow-hidden">
        <div ref={scrollRef} className="flex overflow-x-hidden overflow-y-hidden scroll-smooth no-scrollbar snap-x snap-mandatory">
          {listImages.map((item, index) => (
            <div key={`carousel-${index}`} className="w-full md:w-1/5 shrink-0 snap-start md:px-2 relative">
              <Zoom>
                <Image alt="" src={item} width={2000} height={1145} className="w-full" />
              </Zoom>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        {showLeft && (
          <button
            type="button"
            onClick={() => scroll("back")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 h-full cursor-pointer bg-black/10 hover:bg-black/40 text-white transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={56}
              height={56}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </button>
        )}

        {showRight && (
          <button
            type="button"
            onClick={() => scroll("next")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 h-full cursor-pointer bg-black/10 hover:bg-black/40 text-white transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={56}
              height={56}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </button>
        )}
      </div>

      {isMobile && (
        <div ref={container} className="overflow-hidden block md:hidden">
          <div ref={carouselRef} className="flex whitespace-nowrap gap-4">
            {listCarouselImages.map((item, index) => (
              <div key={`list-carousel-${index}`} className="min-w-56">
                <Zoom>
                  <Image alt="" src={item} width={540} height={150} className="w-full h-40 object-cover" />
                </Zoom>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Carousel;
