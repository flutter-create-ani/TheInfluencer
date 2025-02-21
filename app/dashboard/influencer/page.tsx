"use client";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { FilterSidebar } from "./components/FilterSidebar";
import { InfluencerGrid } from "./components/InfluencerGrid";
import content from "@/lib/content";
import { User } from "lucide-react"; // Import User Icon

export default function InfluencerDashboard() {
  const pathname = usePathname();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const userIconRef = useRef<HTMLDivElement | null>(null); // ✅ Correctly typed

  useEffect(() => {
    if (typeof window !== "undefined" && pathname === "/dashboard/influencer") {
      document.body.classList.add("hide-header");
      setIsHeaderVisible(false);
    } else {
      document.body.classList.remove("hide-header");
      setIsHeaderVisible(true);
    }

    return () => {
      document.body.classList.remove("hide-header");
      setIsHeaderVisible(true);
    };
  }, [pathname]);

  const handleToggleModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    } else if (userIconRef.current) {
      const rect = userIconRef.current.getBoundingClientRect(); // ✅ No more TypeScript error
      setModalPosition({
        top: rect.top + window.scrollY + rect.height + 5, // Below icon
        left: rect.left + window.scrollX - 40, // Adjust left to align with icon
      });
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[--background] text-[--foreground] relative">
      {/* User Icon Circle (Click to Toggle Modal) */}
      <div
        ref={userIconRef}
        className="absolute top-2 right-20 bg-pink-800 p-1 rounded-full border border-gray-600 shadow-lg cursor-pointer hover:bg-blue-600 transition w-10 h-10 flex items-center justify-center z-50"
        onClick={handleToggleModal} // ✅ Toggle modal on click
        onMouseEnter={(e) => e.currentTarget.classList.add("bg-blue-500")}
        onMouseLeave={(e) => e.currentTarget.classList.remove("bg-blue-500")}
      >
        <User className="text-white w-6 h-6" />
      </div>

      {/* User Options Modal (Positioned Near Icon) */}
      {isModalOpen && (
        <div
          className="absolute bg-gray-800 text-white p-4 rounded-lg shadow-lg border border-gray-600 w-48"
          style={{ top: modalPosition.top, left: modalPosition.left }}
        >
          <ul className="space-y-2">
            <li className="p-2 hover:bg-gray-700 rounded">Profile</li>
            <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">View History</li>
            <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Logout</li>
          </ul>
        </div>
      )}

      <main className={`container mx-auto px-4 py-8 ${isHeaderVisible ? "pt-16" : "pt-0"}`}>
        {/* Influencer Dashboard Heading */}
        <div className="relative flex justify-center">
          <h1 className="text-4xl font-bold mb-4 text-center transition-transform duration-300 text-white-600 hover:text-pink-600">
            <span className="inline-block transform hover:scale-105 transition-all">
              Influencer Dashboard
            </span>
          </h1>
        </div>

        {/* Brand Message */}
        <p className="text-xl mb-8 text-center transition-transform duration-300 text-white-500 hover:text-pink-500">
          <span className="inline-block transform hover:scale-105 transition-all">
            Welcome to your Influencer dashboard! {content.brandMessage}
          </span>
        </p>

        {/* Flex container for Sidebar & Influencer Grid */}
        <div className="grid md:grid-cols-[300px,1fr] gap-8 items-start">
          <FilterSidebar />
          <InfluencerGrid />
        </div>
      </main>
    </div>
  );
}
