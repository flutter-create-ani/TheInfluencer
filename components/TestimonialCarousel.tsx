"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    "id": 1,
    "text": "A game-changing platform that has redefined how I connect with audiences and collaborate seamlessly.",
    "name": "Bhuvan Bam",
    "title": "YouTuber & Content Creator, BB Ki Vines"
  },
  {
    "id": 2,
    "text": "Finding the right brands to collaborate with has become effortless, allowing me to focus on creativity without any hassle.",
    "name": "CarryMinati",
    "title": "YouTuber & Roaster, CarryMinati"
  },
  {
    "id": 3,
    "text": "Data-driven insights have helped refine my approach, ensuring better reach and stronger engagement with my audience.",
    "name": "Amit Bhadana",
    "title": "YouTuber & Comedian, Amit Bhadana"
  },
  {
    "id": 4,
    "text": "New collaboration opportunities have expanded my audience, making a larger impact possible.",
    "name": "Ashish Chanchlani",
    "title": "YouTuber & Entertainer, Ashish Chanchlani Vines"
  },
  {
    "id": 5,
    "text": "An outstanding experience! The support team has been exceptional, providing guidance at every step to enhance my journey.",
    "name": "Technical Guruji",
    "title": "YouTuber & Tech Reviewer, Technical Guruji"
  }
];

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden h-96 w-full max-w-3xl mx-auto bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 rounded-2xl shadow-xl p-8 flex items-center justify-center">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 * direction }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 * direction }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center px-6 text-center"
        >
          <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-8 max-w-lg border border-white/30">
            <p className="text-lg md:text-xl font-medium text-white italic leading-relaxed">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </p>
            <div className="mt-6">
              <p className="text-lg font-semibold text-white">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-gray-300">{testimonials[currentIndex].title}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 flex space-x-2">
        {testimonials.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
            initial={false}
            animate={{ scale: index === currentIndex ? 1.3 : 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};
