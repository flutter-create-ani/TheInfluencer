import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { InfluencerCard } from "./InfluencerCard";

const MOCK_INFLUENCERS = [
  {
    username: "@cristiano",
    location: "Portugal",
    followers: "605M",
    engagementRate: "2.1%",
    profileImage: "/placeholder.svg?height=48&width=48",
    platformIcon: "/placeholder.svg?height=12&width=12",
    posts: Array(3).fill("/placeholder.svg?height=150&width=150"),
  },
  {
    username: "@leomessi",
    location: "Argentina",
    followers: "493M",
    engagementRate: "1.8%",
    profileImage: "/placeholder.svg?height=48&width=48",
    platformIcon: "/placeholder.svg?height=12&width=12",
    posts: Array(3).fill("/placeholder.svg?height=150&width=150"),
  },
  {
    username: "@selenagomez",
    location: "United States",
    followers: "429M",
    engagementRate: "1.5%",
    profileImage: "/placeholder.svg?height=48&width=48",
    platformIcon: "/placeholder.svg?height=12&width=12",
    posts: Array(3).fill("/placeholder.svg?height=150&width=150"),
  },
  {
    username: "@kyliejenner",
    location: "United States",
    followers: "398M",
    engagementRate: "1.2%",
    profileImage: "/placeholder.svg?height=48&width=48",
    platformIcon: "/placeholder.svg?height=12&width=12",
    posts: Array(3).fill("/placeholder.svg?height=150&width=150"),
  },
  {
    username: "@therock",
    location: "United States",
    followers: "389M",
    engagementRate: "1.1%",
    profileImage: "/placeholder.svg?height=48&width=48",
    platformIcon: "/placeholder.svg?height=12&width=12",
    posts: Array(3).fill("/placeholder.svg?height=150&width=150"),
  },
  {
    username: "@arianagrande",
    location: "United States",
    followers: "377M",
    engagementRate: "1.0%",
    profileImage: "/placeholder.svg?height=48&width=48",
    platformIcon: "/placeholder.svg?height=12&width=12",
    posts: Array(3).fill("/placeholder.svg?height=150&width=150"),
  },
  {
    username: "@kimkardashian",
    location: "United States",
    followers: "364M",
    engagementRate: "0.9%",
    profileImage: "/placeholder.svg?height=48&width=48",
    platformIcon: "/placeholder.svg?height=12&width=12",
    posts: Array(3).fill("/placeholder.svg?height=150&width=150"),
  },
  {
    username: "@beyonce",
    location: "United States",
    followers: "319M",
    engagementRate: "2.3%",
    profileImage: "/placeholder.svg?height=48&width=48",
    platformIcon: "/placeholder.svg?height=12&width=12",
    posts: Array(3).fill("/placeholder.svg?height=150&width=150"),
  },
  {
    username: "@nike",
    location: "United States",
    followers: "303M",
    engagementRate: "0.7%",
    profileImage: "/placeholder.svg?height=48&width=48",
    platformIcon: "/placeholder.svg?height=12&width=12",
    posts: Array(3).fill("/placeholder.svg?height=150&width=150"),
  },
  {
    username: "@natgeo",
    location: "United States",
    followers: "280M",
    engagementRate: "0.5%",
    profileImage: "/placeholder.svg?height=48&width=48",
    platformIcon: "/placeholder.svg?height=12&width=12",
    posts: Array(3).fill("/placeholder.svg?height=150&width=150"),
  },
  {
    username: "@justinbieber",
    location: "Canada",
    followers: "292M",
    engagementRate: "1.4%",
    profileImage: "/placeholder.svg?height=48&width=48",
    platformIcon: "/placeholder.svg?height=12&width=12",
    posts: Array(3).fill("/placeholder.svg?height=150&width=150"),
  },
  {
    username: "@taylorswift",
    location: "United States",
    followers: "272M",
    engagementRate: "2.0%",
    profileImage: "/placeholder.svg?height=48&width=48",
    platformIcon: "/placeholder.svg?height=12&width=12",
    posts: Array(3).fill("/placeholder.svg?height=150&width=150"),
  },
];

export function InfluencerGrid() {
  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Select defaultValue="highest">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="highest">Highest Reach</SelectItem>
            <SelectItem value="lowest">Lowest Reach</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_INFLUENCERS.map((influencer) => (
          <InfluencerCard key={influencer.username} {...influencer} />
        ))}
      </div>
    </div>
  );
}
