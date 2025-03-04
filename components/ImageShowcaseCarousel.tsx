"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Share2,
  Heart,
  Tag,
  Instagram,
  Youtube,
  Linkedin,
  Globe,
} from "lucide-react";
import Image from "next/image";

// Animation configuration
const ANIMATION_SPEED = 1.5;
const GAP = 24;

// Sample influencer data with updated categories and language
const influencers = [
  {
    id: 1,
    username: "Sameer Rahangdale",
    categories: ["Technology & Gadgets", "(Tech Reviews, Gaming,AI,Software)"],
    primarySocialMedia: "Instagram",
    language: "हिंदी",
    src: "/images/IMG_4539.JPG",
    alt: "Technology & Gadgets (Tech Reviews, Gaming,AI,Software)",
  },
  {
    id: 2,
    username: "Shiva Singh",
    categories: [
      "Technology & Gadgets",
      "Education & Self-Improvement ",
      "Entertainment & Media ",
    ],
    primarySocialMedia: "Instagram",
    language: "हिंदी",
    src: "/images/Shiva_Singh.jpg",
    alt: "Fashion and tech influencer",
  },
  {
    id: 3,
    username: "Ishika Jaggi",
    categories: [
      "Fashion & Beauty",
      "Travel & Adventure",
      "Technology & Gadgets",
    ],
    primarySocialMedia: ["YouTube", " Instagram", " Linkedin"],
    language: "हिंदी",
    src: "/images/Shika_Jaggi.jpg",
    alt: "Travel and tech influencer",
  },
  {
    id: 4,
    username: "Vandana Malik",
    categories: ["Fashion & Beauty", "(Fashion, Style, Skincare, and Makeup)"],
    primarySocialMedia: "Instagram",
    language: "हिंदी",
    src: "/images/Vandana_Malik.jpg",
    alt: "Fashion and travel influencer",
  },
];

interface Influencer {
  id: number;
  username: string;
  categories: string[];
  primarySocialMedia: string | string[];
  language: string;
  src: string;
  alt: string;
}

const useInfiniteScroll = (
  influencersArray: Influencer[],
  direction: "left" | "right"
) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || isPaused) return;

    const containerWidth = containerRef.current.offsetWidth;
    const imageWidth = containerWidth * 0.3; // Adjusted width percentage
    const singleSetWidth = influencersArray.length * (imageWidth + GAP);

    const scroll = () => {
      setScrollPosition((prev) => {
        const newPosition =
          prev + (direction === "left" ? -ANIMATION_SPEED : ANIMATION_SPEED);
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
  }, [isPaused, influencersArray, direction]);

  return {
    scrollPosition,
    containerRef,
    handleMouseEnter: () => setIsPaused(true),
    handleMouseLeave: () => setIsPaused(false),
  };
};

// Function to get gradient colors based on category
const getCategoryGradient = (category: string) => {
  if (category.includes("Fashion")) {
    return "from-pink-600 to-purple-600";
  } else if (category.includes("Travel")) {
    return "from-blue-600 to-teal-500";
  } else if (category.includes("Technology")) {
    return "from-indigo-600 to-blue-500";
  } else if (category.includes("Education")) {
    return "from-amber-500 to-orange-600";
  } else if (category.includes("Entertainment")) {
    return "from-red-500 to-rose-600";
  }
  return "from-indigo-600 to-purple-600"; // default
};

// Function to get social media icon
const getSocialMediaIcon = (platform: string) => {
  if (platform.includes("Instagram")) {
    return <Instagram size={14} className="mr-1" />;
  } else if (platform.includes("YouTube")) {
    return <Youtube size={14} className="mr-1" />;
  } else if (platform.includes("Linkedin")) {
    return <Linkedin size={14} className="mr-1" />;
  }
  return <Globe size={14} className="mr-1" />;
};

const InfluencerCard = ({ influencer }: { influencer: Influencer }) => {
  const [isHovered, setIsHovered] = useState(false);
  // const primaryCategory = influencer.categories[0];
  // const gradientClasses = getCategoryGradient(primaryCategory);

  // Handle array or string for social media
  const socialMediaPlatforms = Array.isArray(influencer.primarySocialMedia)
    ? influencer.primarySocialMedia
    : [influencer.primarySocialMedia];

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-900 to-gray-800 group"
      style={{
        width: "clamp(280px, 30vw, 400px)",
        height: "clamp(380px, 40vw, 500px)",
        marginRight: GAP,
        flexShrink: 0,
      }}
    >
      {/* Image with gradient overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />
        <Image
          src={influencer.src}
          alt={influencer.alt}
          fill
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-white to-transparent opacity-10 rounded-full -translate-x-12 -translate-y-12"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white to-transparent opacity-10 rounded-full translate-x-16 translate-y-16"></div>
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
        {/* Top section with category badges */}
        <div className="flex justify-between items-start">
          <div className="flex flex-wrap gap-2 max-w-[80%]">
            {influencer.categories.map((category, index) => (
              <span
                key={index}
                className={`px-3 py-1 bg-gradient-to-r ${getCategoryGradient(
                  category
                )} bg-opacity-80 backdrop-blur-sm text-white text-xs font-semibold rounded-full flex items-center shadow-lg`}
              >
                <Tag size={10} className="mr-1" />
                {category}
              </span>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex space-x-2"
          >
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white bg-opacity-20 backdrop-blur-sm text-white hover:bg-opacity-30 transition-all hover:scale-110">
              <Share2 size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white bg-opacity-20 backdrop-blur-sm text-white hover:bg-opacity-30 transition-all hover:scale-110">
              <Heart size={16} />
            </button>
          </motion.div>
        </div>

        {/* Bottom section with influencer info */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <h3 className="text-xl font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {influencer.username}
            </h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap items-center gap-2">
                {socialMediaPlatforms.map((platform, index) => (
                  <span
                    key={index}
                    className="flex items-center text-gray-300 text-sm bg-black bg-opacity-40 px-2 py-1 rounded-md backdrop-blur-sm"
                  >
                    {getSocialMediaIcon(platform.toString())}
                    <span className="font-medium">{platform}</span>
                  </span>
                ))}
              </div>

              <div className="px-3 py-1 bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-full border border-gray-700">
                <span className="text-sm font-medium text-gray-300">
                  {influencer.language}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ImageShowcaseCarousel = () => {
  const { scrollPosition, containerRef, handleMouseEnter, handleMouseLeave } =
    useInfiniteScroll(influencers, "left");

  // Duplicate influencers for seamless looping
  const duplicatedInfluencers = [
    ...influencers,
    ...influencers,
    ...influencers,
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-900 to-black overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-900 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-900 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center space-y-6 mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-900 bg-opacity-30 backdrop-blur-sm mb-2 border border-indigo-800">
            <span className="text-indigo-300 text-sm font-medium">
              प्रभावशाली व्यक्ति खोजें
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Influencer Showcase
            </span>
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-400 text-base sm:text-lg">
            Connect with our curated collection of top-tier influencers from
            around the globe.
          </p>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center mb-10 space-x-3">
          <div className="flex items-center space-x-1 px-4 py-2 rounded-full bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-10">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-gray-300 text-sm">Auto-scrolling</span>
          </div>
          <div className="px-4 py-2 rounded-full bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-10">
            <span className="text-gray-300 text-sm">Hover to pause</span>
          </div>
        </div>

        {/* Infinite Scrolling Influencers */}
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
            className="py-4"
          >
            {duplicatedInfluencers.map((influencer, index) => (
              <InfluencerCard
                key={`${influencer.id}-${index}`}
                influencer={influencer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseCarousel;
