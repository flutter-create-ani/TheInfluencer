// components/ImageShowcaseCarousel.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";

interface Image {
  id: number;
  src: string;
  alt: string;
}

const images: Image[] = [
  { id: 1, src: "/images/stock1.jpg", alt: "Smiley woman pop party" },
  { id: 2, src: "/images/stock2.jpg", alt: "Woman in sequin jacket" },
  { id: 3, src: "/images/stock3.jpg", alt: "Woman in red jacket" },
  { id: 4, src: "/images/stock4.jpg", alt: "Woman in yellow dress" },
  { id: 5, src: "/images/stock5.jpg", alt: "Woman in pink shirt" },
  { id: 6, src: "/images/stock6.jpg", alt: "Woman with balloon" },
  { id: 7, src: "/images/stock7.jpg", alt: "Woman in purple shirt" },
  { id: 8, src: "/images/stock8.jpg", alt: "Woman in pink shirt 2" },
  { id: 9, src: "/images/stock9.jpg", alt: "Woman in red jacket 2" },
  { id: 10, src: "/images/stock10.jpg", alt: "Woman in purple shirt 2" },
];

const animationSpeed = 1; // Adjust for speed (higher = faster)
const imageHeight = 300; // Adjusted image height
const gap = 32; // Increased gap between images
const imageWidthPercentage = 0.4; // Set the image width as 40% of the container

// Hook for left scrolling
const useLeftScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || isPaused) return;

    const containerWidth = containerRef.current.offsetWidth;
    const imageWidth = containerWidth * imageWidthPercentage;
    const contentWidth = images.length * (imageWidth + gap);

    const scroll = () => {
      setScrollPosition((prev) => {
        let newPosition = prev - animationSpeed;

        // Reset scroll position when it reaches the end of the duplicated content
        if (newPosition <= -contentWidth) {
          newPosition = 0; // Reset to the beginning
        }

        return newPosition;
      });
    };

    const intervalId = setInterval(scroll, 16); // ~60 FPS for smoothness

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return { scrollPosition, containerRef, handleMouseEnter, handleMouseLeave };
};

// Hook for right scrolling
const useRightScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || isPaused) return;

    const containerWidth = containerRef.current.offsetWidth;
    const imageWidth = containerWidth * imageWidthPercentage;
    const contentWidth = images.length * (imageWidth + gap);

    const scroll = () => {
      setScrollPosition((prev) => {
        let newPosition = prev + animationSpeed;

        // Reset scroll position when it reaches the end of the duplicated content
        if (newPosition >= contentWidth) {
          newPosition = 0; // Reset to the beginning
        }

        return newPosition;
      });
    };

    const intervalId = setInterval(scroll, 16); // ~60 FPS for smoothness

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return { scrollPosition, containerRef, handleMouseEnter, handleMouseLeave };
};

export const ImageShowcaseCarousel = () => {
  const {
    scrollPosition: scrollLeft,
    containerRef: containerRefLeft,
    handleMouseEnter: handleMouseEnterLeft,
    handleMouseLeave: handleMouseLeaveLeft,
  } = useLeftScroll();

  const {
    scrollPosition: scrollRight,
    containerRef: containerRefRight,
    handleMouseEnter: handleMouseEnterRight,
    handleMouseLeave: handleMouseLeaveRight,
  } = useRightScroll();

  // Duplicate the images array for infinite scrolling
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full">
      {/* Row Scrolling Left */}
      <div
        className="overflow-hidden relative mb-12"
        onMouseEnter={handleMouseEnterLeft}
        onMouseLeave={handleMouseLeaveLeft}
      >
        <div
          ref={containerRefLeft}
          style={{
            transform: `translateX(${scrollLeft}px)`, // Scroll to the left
            transition: "transform 0.02s linear",
            whiteSpace: "nowrap",
            display: "flex",
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              style={{
                width: `${imageWidthPercentage * 100}%`,
                height: imageHeight,
                marginRight: gap,
                flexShrink: 0,
              }}
              className="rounded-lg overflow-hidden shadow-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row Scrolling Right */}
      <div
        className="overflow-hidden relative"
        onMouseEnter={handleMouseEnterRight}
        onMouseLeave={handleMouseLeaveRight}
      >
        <div
          ref={containerRefRight}
          style={{
            transform: `translateX(${-scrollRight}px)`, // Scroll to the right (fixed)
            transition: "transform 0.02s linear",
            whiteSpace: "nowrap",
            display: "flex",
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              style={{
                width: `${imageWidthPercentage * 100}%`,
                height: imageHeight,
                marginRight: gap,
                flexShrink: 0,
              }}
              className="rounded-lg overflow-hidden shadow-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
