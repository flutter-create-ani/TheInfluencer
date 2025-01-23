"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CursorEffect } from "@/components/CursorEffect";
import { FooterModal } from "@/components/FooterModal";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: React.ReactNode | null;
  }>({ title: "", content: null });

  const openModal = (title: string, content: React.ReactNode) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#0A0B1C]`}>
        <CursorEffect />
        <header className="fixed top-0 w-full z-50 bg-[#0A0B1C]/80 backdrop-blur-sm border-b border-white/5">
          <nav className="container mx-auto flex items-center justify-between h-16 px-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-[#6366F1]"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className="font-bold">The Influencer </span>
              </Link>
            </motion.div>
            <div className="hidden md:flex space-x-6">
              {["Home", "About", "Features", "Pricing", "Contact"].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </motion.div>
                )
              )}
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-4"
            >
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                >
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-[#6366F1] hover:bg-[#5355E8] text-white">
                  Sign Up
                </Button>
              </Link>
            </motion.div>
          </nav>
        </header>
        <main className="pt-16">{children}</main>
        <footer className="bg-[#0A0B1C]/80 backdrop-blur-sm border-t border-white/5">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-white">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-white">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() =>
                        openModal(
                          "Blog",
                          <p>Our blog content will be displayed here.</p>
                        )
                      }
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Blog
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        openModal(
                          "Support",
                          <p>Our support information will be displayed here.</p>
                        )
                      }
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Support
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-white">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() =>
                        openModal(
                          "Privacy Policy",
                          <p>Our privacy policy will be displayed here.</p>
                        )
                      }
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        openModal(
                          "Terms of Service",
                          <p>Our terms of service will be displayed here.</p>
                        )
                      }
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Terms of Service
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { Icon: FaTwitter, href: "/twitter" },
                    { Icon: FaInstagram, href: "/instagram" },
                    { Icon: FaLinkedin, href: "/linkedin" },
                    { Icon: FaFacebook, href: "/facebook" },
                  ].map(({ Icon, href }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      className="text-gray-400 hover:text-white transition-colors"
                      variants={socialIconVariants}
                      whileHover="hover"
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-400">
              <p>
                &copy; {currentYear} Influencer Directory. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
        <FooterModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={modalContent.title}
          content={modalContent.content || <p>No content available.</p>}
        />
      </body>
    </html>
  );
}
