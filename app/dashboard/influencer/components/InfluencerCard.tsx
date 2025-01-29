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
    <Card className="bg-card text-white">
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12">
              <Image
                src={profileImage || "/placeholder.svg"}
                alt="Profile"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <Badge className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-blue-500 p-0 flex items-center justify-center">
                <Image
                  src={platformIcon || "/placeholder.svg"}
                  alt="Platform"
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
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:text-white hover:bg-white/10"
          >
            Analytics
          </Button>
        </div>
      </div>
      <div className="px-4 py-3 border-t border-white/10">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-400">Followers</p>
            <p className="font-semibold">{followers}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Eng. Rate</p>
            <p className="font-semibold">{engagementRate}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-px bg-white/10">
        {posts.map((post, i) => (
          <div key={i} className="aspect-square bg-card">
            <Image
              src={post || "/placeholder.svg"}
              alt={`Post ${i + 1}`}
              width={150}
              height={150}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </Card>
  );
}
  