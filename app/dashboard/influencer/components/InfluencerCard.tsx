import Image from "next/image";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface InfluencerCardProps {
  username: string;
  location: string;
  followers: string;
  engagementRate: string;
  profileImage: string;
  platformIcon: string;
  posts: string[];
}

export function InfluencerCard({
  username,
  location,
  followers,
  engagementRate,
  profileImage,
  platformIcon,
  posts,
}: InfluencerCardProps) {
  return (
    <Card className="bg-card text-white hover:scale-105 border-2 border-transparent hover:border-4 hover:border-[#6366F1] transition-transform duration-300 ease-in-out">
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12">
              <Image
                src={profileImage}
                alt={`${username} Profile`}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <Badge className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-blue-500 p-0 flex items-center justify-center">
                <Image
                  src={platformIcon}
                  alt={`${username} Platform`}
                  width={12}
                  height={12}
                />
              </Badge>
            </div>
            <div>
              <h3 className="font-semibold">{username}</h3>
              <p className="text-sm text-gray-400">{location}</p>
            </div>
          </div>
          <Button className="bg-[#6366F1] hover:bg-[#5355E8] text-white hover:scale-105 transition-transform duration-200">
            Analytics
          </Button>
        </div>
      </div>
      <div className="px-4 py-3 border-t border-white/10">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-black">Followers</p>
            <p className="font-semibold text-black">{followers}</p>
          </div>
          <div>
            <p className="text-sm text-black">Eng. Rate</p>
            <p className="font-semibold text-black">{engagementRate}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 bg-white/10 mt-4 overflow-hidden rounded-lg">
        {posts.map((post, i) => (
          <div
            key={i}
            className="relative aspect-square bg-card overflow-hidden rounded-lg border-2 border-transparent hover:border-[#6366F1] hover:border-4 transition-all duration-200"
          >
            <Image
              src={post}
              alt={`Post ${i + 1} by ${username}`}
              fill
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </Card>
  );
}
