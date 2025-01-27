import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Globe, Star, Users, BarChart } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Advanced Search",
    description:
      "Find influencers across Instagram, YouTube, TikTok, and more with our powerful search engine.",
  },
  {
    icon: Filter,
    title: "Smart Filters",
    description:
      "Filter by niche, follower count, engagement rate, location, and other key metrics.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Access influencers from over 190 countries and territories worldwide.",
  },
  {
    icon: Star,
    title: "Quality Metrics",
    description:
      "Evaluate influencers based on engagement, authenticity, and performance metrics.",
  },
  {
    icon: Users,
    title: "Audience Insights",
    description:
      "Get detailed demographics and interests data for influencer audiences.",
  },
  {
    icon: BarChart,
    title: "Campaign Analytics",
    description:
      "Track and measure the success of your influencer marketing campaigns.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="py-20 bg-[#0A0B1C]">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
            Our Powerful Features
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-400">
            Discover the tools that make Influencer Directory the leading
            platform for influencer marketing
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/5 backdrop-blur-sm"
            >
              <CardHeader>
                <feature.icon className="w-10 h-10 text-[#6366F1] mb-4" />
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button className="bg-[#6366F1] hover:bg-[#5355E8] text-white">
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </div>
  );
}
