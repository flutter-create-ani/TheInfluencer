"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-[#0A0B1C] flex flex-col`}
      >
        {/* Header Section */}
        <header className="fixed top-0 w-full z-50 bg-[#0A0B1C]/80 backdrop-blur-sm border-b border-white/5">
          <nav className="container mx-auto flex items-center justify-between h-14 px-4">
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
                <span className="font-bold text-white text-lg">The Influencer</span>
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
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
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
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white transition-all duration-200"
              >
                Login
              </Button>
              <Button className="bg-[#6366F1] hover:bg-[#5355E8] text-white transition-transform duration-200 hover:scale-105">
                Sign Up
              </Button>
            </motion.div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow pt-14 container mx-auto flex flex-col items-center justify-center text-center">
          {children}
        </main>

        {/* Footer Section */}
        <footer className="bg-[#0A0B1C]/80 backdrop-blur-sm border-t border-white/5">
          <div className="container mx-auto px-4 py-8 flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
              {/* Company Links */}
              <div>
                <h3 className="font-semibold mb-3 text-white">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Resources */}
              <div>
                <h3 className="font-semibold mb-3 text-white">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/blog"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/support"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Legal */}
              <div>
                <h3 className="font-semibold mb-3 text-white">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Social Media */}
              <div>
                <h3 className="font-semibold mb-3 text-white">Follow Us</h3>
                <div className="flex justify-center space-x-4">
                  {[
                    {
                      href: "https://facebook.com",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18 2h-3c-1.105 0-2 .895-2 2v3H9v4h4v10h4v-10h3l1-4h-4V4c0-.553.447-1 1-1h3V2z" />
                        </svg>
                      ),
                    },
                    {
                      href: "https://twitter.com",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.11-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                      ),
                    },
                    {
                      href: "https://instagram.com",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M7.75 2h8.5A5.25 5.25 0 0121.5 7.25v8.5A5.25 5.25 0 0116.25 21H7.75A5.25 5.25 0 012.5 15.75v-8.5A5.25 5.25 0 017.75 2zm6.25 12.5a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0zM18 7.25a.75.75 0 110 1.5.75.75 0 010-1.5z" />
                        </svg>
                      ),
                    },
                    {
                      href: "https://linkedin.com",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20 0H4C1.8 0 0 1.8 0 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM8 20H5V9h3v11zM6.5 7.5C5.7 7.5 5 6.8 5 6s.7-1.5 1.5-1.5S8 5.2 8 6s-.7 1.5-1.5 1.5zM20 20h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2V20h-3V9h3v1.6c.9-1.1 2.3-1.6 3.6-1.6 2.8 0 5.4 2.3 5.4 5.5V20z" />
                        </svg>
                      ),
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

            </div>
            <div className="mt-8 border-t border-white/5 text-center text-gray-400 pt-4">
              <p>
                &copy; {new Date().getFullYear()} The Influencer. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
