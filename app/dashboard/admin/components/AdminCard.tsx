"use client";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import Image from "next/image";
import { Card } from "./ui/card";

interface AdminCardProps {
  username: string;
  profileImage: string;
  platformIcon: string;
  platform: string;
  email: string;
  phone: string;
}

export function AdminCard({
  username,
  profileImage,
  platform,
  email,
  phone,
}: AdminCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <Card className="bg-zinc-800 text-white h-full flex flex-col items-center justify-center hover:scale-105 border-2 border-transparent hover:border-4 hover:border-[#6366F1] transition-transform duration-300 ease-in-out relative">
      {/* View Request Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="absolute top-2 right-2 bg-[#6366F1] text-white text-xs px-3 py-1 rounded"
      >
        View Request
      </button>

      <div className="p-4 flex flex-col items-center">
        <div className="relative h-20 w-20">
          {/* Profile Image */}
          <Image
            src={profileImage}
            alt={`${username} Profile`}
            width={80}
            height={80}
            className="rounded-full object-cover w-full h-full border-4 border-pink-500"
          />
          </div>
        <div className="text-center mt-2">
          <p className="text-sm text-gray-400">{username}</p>
        </div>
        <div className="mt-2">
          <p className="text-white text-sm">{currentDate}</p>
        </div>

        {/* Check and Cross Icons below Date */}
        <div className="mt-2 flex justify-center space-x-4">
          {/* Check Icon */}
          <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M16.293 5.293a1 1 0 011.414 1.414L9 14.414 5.293 10.707a1 1 0 111.414-1.414L9 11.586l6.293-6.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Cross Icon */}
          <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 7.586l4.293-4.293a1 1 0 111.414 1.414L11.414 9l4.293 4.293a1 1 0 11-1.414 1.414L10 10.414l-4.293 4.293a1 1 0 11-1.414-1.414L8.586 9 4.293 4.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Hold and Block Buttons */}
        <div className="mt-2 flex space-x-4 w-full px-4">
          <p className="bg-[#6366F1] text-white text-sm px-4 py-2 rounded-3xl w-full text-center">
            Hold
          </p>
          <p className="bg-[#6366F1] text-white hover:bg-red-700 text-sm px-4 py-2 rounded-3xl w-full text-center">
            Block
          </p>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Request Details"
      >
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-white text-sm mb-2">
            <strong>Name:</strong> {username}
          </p>
          <p className="text-white text-sm mb-2">
            <strong>Platform:</strong> {platform}
          </p>
          <p className="text-white text-sm mb-2">
            <strong>Email:</strong> {email}
          </p>
          <p className="text-white text-sm">
            <strong>Phone:</strong> {phone}
          </p>
        </div>
      </Modal>
    </Card>
  );
}
