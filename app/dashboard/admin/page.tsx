import { FilterSidebar } from "./components/FilterSidebar";
import { AdminGrid } from "./components/AdminGrid";
import content from "@/lib/content";


export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[--background] text-[--foreground]">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center transition-transform duration-300 text-white hover:text-pink-600">
          <span className="inline-block transform hover:scale-105 transition-all">
            Admin Dashboard
          </span>
        </h1>
        <p className="text-xl mb-8 text-center transition-transform duration-300 text-white hover:text-pink-500">
          <span className="inline-block transform hover:scale-105 transition-all">
            Welcome to your Admin dashboard!
            {content.adminMessage}
          </span>
        </p>

        {/* Flex container to keep items aligned */}
        <div className="grid md:grid-cols-[300px,1fr] gap-8 items-start">
          <FilterSidebar />
          <AdminGrid />{" "}
          {/* Removed extra padding that caused misalignment */}
        </div>
      </main>
    </div>
  );
}
