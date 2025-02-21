import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-purple-700">Phlanx</h1>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Platform
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Pricing
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Top Lists
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-emerald-500 hover:text-emerald-600"
            >
              Try for free
            </Button>
            <Button
              variant="default"
              className="bg-purple-700 hover:bg-purple-800"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
