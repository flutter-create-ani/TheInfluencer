"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "Influencer Directory has transformed our marketing strategy. We've seen a 200% increase in engagement!",
    name: "Sarah Johnson",
    title: "Marketing Director, TechCorp",
  },
  {
    id: 2,
    text: "The platform's AI-powered search made finding the perfect influencers for our niche incredibly easy.",
    name: "Mike Chen",
    title: "CEO, FitnessPro",
  },
  {
    id: 3,
    text: "The analytics provided by Influencer Directory have been invaluable for measuring our campaign ROI.",
    name: "Emily Rodriguez",
    title: "Social Media Manager, BeautyBrands",
  },
  {
    id: 4,
    text: "We've been able to reach new markets effortlessly thanks to the global reach of this platform.",
    name: "Alex Thompson",
    title: "Growth Hacker, StartupX",
  },
  {
    id: 5,
    text: "The customer support team is phenomenal. They've been there every step of the way as we scaled our influencer program.",
    name: "Lisa Wong",
    title: "Influencer Relations, FashionForward",
  },
];

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden h-80 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-lg">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -50, rotateX: 15 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center p-6 text-center"
        >
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 max-w-2xl">
            <p className="text-xl text-white mb-4">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </p>
            <p className="font-semibold text-white">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-sm text-gray-300">
              {testimonials[currentIndex].title}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-0 left-4 top-0 flex flex-col justify-center space-y-2">
        {testimonials.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            initial={false}
            animate={{ scale: index === currentIndex ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
};
