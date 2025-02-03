import { FilterSidebar } from "./components/FilterSidebar";
import { InfluencerGrid } from "./components/InfluencerGrid";

export default function InfluencerDashboard() {
  return (
    <div className="min-h-screen bg-[--background] text-[--foreground]">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center transition-transform duration-300">
          <span className="inline-block hover:text-[--primary] transform hover:scale-105 transition-all">
            Influencer Dashboard
          </span>
        </h1>
        <p className="text-xl mb-8 text-center transition-transform duration-300">
          <span className="inline-block hover:text-[--primary] transform hover:scale-105 transition-all">
            Welcome to your influencer dashboard!
          </span>
        </p>

        {/* Flex container to keep items aligned */}
        <div className="grid md:grid-cols-[300px,1fr] gap-8 items-start">
          <FilterSidebar />
          <InfluencerGrid />{" "}
          {/* Removed extra padding that caused misalignment */}
        </div>
      </main>
    </div>
  );
}
