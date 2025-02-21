import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "./ui/select";
  import { InfluencerCard } from "./InfluencerCard";
  
  const influencers = [
    {
      username: "Tani",
      location: "New York, USA",
      followers: "120K",
      engagementRate: "8.4%",
      profileImage: "/images/profile1.jpg",
      platformIcon: "/images/platform1.svg",
      posts: ["/images/post1.jpg", "/images/post1.jpg", "/images/post1.jpg"],
      email: "john@gmail.com",
      phone:"786538903",
      platform: "instagram",
    },
    {
      username: "Jane Smith",
      location: "Los Angeles, USA",
      followers: "98K",
      engagementRate: "7.2%",
      profileImage: "/images/profile1.jpg",
      platformIcon: "/images/platform1.svg",
      posts: ["/images/post1.jpg", "/images/post1.jpg", "/images/post1.jpg"],
      email: "john@gmail.com",
      phone:"786538903",
      platform: "instagram",
    },
    {
      username: "David Johnson",
      location: "London, UK",
      followers: "87K",
      engagementRate: "6.5%",
      profileImage: "/images/profile1.jpg",
      platformIcon: "/images/platform1.svg",
      posts: ["/images/post1.jpg", "/images/post1.jpg", "/images/post1.jpg"],
      email: "john@gmail.com",
      phone:"786538903",
      platform: "instagram",
    },
    {
      username: "Emily White",
      location: "Paris, France",
      followers: "105K",
      engagementRate: "9.1%",
      profileImage: "/images/profile1.jpg",
      platformIcon: "/images/platform1.svg",
      posts: ["/images/post1.jpg", "/images/post1.jpg", "/images/post1.jpg"],
      email: "john@gmail.com",
      phone:"786538903",
      platform: "instagram",
    },
    {
      username: "Michael Brown",
      location: "Berlin, Germany",
      followers: "76K",
      engagementRate: "5.9%",
      profileImage: "/images/profile1.jpg",
      platformIcon: "/images/platform1.svg",
      posts: ["/images/post1.jpg", "/images/post1.jpg", "/images/post1.jpg"],
      email: "john@gmail.com",
      phone:"786538903",
      platform: "instagram",
    },
    {
      username: "Sophia Davis",
      location: "Tokyo, Japan",
      followers: "110K",
      engagementRate: "7.8%",
      profileImage: "/images/profile1.jpg",
      platformIcon: "/images/platform1.svg",
      posts: ["/images/post1.jpg", "/images/post1.jpg", "/images/post1.jpg"],
      email: "john@gmail.com",
      phone:"786538903",
      platform: "instagram",
    },
    {
      username: "Liam Wilson",
      location: "Sydney, Australia",
      followers: "89K",
      engagementRate: "6.2%",
      profileImage: "/images/profile1.jpg",
      platformIcon: "/images/platform1.svg",
      posts: ["/images/post1.jpg", "/images/post1.jpg", "/images/post1.jpg"],
      email: "john@gmail.com",
      phone:"786538903",
      platform: "instagram",
    },
    {
      username: "Olivia Martinez",
      location: "Toronto, Canada",
      followers: "115K",
      engagementRate: "8.0%",
      profileImage: "/images/profile1.jpg",
      platformIcon: "/images/platform1.svg",
      posts: ["/images/post1.jpg", "/images/post1.jpg", "/images/post1.jpg"],
      email: "john@gmail.com",
      phone:"786538903",
      platform: "instagram",
    },
    {
      username: "Noah Lee",
      location: "Seoul, South Korea",
      followers: "95K",
      engagementRate: "6.9%",
      profileImage: "/images/profile1.jpg",
      platformIcon: "/images/platform1.svg",
      posts: ["/images/post1.jpg", "/images/post1.jpg", "/images/post1.jpg"],
      email: "john@gmail.com",
      phone:"786538903",
      platform: "instagram",
    },
    {
      username: "Ava Thompson",
      location: "Dubai, UAE",
      followers: "130K",
      engagementRate: "9.5%",
      profileImage: "/images/profile1.jpg",
      platformIcon: "/images/platform1.svg",
      posts: ["/images/post1.jpg", "/images/post1.jpg", "/images/post1.jpg"],
      email: "john@gmail.com",
      phone:"786538903",
      platform: "instagram",
    },
    {
      username: "James Anderson",
      location: "Mumbai, India",
      followers: "100K",
      engagementRate: "7.0%",
      profileImage: "/images/profile1.jpg",
      platformIcon: "/images/platform1.svg",
      posts: ["/images/post1.jpg", "/images/post1.jpg", "/images/post1.jpg"],
      email: "john@gmail.com",
      phone:"786538903",
      platform: "instagram",
    },
    {
      username: "Emma Wilson",
      location: "Rio de Janeiro, Brazil",
      followers: "108K",
      engagementRate: "7.7%",
      profileImage: "/images/profile1.jpg",
      platformIcon: "/images/platform1.svg",
      posts: ["/images/post1.jpg", "/images/post1.jpg", "/images/post1.jpg"],
      email: "john@gmail.com",
      phone:"786538903",
      platform: "instagram",
    },
  ];
  
  export function InfluencerGrid() {
    return (
      <div className="space-y-6">
        <div className="flex justify-end">
          <Select defaultValue="highest">
            <SelectTrigger className="w-[200px] bg-gray-800 text-white border-gray-600">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black border border-[--border]">
              <SelectItem value="highest">Highest Reach</SelectItem>
              <SelectItem value="lowest">Lowest Reach</SelectItem>
            </SelectContent>
          </Select>
        </div>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[800px]">
          {influencers.map((influencer, index) => (
            <InfluencerCard key={index} {...influencer} />
          ))}
        </div>
      </div>
    );
  }
  
  export default InfluencerGrid;
  