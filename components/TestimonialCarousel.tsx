"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "A game-changing platform that has redefined how I connect with audiences and collaborate seamlessly.",
    name: "Bhuvan Bam",
    title: "YouTuber & Content Creator, BB Ki Vines",
  },
  {
    id: 2,
    text: "Finding the right brands to collaborate with has become effortless, allowing me to focus on creativity without any hassle.",
    name: "CarryMinati",
    title: "YouTuber & Roaster, CarryMinati",
  },
  {
    id: 3,
    text: "Data-driven insights have helped refine my approach, ensuring better reach and stronger engagement with my audience.",
    name: "Amit Bhadana",
    title: "YouTuber & Comedian, Amit Bhadana",
  },
  {
    id: 4,
    text: "New collaboration opportunities have expanded my audience, making a larger impact possible.",
    name: "Ashish Chanchlani",
    title: "YouTuber & Entertainer, Ashish Chanchlani Vines",
  },
  {
    id: 5,
    text: "An outstanding experience! The support team has been exceptional, providing guidance at every step to enhance my journey.",
    name: "Technical Guruji",
    title: "YouTuber & Tech Reviewer, Technical Guruji",
  },
];

// Variants for a fade transition:
const fadeVariants = {
  initial: { opacity: 0, position: "absolute", width: "100%" },
  animate: {
    opacity: 1,
    position: "relative",
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    position: "absolute",
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically advance testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 rounded-2xl shadow-xl p-4 md:p-8 relative">
      {/* AnimatePresence for mounting/unmounting slides */}
      <div className="relative min-h-[12rem]"> 
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            // variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col items-center"
          >
            {/* Slide Content */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-4 md:p-6 max-w-lg w-full mx-auto border border-white/30">
              <p className="text-base md:text-lg font-medium text-white italic leading-relaxed">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>
              <div className="mt-6 text-center">
                <p className="text-base md:text-lg font-semibold text-white">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm md:text-base text-gray-300">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
