"use client";

import React from "react";
import { useState } from "react";
import { InfluencerCard } from "@/components/ui/InfluencerCard";
import { Slider } from "@/components/Slider";
import { FaFilter, FaTimes } from "react-icons/fa";

const collaborationTypes = ["All", "Full Time", "Part Time", "Occasional"];
const locations = [
  "All",
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
];
const categories = [
  "All",
  "Lifestyle & Fashion",
  "Tech & Gaming",
  "Food",
  "Travel",
  "Fitness",
];

const influencers = [
  {
    id: 1,
    name: "Priya Sharma",
    username: "@priyasharma",
    category: "Lifestyle & Fashion",
    followers: "500000",
    engagement: "3.2",
    ratePerPost: 25000,
    location: "Mumbai",
    collaborationType: "Full Time",
    imageUrl: "/influencers/priya.jpg",
    image: "/influencers/priya.jpg", // Add this
    instagram: "https://instagram.com/priyasharma", // Add this
    linkedin: "https://linkedin.com/in/priyasharma", // Add this
  },
  {
    id: 2,
    name: "Rahul Kumar",
    username: "@techrahul",
    category: "Tech & Gaming",
    followers: "750000",
    engagement: "4.1",
    ratePerPost: 35000,
    location: "Bangalore",
    collaborationType: "Part Time",
    imageUrl: "/influencers/rahul.jpg",
    image: "/influencers/rahul.jpg",
    instagram: "https://instagram.com/techrahul",
    linkedin: "https://linkedin.com/in/rahulkumar",
  },
  {
    id: 3,
    name: "Neha Gupta",
    username: "@nehafoodie",
    category: "Food",
    followers: "300000",
    engagement: "5.5",
    ratePerPost: 15000,
    location: "Delhi",
    collaborationType: "Occasional",
    imageUrl: "/influencers/neha.jpg",
    image: "/influencers/neha.jpg",
    instagram: "https://instagram.com/nehafoodie",
    linkedin: "https://linkedin.com/in/nehagupta",
  },
];

export default function Discover() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("followers-desc");
  const [budgetRange, setBudgetRange] = useState([0, 50000]);
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedCollabType, setSelectedCollabType] = useState("All");

  const filteredInfluencers = influencers
    .filter((influencer) => {
      const matchesCategory =
        selectedCategory === "All" || influencer.category === selectedCategory;
      const matchesSearch = influencer.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesLocation =
        selectedLocation === "All" || influencer.location === selectedLocation;
      const matchesCollabType =
        selectedCollabType === "All" ||
        influencer.collaborationType === selectedCollabType;
      const matchesBudget =
        influencer.ratePerPost >= budgetRange[0] &&
        influencer.ratePerPost <= budgetRange[1];
      return (
        matchesCategory &&
        matchesSearch &&
        matchesLocation &&
        matchesCollabType &&
        matchesBudget
      );
    })
    .sort((a, b) => {
      if (sortBy === "followers-desc")
        return parseInt(b.followers) - parseInt(a.followers);
      if (sortBy === "followers-asc")
        return parseInt(a.followers) - parseInt(b.followers);
      return 0;
    });

  return (
    <div className="min-h-screen bg-[#0F1021]">
      <div className="flex">
        {/* Sidebar Filters */}
        <div
          className={`fixed inset-y-0 left-0 transform ${
            showFilters ? "translate-x-0" : "-translate-x-full"
          } w-72 bg-[#1A1B2E] p-6 overflow-y-auto transition-transform duration-300 ease-in-out z-40 md:relative md:translate-x-0 border-r border-gray-800`}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">Filters</h2>
            <button
              className="md:hidden text-gray-400 hover:text-white transition-colors"
              onClick={() => setShowFilters(false)}
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Filter Sections */}
          <div className="space-y-8">
            {/* Sort By */}
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-3">
                Sort By
              </h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-3 rounded-lg bg-[#2A2B3E] border border-gray-700 text-white focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
              >
                <option value="followers-desc">Followers (High to Low)</option>
                <option value="followers-asc">Followers (Low to High)</option>
              </select>
            </div>

            {/* Budget Range */}
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-3">
                Budget Range (₹)
              </h3>
              <Slider
                min={0}
                max={50000}
                step={1000}
                value={budgetRange}
                onChange={setBudgetRange}
              />
              <div className="flex justify-between mt-3 text-sm text-gray-400">
                <span>₹{budgetRange[0].toLocaleString()}</span>
                <span>₹{budgetRange[1].toLocaleString()}</span>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-3">
                Location
              </h3>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full p-3 rounded-lg bg-[#2A2B3E] border border-gray-700 text-white focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            {/* Collaboration Type */}
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-3">
                Collaboration Type
              </h3>
              <select
                value={selectedCollabType}
                onChange={(e) => setSelectedCollabType(e.target.value)}
                className="w-full p-3 rounded-lg bg-[#2A2B3E] border border-gray-700 text-white focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
              >
                {collaborationTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-h-screen p-6 md:p-8 lg:p-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Discover Influencers
              </h1>
              <button
                className="md:hidden bg-pink-500 p-3 rounded-lg text-white hover:bg-pink-600 transition-colors"
                onClick={() => setShowFilters(true)}
              >
                <FaFilter size={18} />
              </button>
            </div>

            {/* Search and Categories */}
            <div className="space-y-6 mb-10">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search influencers..."
                  className="w-full p-4 pl-5 rounded-xl bg-[#1A1B2E] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-pink-500 text-white shadow-lg shadow-pink-500/25"
                        : "bg-[#1A1B2E] text-gray-300 hover:bg-[#2A2B3E] hover:text-white"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Section */}
            <div className="relative min-h-[400px]">
              {filteredInfluencers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                  {filteredInfluencers.map((influencer) => (
                    <div key={influencer.id} className="h-full">
                      <InfluencerCard {...influencer} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-16 px-4">
                  <div className="text-gray-400 text-lg mb-3">
                    No influencers found matching your criteria.
                  </div>
                  <p className="text-gray-500">
                    Try adjusting your filters or search terms.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
