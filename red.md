"use client"; // Ensure it's a Client Component

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function RegistrationButtons() {
  const [iframeUrl, setIframeUrl] = useState(null);

  // Handle Escape key press to close the iframe
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIframeUrl(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Buttons */}
      <div className="flex space-x-4">
        <Button
          size="lg"
          className="bg-[#6366F1] hover:bg-[#5355E8] text-white"
          onClick={() => setIframeUrl("https://www.google.com")}
        >
          Register for Influencer
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="border-white/10 text-gray-400 hover:text-white"
          onClick={() => setIframeUrl("https://www.bing.com")}
        >
          Register for Brand
        </Button>
      </div>

      {/* Overlay with iframe */}
      <AnimatePresence>
        {iframeUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative bg-white rounded-2xl shadow-lg w-[90vw] h-[80vh] max-w-4xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIframeUrl(null)}
                className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10"
              >
                ✖
              </button>

              {/* iFrame */}
              <iframe
                src={iframeUrl}
                className="w-full h-full rounded-2xl"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
