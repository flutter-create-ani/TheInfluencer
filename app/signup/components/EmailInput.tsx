import { Input } from "@/components/ui/input";

interface EmailInputProps {
  email: string;
  setEmail: (email: string) => void;
}

export function EmailInput({ email, setEmail }: EmailInputProps) {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-800"
      >
        Email address
      </label>
      <Input
        id="email"
        name="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-1 border-gray-300 focus:ring-purple-500 focus:border-purple-500"
      />
    </div>
  );
}
