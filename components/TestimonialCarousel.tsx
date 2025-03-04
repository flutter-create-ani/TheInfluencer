"use client";
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

// Variants for a right-to-left slide transition
const slideVariants = {
  initial: { opacity: 0, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto ">
      <div className="relative min-h-[10rem] md:min-h-[14rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ position: "absolute", width: "100%" }}
            className="flex flex-col items-center"
          >
            <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-4 md:p-7 w-full mx-2 md:mx-auto border border-white/30">
              <p className="text-xs md:text-lg font-medium text-white italic leading-relaxed text-center break-words">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>
              <div className="mt-3 md:mt-6 text-center space-y-1">
                <p className="text-sm md:text-xl font-semibold text-white">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-xs md:text-base text-gray-300 break-words">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center space-x-2 mt-12">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer transition-all duration-300 ${
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

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
}

export const ScrollAnimatedSection = ({
  children,
}: ScrollAnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default function TestimonialsSection() {
  return (
    <ScrollAnimatedSection>
      <section className="py-8 md:py-20 px-4 md:px-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl shadow-xl max-w-7xl mx-auto">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-6 md:mb-16">
            <h2 className="text-xl md:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Testimonials To Our Work
            </h2>
            <p className="mx-auto max-w-[600px] text-xs md:text-base text-gray-200">
              Discover what industry experts are saying about the impact and
              potential of influencer marketing.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>
    </ScrollAnimatedSection>
  );
}
