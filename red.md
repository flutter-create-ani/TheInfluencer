"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
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
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => openModal("Privacy Policy", <p>Effective Date: February 21, 2025<br /><br />
                  <strong>Privacy Policy:</strong><br />
                  We respect your privacy and are committed to protecting your personal data. We collect minimal personal information necessary to provide our services and improve user experience. We do not sell, rent, or distribute your data to third parties. Users have full control over their data and can request modifications or deletions.<br /><br />
                  Contact us at: theinfluencer1001@gmail.com.</p>)} className="text-gray-300 hover:text-white transition-colors">Privacy Policy</button>
                </li>
                <li>
                  <button onClick={() => openModal("Terms of Service", <p>Effective Date: February 21, 2025<br /><br />
                  <strong>Terms of Service:</strong><br />
                  By using The Influencer, you agree to comply with our policies. Users must respect intellectual property rights, refrain from prohibited activities, and ensure their content abides by applicable laws. We reserve the right to suspend or terminate accounts that violate these terms.<br /><br />
                  Users are responsible for maintaining the security of their accounts. We are not liable for damages resulting from misuse or unauthorized access.<br /><br />
                  For any inquiries, contact us at: theinfluencer1001@gmail.com.</p>)} className="text-gray-300 hover:text-white transition-colors">Terms of Service</button>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <FooterModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalContent.title} content={modalContent.content || <p>No content available.</p>} />
      </body>
    </html>
  );
}
