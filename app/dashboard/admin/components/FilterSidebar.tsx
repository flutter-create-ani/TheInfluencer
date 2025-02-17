"use client";

import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";

export function FilterSidebar() {
  const countries = [
    "United States",
    "United Kingdom",
    "Europe",
    "Canada",
    "Australia",
  ];

  // State for all filter inputs
  const [platform, setPlatform] = useState("instagram");
  const [keyword, setKeyword] = useState("");
  const [bio, setBio] = useState("");
  const [category, setCategory] = useState("");
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [totalReachMin, setTotalReachMin] = useState("");
  const [totalReachMax, setTotalReachMax] = useState("");
  const [engagementRateMin, setEngagementRateMin] = useState("");
  const [engagementRateMax, setEngagementRateMax] = useState("");

  // Clear All function
  const handleClearAll = () => {
    setPlatform("instagram");
    setKeyword("");
    setBio("");
    setCategory("");
    setSelectedCountries([]);
    setTotalReachMin("");
    setTotalReachMax("");
    setEngagementRateMin("");
    setEngagementRateMax("");
  };

  // Handle country checkbox changes
  const handleCountryChange = (country: string) => {
    setSelectedCountries(
      (prev) =>
        prev.includes(country)
          ? prev.filter((c) => c !== country) // Remove country if already selected
          : [...prev, country] // Add country if not selected
    );
  };

  return (
    <div className="space-y-8 p-6 bg-[--background] text-[--foreground] rounded-lg shadow-sm border-2 border-transparent hover:border-pink-500 hover:scale-105 transition-all duration-300">
      <h3 className="text-lg font-semibold text-[--foreground]">FILTER BY</h3>

      <div className="space-y-6">
        {/* Platform Select */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[--foreground]">
            Platform
          </label>
          <Select value={platform} onValueChange={setPlatform}>
            <SelectTrigger className="w-full bg-[--background] border border-[--border] hover:border-[--primary] focus-visible:border-[--primary] focus-visible:ring-2 focus-visible:ring-[--primary]/50 text-[--foreground] outline-none">
              <SelectValue placeholder="Select platform" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black border border-[--border]">
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="youtube">YouTube</SelectItem>
              <SelectItem value="tiktok">TikTok</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Keyword Search */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[--foreground]">
            Search by Keyword
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[--muted-foreground]" />
            <Input
              placeholder="Enter keywords"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full pl-10 bg-[--background] border border-[--border] hover:border-[--primary] focus:border-[--primary] focus:ring-2 focus:ring-[--primary]/50 text-[--foreground] placeholder:text-[--muted-foreground]"
            />
          </div>
        </div>

        {/* Bio Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[--foreground]">Bio</label>
          <Input
            placeholder="Enter keywords in bio to filter by"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full bg-[--background] border border-[--border] hover:border-[--primary] focus:border-[--primary] focus:ring-2 focus:ring-[--primary]/50 text-[--foreground] placeholder:text-[--muted-foreground]"
          />
        </div>

        {/* Category Select */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[--foreground]">
            Category
          </label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full bg-[--background] border border-[--border] hover:border-[--primary] focus-visible:border-[--primary] focus-visible:ring-2 focus-visible:ring-[--primary]/50 text-[--foreground] outline-none">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent className="bg-white text-black border border-[--border]">
              <SelectItem value="arts">Arts</SelectItem>
              <SelectItem value="beauty">Beauty</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="celebrities">Celebrities</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Country Checkboxes */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-[--foreground]">Country</h4>
          <div className="space-y-3">
            {countries.map((country) => (
              <div key={country} className="flex items-center space-x-2">
                <Checkbox
                  id={country}
                  checked={selectedCountries.includes(country)}
                  onCheckedChange={() => handleCountryChange(country)}
                  className="text-[--primary] border-[--border]"
                />
                <label
                  htmlFor={country}
                  className="text-sm text-[--foreground]"
                >
                  {country}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Total Reach Inputs */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[--foreground]">
            Total Reach
          </label>
          <div className="grid grid-cols-2 gap-2">
            <Input
              placeholder="Min"
              value={totalReachMin}
              onChange={(e) => setTotalReachMin(e.target.value)}
              className="w-full bg-[--background] border border-[--border] hover:border-[--primary] focus:border-[--primary] focus:ring-2 focus:ring-[--primary]/50 text-[--foreground] placeholder:text-[--muted-foreground]"
            />
            <Input
              placeholder="Max"
              value={totalReachMax}
              onChange={(e) => setTotalReachMax(e.target.value)}
              className="w-full bg-[--background] border border-[--border] hover:border-[--primary] focus:border-[--primary] focus:ring-2 focus:ring-[--primary]/50 text-[--foreground] placeholder:text-[--muted-foreground]"
            />
          </div>
        </div>

        {/* Engagement Rate Inputs */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[--foreground]">
            Engagement Rate
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div className="relative">
              <Input
                placeholder="Min"
                value={engagementRateMin}
                onChange={(e) => setEngagementRateMin(e.target.value)}
                className="w-full bg-[--background] border border-[--border] hover:border-[--primary] focus:border-[--primary] focus:ring-1 focus:ring-[--primary]/50 text-[--foreground] placeholder:text-[--muted-foreground] pr-8"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[--muted-foreground]">
                %
              </span>
            </div>
            <div className="relative">
              <Input
                placeholder="Max"
                value={engagementRateMax}
                onChange={(e) => setEngagementRateMax(e.target.value)}
                className="w-full bg-[--background] border border-[--border] hover:border-[--primary] focus:border-[--primary] focus:ring-1 focus:ring-[--primary]/50 text-[--foreground] placeholder:text-[--muted-foreground] pr-8"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[--muted-foreground]">
                %
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <Button className="w-full border border-neutral-300 bg-[--background] hover:bg-[--background]/80 hover:border-pink-500 text-[--foreground]  hover:text-[--foreground] transition-all duration-300 active:scale-95 focus:ring-2 focus:ring-pink-500"
          >
            Search
          </Button>
          <Button
            variant="outline"
            onClick={handleClearAll}
            className="w-full border border-neutral-300 bg-[--background] hover:bg-[--background]/80 hover:border-pink-500 text-[--foreground] hover:text-[--foreground] transition-all duration-300 active:scale-95 focus:ring-2 focus:ring-pink-500"
          >
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
}
