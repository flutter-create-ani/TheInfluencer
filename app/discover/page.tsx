"use client";

import { useState } from 'react';
import { InfluencerCard } from '@/components/ui/InfluencerCard';
import { Slider } from '@/components/Slider';
import { FaFilter, FaTimes } from 'react-icons/fa';
const collaborationTypes = ["All", "Full Time", "Part Time", "Occasional"];
const locations = ["All", "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata"];
const influencers = [
  {
    id: 1,
    name: "Aniket Kumar",
    image: "/influencers/aniket.jpg",
    category: "Tech & Gaming",
    followers: "100K+",
    instagram: "https://www.instagram.com/aniket_kumar_001/",
    linkedin: "https://www.linkedin.com/in/aniket-kumar-7131b9248/",
    engagement: "4.8%",
    location: "Mumbai",
    collaborationType: "Full Time",
    ratePerPost: 5000
  },
  {
    id: 2,
    name: "Riya Sharma",
    image: "/influencers/riya.jpg",
    category: "Fashion & Lifestyle",
    followers: "250K+",
    instagram: "https://www.instagram.com/riya_sharma_22/",
    linkedin: "https://www.linkedin.com/in/riya-sharma/",
    engagement: "5.2%",
    location: "Delhi",
    collaborationType: "Part Time",
    ratePerPost: 7000
  },
  {
    id: 3,
    name: "Rahul Verma",
    image: "/influencers/rahul.jpg",
    category: "Fitness & Health",
    followers: "180K+",
    instagram: "https://www.instagram.com/rahul_fit_guru/",
    linkedin: "https://www.linkedin.com/in/rahul-verma-fitness/",
    engagement: "6.0%",
    location: "Bangalore",
    collaborationType: "Contract",
    ratePerPost: 6000
  },
  {
    id: 4,
    name: "Neha Kapoor",
    image: "/influencers/neha.jpg",
    category: "Food & Travel",
    followers: "320K+",
    instagram: "https://www.instagram.com/nehakapoor_foodie/",
    linkedin: "https://www.linkedin.com/in/neha-kapoor/",
    engagement: "5.5%",
    location: "Hyderabad",
    collaborationType: "Freelance",
    ratePerPost: 8000
  },
  {
    id: 5,
    name: "Amit Raj",
    image: "/influencers/amit.jpg",
    category: "Finance & Investment",
    followers: "75K+",
    instagram: "https://www.instagram.com/amit_invests/",
    linkedin: "https://www.linkedin.com/in/amit-raj-finance/",
    engagement: "4.2%",
    location: "Chennai",
    collaborationType: "Full Time",
    ratePerPost: 5500
  },
  {
    id: 6,
    name: "Pooja Mehta",
    image: "/influencers/pooja.jpg",
    category: "Beauty & Skincare",
    followers: "200K+",
    instagram: "https://www.instagram.com/pooja_glam/",
    linkedin: "https://www.linkedin.com/in/pooja-mehta-beauty/",
    engagement: "5.7%",
    location: "Kolkata",
    collaborationType: "Part Time",
    ratePerPost: 7500
  },
  {
    id: 7,
    name: "Vikram Das",
    image: "/influencers/vikram.jpg",
    category: "Photography & Art",
    followers: "110K+",
    instagram: "https://www.instagram.com/vikram_clicks/",
    linkedin: "https://www.linkedin.com/in/vikram-das-photography/",
    engagement: "5.0%",
    location: "Pune",
    collaborationType: "Freelance",
    ratePerPost: 4800
  },
  {
    id: 8,
    name: "Sakshi Agarwal",
    image: "/influencers/sakshi.jpg",
    category: "Books & Education",
    followers: "90K+",
    instagram: "https://www.instagram.com/sakshi_reads/",
    linkedin: "https://www.linkedin.com/in/sakshi-agarwal-books/",
    engagement: "4.9%",
    location: "Jaipur",
    collaborationType: "Contract",
    ratePerPost: 5300
  },
  {
    id: 9,
    name: "Manoj Patel",
    image: "/influencers/manoj.jpg",
    category: "Motivation & Self-Development",
    followers: "140K+",
    instagram: "https://www.instagram.com/manoj_motivation/",
    linkedin: "https://www.linkedin.com/in/manoj-patel/",
    engagement: "5.3%",
    location: "Ahmedabad",
    collaborationType: "Full Time",
    ratePerPost: 6200
  },
  {
    id: 10,
    name: "Kavita Singh",
    image: "/influencers/kavita.jpg",
    category: "Technology & AI",
    followers: "170K+",
    instagram: "https://www.instagram.com/kavita_ai/",
    linkedin: "https://www.linkedin.com/in/kavita-singh-tech/",
    engagement: "5.8%",
    location: "Noida",
    collaborationType: "Part Time",
    ratePerPost: 6800
  }
];



