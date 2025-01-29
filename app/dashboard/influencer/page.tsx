import { Header } from "./components/Header";
import { FilterSidebar } from "./components/FilterSidebar";
import { InfluencerGrid } from "./components/InfluencerGrid";

export default function InfluencerDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Influencer Dashboard</h1>
        <p className="text-xl mb-8">Welcome to your influencer dashboard!</p>

        <div className="grid md:grid-cols-[300px,1fr] gap-8">
          <FilterSidebar />
          <InfluencerGrid />
        </div>
      </main>
    </div>
  );
}
