import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="py-20 bg-[#0A0B1C]">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
            About Influencer Directory
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-400">
            Connecting brands with the perfect influencers since 2023
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/about.avif"
              alt="Team working together"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            <p className="text-gray-400">
              At Influencer Directory, we're on a mission to revolutionize
              influencer marketing. We believe in the power of authentic
              connections between brands and influencers to create meaningful
              engagement with audiences worldwide.
            </p>
            <h2 className="text-2xl font-bold text-white">Our Story</h2>
            <p className="text-gray-400">
              Founded in 2023, Influencer Directory was born out of the need for
              a more efficient, transparent, and data-driven approach to
              influencer marketing. Our team of marketing experts and tech
              innovators came together to create a platform that simplifies the
              process of finding, vetting, and collaborating with influencers.
            </p>
            <h2 className="text-2xl font-bold text-white">Our Values</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Innovation in influencer discovery</li>
              <li>Transparency in metrics and pricing</li>
              <li>Data-driven decision making</li>
              <li>Fostering authentic partnerships</li>
              <li>Continuous improvement and learning</li>
            </ul>
            <Button className="bg-[#6366F1] hover:bg-[#5355E8] text-white mt-4">
              Join Our Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
