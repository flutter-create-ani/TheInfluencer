"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
// import { CursorEffect } from "@/components/CursorEffect";
import { FooterModal } from "@/components/FooterModal";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
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
      <body className={`${inter.className} min-h-screen bg-[#0A0B1C] text-white`}>
        
        <header className="fixed top-0 w-full z-50 bg-[#0A0B1C]/90 backdrop-blur-md border-b border-white/10">
          <nav className="container mx-auto flex items-center justify-between h-16 px-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center space-x-3">
                <img src="/2.png" alt="Logo" className="h-10 w-10 object-cover rounded-full" />
                <span className="text-lg font-bold">The Influencer</span>
              </Link>
            </motion.div>
            <div className="hidden md:flex space-x-6">
              {["Home", "About", "Features", "Contact"].map((item, index) => (
                <motion.div
                  key={item}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </nav>
        </header>
        <main className="pt-20 container mx-auto px-6">{children}</main>
        <footer className="bg-[#0A0B1C] border-t border-white/10 mt-10 py-8 text-center">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => openModal("Blog", <p>Our blog content will be displayed here.</p>)} className="text-gray-300 hover:text-white transition-colors">Blog</button>
                </li>
                <li>
                  <button onClick={() => openModal("Support", <p>Our support information will be displayed here.</p>)} className="text-gray-300 hover:text-white transition-colors">Support</button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => openModal("Privacy Policy", <p>Our privacy policy will be displayed here.</p>)} className="text-gray-300 hover:text-white transition-colors">Privacy Policy</button>
                </li>
                <li>
                  <button onClick={() => openModal("Terms of Service", <p>Our terms of service will be displayed here.</p>)} className="text-gray-300 hover:text-white transition-colors">Terms of Service</button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4 justify-center">
                {[{ Icon: FaTwitter, href: "/twitter" }, { Icon: FaInstagram, href: "/instagram" }, { Icon: FaLinkedin, href: "/linkedin" }, { Icon: FaFacebook, href: "/facebook" }].map(({ Icon, href }, index) => (
                  <motion.a key={index} href={href} className="text-gray-400 hover:text-white transition-colors" variants={socialIconVariants} whileHover="hover">
                    <Icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 text-gray-400 text-xs">&copy; {currentYear} The Influencer. All rights reserved.</div>
        </footer>
        <FooterModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalContent.title} content={modalContent.content || <p>No content available.</p>} />
      </body>
    </html>
  );
}