const categories = ["All", "Lifestyle & Fashion", "Tech & Gaming", "Food", "Travel", "Fitness"];

export default function Discover() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("followers-desc");
  const [budgetRange, setBudgetRange] = useState([0, 50000]);
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedCollabType, setSelectedCollabType] = useState("All");

  // const filteredInfluencers = influencers.filter(influencer => {
  //   const matchesCategory = selectedCategory === "All" || influencer.category === selectedCategory;
  //   const matchesSearch = influencer.name.toLowerCase().includes(searchQuery.toLowerCase());
  //   return matchesCategory && matchesSearch;
  // });
  const filteredInfluencers = influencers
    .filter(influencer => {
      const matchesCategory = selectedCategory === "All" || influencer.category === selectedCategory;
      const matchesSearch = influencer.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation = selectedLocation === "All" || influencer.location === selectedLocation;
      const matchesCollabType = selectedCollabType === "All" || influencer.collaborationType === selectedCollabType;
      const matchesBudget = influencer.ratePerPost >= budgetRange[0] && influencer.ratePerPost <= budgetRange[1];
      return matchesCategory && matchesSearch && matchesLocation && matchesCollabType && matchesBudget;
    }).sort((a, b) => {
      if (sortBy === "followers-desc") return b.followers - a.followers;
      if (sortBy === "followers-asc") return a.followers - b.followers;
      return 0;
    });
  return (
    <div className="min-h-screen py-12 flex">
      {/* Sidebar Filters */}
      <div className={`fixed inset-y-0 left-0 transform ${showFilters ? 'translate-x-0' : '-translate-x-full'} w-64 bg-[#1A1B2E] p-6 overflow-y-auto transition-transform duration-300 ease-in-out z-40 md:relative md:translate-x-0`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Filters</h2>
          <button
            className="md:hidden"
            onClick={() => setShowFilters(false)}
          >
            <FaTimes />
          </button>
        </div>
        {/* Sort By */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Sort By</h3>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full p-2 rounded-lg bg-[#2A2B3E] border border-gray-700"
          >
            <option value="followers-desc">Followers (High to Low)</option>
            <option value="followers-asc">Followers (Low to High)</option>
          </select>
        </div>
        {/* Budget Range */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Budget Range (₹)</h3>
          <Slider
            min={0}
            max={50000}
            step={1000}
            value={budgetRange}
            onChange={setBudgetRange}
          />
          <div className="flex justify-between mt-2 text-sm">
            <span>₹{budgetRange[0]}</span>
            <span>₹{budgetRange[1]}</span>
          </div>
        </div>
        {/* Location */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Location</h3>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full p-2 rounded-lg bg-[#2A2B3E] border border-gray-700"
          >
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
        {/* Collaboration Type */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Collaboration Type</h3>
          <select
            value={selectedCollabType}
            onChange={(e) => setSelectedCollabType(e.target.value)}
            className="w-full p-2 rounded-lg bg-[#2A2B3E] border border-gray-700"
          >
            {collaborationTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Discover Influencers</h1>
          <button
            className="md:hidden bg-pink-500 p-2 rounded-lg"
            onClick={() => setShowFilters(true)}
          >
            <FaFilter />
          </button>
        </div>


        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Search influencers..."
            className="w-full p-3 rounded-lg bg-[#1A1B2E] border border-gray-700 focus:outline-none focus:border-pink-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full ${selectedCategory === category
                    ? 'bg-pink-500 text-white'
                    : 'bg-[#1A1B2E] text-gray-300 hover:bg-[#2A2B3E]'
                  }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Influencers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInfluencers.map((influencer) => (
            <InfluencerCard
              key={influencer.id}
              {...influencer}
            />
          ))}
        </div>

        {filteredInfluencers.length === 0 && (
          <div className="text-center text-gray-400 mt-8">
            No influencers found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}