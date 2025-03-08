import React from "react";
import {
  Instagram,
  Linkedin,
  Users,
  Zap,
  MapPin,
  DollarSign,
  Clock,
} from "lucide-react";
import Image from "next/image";

interface InfluencerCardProps {
  name: string;
  image: string;
  category: string;
  followers: string;
  instagram: string;
  linkedin: string;
  engagement: string;
  location: string;
  collaborationType: string;
  ratePerPost: number;
}

export function InfluencerCard({
  name,
  image,
  category,
  followers,
  instagram,
  linkedin,
  engagement,
  location,
  collaborationType,
  ratePerPost,
}: InfluencerCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1B2E] to-[#2A2B3E] p-1 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-pink-500/20">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative h-full rounded-xl bg-[#1A1B2E] p-5 transition-transform duration-300">
        {/* Header Section */}
        <div className="mb-6 flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative h-16 w-16 overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 to-purple-500" />
              <Image
                src={
                  image ||
                  `https://source.unsplash.com/300x300/?portrait&${name}`
                }
                fill
                alt={name}
                className="relative h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-full object-cover translate-x-[1px] translate-y-[1px]"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-pink-500 transition-colors duration-300">
                {name}
              </h3>
              <span className="inline-block rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 px-3 py-1 text-sm text-pink-500">
                {category}
              </span>
            </div>
          </div>

          <div className="flex space-x-2">
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#2A2B3E] p-2 text-pink-500 transition-all duration-300 hover:bg-pink-500 hover:text-white hover:scale-110"
            >
              <Instagram size={18} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#2A2B3E] p-2 text-pink-500 transition-all duration-300 hover:bg-pink-500 hover:text-white hover:scale-110"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-[#2A2B3E] p-3 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 text-pink-500">
              <Users size={16} />
              <span className="text-sm">Followers</span>
            </div>
            <p className="mt-1 text-lg font-bold text-white">{followers}</p>
          </div>

          <div className="rounded-xl bg-[#2A2B3E] p-3 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 text-pink-500">
              <Zap size={16} />
              <span className="text-sm">Engagement</span>
            </div>
            <p className="mt-1 text-lg font-bold text-white">{engagement}</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-gray-400">
            <MapPin size={16} className="text-pink-500" />
            <span>{location}</span>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <Clock size={16} className="text-pink-500" />
            <span>{collaborationType}</span>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <DollarSign size={16} className="text-pink-500" />
            <span>₹{ratePerPost.toLocaleString()} per post</span>
          </div>
        </div>

        {/* Contact Button */}
        <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 py-3 text-white transition-all duration-300 hover:from-pink-600 hover:to-purple-600 hover:shadow-lg hover:shadow-pink-500/25 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-[#1A1B2E]">
          Contact Influencer
        </button>
      </div>
    </div>
  );
}
