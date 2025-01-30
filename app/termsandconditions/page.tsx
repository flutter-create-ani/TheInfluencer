"use client";
import { motion } from "framer-motion";

function TermsAndConditions() {
  return (
    <div className="text-white p-6 bg-[#0A0B1C] min-h-screen flex flex-col items-center justify-center text-center">
      {/* Heading with Animation */}
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Terms and Conditions
      </motion.h1>

      {/* Introduction with Fade-in Effect */}
      <motion.p
        className="mb-6 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Welcome to <span className="font-semibold">The Influencer</span>! By
        accessing and using our services, you agree to abide by our terms and
        conditions. This page outlines the rules, responsibilities, and legal
        agreements that govern your use of our platform.
      </motion.p>

      {/* Key Highlights Section */}
      <motion.h2
        className="text-2xl font-semibold mt-6 mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Key Highlights
      </motion.h2>

      {/* List Items with Hover Effects */}
      <motion.ul className="space-y-4 max-w-lg text-left">
        {[
          {
            title: "User Responsibilities",
            description: "Guidelines on appropriate usage and conduct.",
          },
          {
            title: "Privacy & Data Protection",
            description: "How we handle and protect your information.",
          },
          {
            title: "Payment & Transactions",
            description: "Policies regarding bookings, payments, and refunds.",
          },
          {
            title: "Service Availability",
            description: "Terms related to our offerings and support.",
          },
          {
            title: "Legal Compliance",
            description:
              "Your rights and obligations while using our services.",
          },
        ].map((item, index) => (
          <motion.li
            key={index}
            className="p-4 bg-[#131429] rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-[#1D1E3F]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <span className="font-semibold">{item.title}:</span>{" "}
            {item.description}
          </motion.li>
        ))}
      </motion.ul>

      {/* Closing Text with Fade-in Effect */}
      <motion.p
        className="mt-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        For a detailed overview, please review our full Terms and Conditions. If
        you have any questions, feel free to contact us.
      </motion.p>
    </div>
  );
}

export default TermsAndConditions;
