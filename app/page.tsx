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
                  color: "#FF0000",
                  path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
                },
                {
                  color: "#E4405F",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                },
                {
                  color: "#FFFFFF",
                  path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
                },
                {
                  color: "#9146FF",
                  path: "M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z",
                },
                {
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
