"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Image {
  id: number;
  src: string;
  alt: string;
}

const images: Image[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    alt: "Smiley woman pop party",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    alt: "Woman in sequin jacket",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    alt: "Woman in red jacket",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    alt: "Woman in yellow dress",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    alt: "Woman in pink shirt",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    alt: "Woman with balloon",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    alt: "Woman in purple shirt",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    alt: "Woman in pink shirt 2",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    alt: "Woman in red jacket 2",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    alt: "Woman in purple shirt 2",
  },
];

const animationSpeed = 3;
const gap = 32; // Gap between images

const useInfiniteScroll = (
  imagesArray: Image[],
  direction: "left" | "right"
) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || isPaused) return;

    const containerWidth = containerRef.current.offsetWidth;
    const imageWidth = containerWidth * 0.4; // Default width percentage for desktop
    const singleSetWidth = imagesArray.length * (imageWidth + gap);

    const scroll = () => {
      setScrollPosition((prev) => {
        const newPosition =
          prev + (direction === "left" ? -animationSpeed : animationSpeed);
        // Reset when we've moved past one complete set
        if (Math.abs(newPosition) >= singleSetWidth) {
          return (
            newPosition +
            (direction === "left" ? singleSetWidth : -singleSetWidth)
          );
        }
        return newPosition;
      });
    };

    const intervalId = setInterval(scroll, 16);
    return () => clearInterval(intervalId);
  }, [isPaused, imagesArray, direction]);

  return {
    scrollPosition,
    containerRef,
    handleMouseEnter: () => setIsPaused(true),
    handleMouseLeave: () => setIsPaused(false),
  };
};

export const ImageShowcaseCarousel = () => {
  const { scrollPosition, containerRef, handleMouseEnter, handleMouseLeave } =
    useInfiniteScroll(images, "left");

  // Duplicate images for seamless looping
  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-12 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-white">
            Image Showcase
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-400 text-sm sm:text-base">
            Explore our stunning collection of images.
          </p>
        </div>
        {/* Infinite Scrolling Images */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={containerRef}
            style={{
              transform: `translateX(${scrollPosition}px)`,
              transition: "transform 0.02s linear",
              whiteSpace: "nowrap",
              display: "flex",
            }}
          >
            {duplicatedImages.map((image, index) => (
              <motion.div
                key={`${image.id}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 0.95 }} // Zoom-out effect
                transition={{ duration: 0.2, delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden shadow-2xl"
                style={{
                  width: "clamp(200px, 25vw, 450px)", // Responsive width for desktop
                  height: "clamp(150px, 20vw, 310px)", // Responsive height for desktop
                  marginRight: gap,
                  flexShrink: 0,
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500} // Set appropriate width
                  height={500} // Set appropriate height
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
