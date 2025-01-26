import { cn } from "@/lib/utils";

interface RoleSelectorProps {
  role: string;
  setRole: (role: string) => void;
}

export function RoleSelector({ role, setRole }: RoleSelectorProps) {
  return (
    <div>
      <label htmlFor="role" className="block text-sm font-medium text-gray-800">
        Login as
      </label>
      <div className="mt-1">
        <select
          id="role"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground transition duration-300 ease-in-out transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:scale-105 focus:shadow-lg hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "block w-full rounded-lg border-2 border-gray-300 bg-gray-100 text-gray-800 focus:ring-2 focus:border-purple-500 focus:ring-offset-2 focus:ring-pink-500 focus:outline-none "
          )}
        >
          <option value="Influencer">Influencer</option>
          <option value="Brand">Brand</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
    </div>
  );
}
