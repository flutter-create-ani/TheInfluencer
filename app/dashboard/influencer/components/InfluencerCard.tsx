"use client"
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Modal } from "@/components/ui/Modal";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

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
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);
  const data= [
    { name: "Followers", value: parseInt(followers.replace(/,/g, "")) },
    { name: "Eng. Rate", value: parseFloat(engagementRate) },
  ];
  return (
    <Card className="bg-card text-white h-full flex flex-col justify-between hover:scale-105 border-2 border-transparent hover:border-4 hover:border-[#6366F1] transition-transform duration-300 ease-in-out">

      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12">
              <Image
                src={profileImage}
                alt={`${username} Profile`}
                width={48}
                height={48}
                className="rounded-full object-cover w-full h-full"
              />
              <Badge className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-white-500 p-0 flex items-center justify-center">
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
          <Button 
            className="bg-[#6366F1] hover:bg-[#5355E8] text-white hover:scale-105 transition-transform duration-200"
            onClick={() => setIsAnalyticsOpen(true)} // Opens the modal
            >

            Analytics
          </Button>
        </div>
      </div>
      <div className="<px-4 py-3 border-t border-white/10 min-h-[80px] flex flex-col justify-center">

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
            className="relative aspect-square bg-card overflow-hidden rounded-lg border-2 border-transparent text-card-foreground shadow-sm transition-transform duration-200 hover:scale-105"
                 /*hover:border-[#f1aa63] hover:border-4 transition-all duration-200"*/
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
      {isAnalyticsOpen && (
      <Modal  
              isOpen={isAnalyticsOpen}
               onClose={() => setIsAnalyticsOpen(false)} title="Analytics Data">
              <ResponsiveContainer width="100%" height={200}>
             <BarChart layout="vertical" data={data}>
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" width={80} />
              <Tooltip />
               <Bar dataKey="value" fill="#6366F1" barSize={30} radius={[5, 5, 5, 5]}/>
           </BarChart>
      </ResponsiveContainer>
      </Modal>
   
     )}
    </Card>
  );
}
