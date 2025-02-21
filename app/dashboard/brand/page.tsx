"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FilterSidebar } from "./components/FilterSidebar";
import { BrandGrid } from "./components/BrandGrid";
import content from "@/lib/content";
import { User } from "lucide-react"; // Import User Icon
import { Modal } from "@/components/ui/Modal"; // Import Modal Component

export default function InfluencerDashboard() {
  const pathname = usePathname();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && pathname === "/dashboard/brand") {
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

  return (
    <div className="min-h-screen bg-[--background] text-[--foreground] relative">
      {/* Larger User Icon Positioned Very Close to "Influencer Dashboard" */}
      <div 
        className="absolute top-0 right-20 bg-gray-800 p-5 rounded-full border border-gray-600 shadow-lg cursor-pointer hover:bg-blue-600 transition w-24 h-24 flex items-center justify-center z-50"
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={(e) => e.currentTarget.classList.add("bg-blue-500")}
        onMouseLeave={(e) => e.currentTarget.classList.remove("bg-blue-500")}
      >
        <User className="text-white w-14 h-14" />
      </div>

      {/* User Options Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="User Options">
        <ul className="text-white space-y-2">
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer" onClick={() => { setIsProfileModalOpen(true); setIsModalOpen(false); }}>Profile</li>
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">View History</li>
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Logout</li>
        </ul>
      </Modal>

      {/* Profile Modal */}
      <Modal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} title="Profile">
        <div className="text-white space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white" />
          <input type="email" placeholder="Email" className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white" />
          <input type="text" placeholder="Phone No" className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white" />
          <input type="text" placeholder="Platform" className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white" />
        </div>
      </Modal>

      <main className={`container mx-auto px-4 py-8 ${isHeaderVisible ? "pt-16" : "pt-0"}`}>
        {/* Influencer Dashboard Heading */}
        <div className="relative flex justify-center">
          <h1 className="text-4xl font-bold mb-4 text-center transition-transform duration-300 text-white-600 hover:text-pink-600">
            <span className="inline-block transform hover:scale-105 transition-all">
              Brand Dashboard
            </span>
          </h1>
        </div>

        {/* Brand Message */}
        <p className="text-xl mb-8 text-center transition-transform duration-300 text-white-500 hover:text-pink-500">
          <span className="inline-block transform hover:scale-105 transition-all">
            Welcome to your brand dashboard! {content.brandMessage}
          </span>
        </p>

        {/* Flex container for Sidebar & Influencer Grid */}
        <div className="grid md:grid-cols-[300px,1fr] gap-8 items-start">
          <FilterSidebar />
          <BrandGrid />
        </div>
      </main>
    </div>
  );
}
