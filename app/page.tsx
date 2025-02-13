"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Globe, Star, Users, BarChart } from "lucide-react";
import { motion } from "framer-motion";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { useInView } from "react-intersection-observer";
import TypingAnimation from "@/components/TypingAnimation";

const MotionCard = motion(Card);

const ScrollAnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0B1C]" />
        <div className="container relative px-4 space-y-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-white/5 bg-white/5 px-3 py-1 text-sm text-gray-400 backdrop-blur-sm"
          >
            <svg
              className="mr-2 h-4 w-4 text-[#6366F1]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            AI-Assisted Search
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white"
          >
            Find the Perfect{" "}
            <span className="text-[#6366F1]">
              <TypingAnimation />
            </span>
            for Your Brand
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto max-w-[600px] text-gray-400 md:text-xl"
          >
            Discover and connect with influencers across all major platforms.
            Filter by niche, followers, location, and more.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-[#6366F1] hover:bg-[#5355E8] text-white"
            >
              View Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/10 text-gray-400 hover:text-white"
            >
              Learn More
            </Button>
          </motion.div>
          <div className="pt-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-sm text-gray-400 mb-4"
            >
              Find influencers across all major platforms
            </motion.p>
            <div className="flex justify-center gap-8">
              {[
                {
                  // Instagram
                  color: "#E4405F",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                },
                {
                  // YouTube
                  color: "#FF0000",
                  path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
                },

                {
                  // LinkedIn
                  color: "#0077B5",
                  path: "M4.98 3.5C4.98 5 3.9 6.25 2.28 6.25S0 5 0 3.5C0 2 1.08 0.75 2.7 0.75S4.98 2 4.98 3.5zM0 8h4.5v12H0V8zm6.75 0h4.5v1.62h.06c.63-1.2 2.17-2.46 4.47-2.46 4.78 0 5.67 3.14 5.67 7.22V20H16.9v-4.48c0-1.07-.02-2.45-1.5-2.45-1.51 0-1.74 1.18-1.74 2.37V20H6.75V8z",
                },
                {
                  // Reddit
                  color: "#FF4500",
                  path: "M22.07 10.02a4.21 4.21 0 0 0-2.87-2.03 5.69 5.69 0 0 0-.17-1.12 3.38 3.38 0 0 0-6.56-.35 5.56 5.56 0 0 0-3.5.65 5.69 5.69 0 0 0-2.87 2.03A4.08 4.08 0 0 0 4 12.03a4.06 4.06 0 0 0 1.64 3.2 3.3 3.3 0 0 0-.2 1.14 3.38 3.38 0 0 0 6.56.35c.5.06 1 .1 1.52.1s1.02-.03 1.52-.1a3.38 3.38 0 0 0 6.56-.35 3.3 3.3 0 0 0-.2-1.14 4.06 4.06 0 0 0 1.64-3.2 4.08 4.08 0 0 0-1.93-3.01zM9.5 12.91c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm6.5 5.21a4.54 4.54 0 0 1-6 0 .75.75 0 1 1 1-1.12 3.04 3.04 0 0 0 4 0 .75.75 0 1 1 1 1.12zm-.5-3.71c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
                },
                {
                  // Twitter (X)
                  color: "#FFFFFF",
                  path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                },
              ].map((icon, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={iconVariants}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ scale: 1.3 }}
                  className={`text-[${icon.color}]`}
                >
                  <svg
                    className="h-8 w-8"
                    fill={icon.color}
                    viewBox="0 0 24 24"
                  >
                    <path d={icon.path} />
                  </svg>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ScrollAnimatedSection>
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="container px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                What Our Clients Say
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-200">
                Hear from the brands that have transformed their influencer
                marketing with our platform
              </p>
            </div>
            <TestimonialCarousel />
          </div>
        </section>
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <section className="py-20">
          <div className="container px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Powerful Features
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-400">
                Everything you need to find and connect with the right
                influencers
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Search,
                  title: "Advanced Search",
                  description:
                    "Find influencers across Instagram, YouTube, TikTok, and more with our powerful search engine.",
                },
                {
                  icon: Filter,
                  title: "Smart Filters",
                  description:
                    "Filter by niche, follower count, engagement rate, location, and other key metrics.",
                },
                {
                  icon: Globe,
                  title: "Global Reach",
                  description:
                    "Access influencers from over 190 countries and territories worldwide.",
                },
                {
                  icon: Star,
                  title: "Quality Metrics",
                  description:
                    "Evaluate influencers based on engagement, authenticity, and performance metrics.",
                },
                {
                  icon: Users,
                  title: "Audience Insights",
                  description:
                    "Get detailed demographics and interests data for influencer audiences.",
                },
                {
                  icon: BarChart,
                  title: "Campaign Analytics",
                  description:
                    "Track and measure the success of your influencer marketing campaigns.",
                },
              ].map((feature, index) => (
                <MotionCard
                  key={index}
                  className="bg-white/5 border-white/5 backdrop-blur-sm"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <CardHeader>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                    >
                      <feature.icon className="w-10 h-10 text-[#6366F1] mb-4" />
                    </motion.div>
                    <CardTitle className="text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimatedSection>
    </div>
  );
}
