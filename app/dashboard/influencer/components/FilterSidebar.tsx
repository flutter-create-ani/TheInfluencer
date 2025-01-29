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

export function FilterSidebar() {
  const countries = [
    "United States",
    "United Kingdom",
    "Europe",
    "Canada",
    "Australia",
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-base font-semibold">FILTER BY</h3>

      <div className="space-y-6">
        <Select defaultValue="instagram">
          <SelectTrigger className="bg-secondary border-0">
            <SelectValue placeholder="Select platform" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="instagram">Instagram</SelectItem>
            <SelectItem value="youtube">YouTube</SelectItem>
            <SelectItem value="tiktok">TikTok</SelectItem>
          </SelectContent>
        </Select>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search by keyword"
            className="pl-10 bg-secondary border-0"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm">Bio</label>
          <Input
            placeholder="Enter keywords in bio to filter by"
            className="bg-secondary border-0"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm">Category</label>
          <Select>
            <SelectTrigger className="bg-secondary border-0">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="arts">Arts</SelectItem>
              <SelectItem value="beauty">Beauty</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="celebrities">Celebrities</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm">Country</h4>
          <div className="space-y-3">
            {countries.map((country) => (
              <div key={country} className="flex items-center space-x-2">
                <Checkbox id={country} />
                <label htmlFor={country} className="text-sm text-gray-600">
                  {country}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm">Total Reach</label>
          <div className="grid grid-cols-2 gap-2">
            <Input placeholder="Min" className="bg-secondary border-0" />
            <Input placeholder="Max" className="bg-secondary border-0" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm">Engagement Rate</label>
          <div className="grid grid-cols-2 gap-2">
            <div className="relative">
              <Input placeholder="Min" className="bg-secondary border-0 pr-8" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                %
              </span>
            </div>
            <div className="relative">
              <Input placeholder="Max" className="bg-secondary border-0 pr-8" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                %
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Button className="w-full bg-primary hover:bg-primary/90">
            Search
          </Button>
          <Button
            variant="outline"
            className="w-full border-0 bg-secondary hover:bg-secondary/80"
          >
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
}
