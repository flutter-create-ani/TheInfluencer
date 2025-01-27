import { Input } from "@/components/ui/input";

interface PasswordInputProps {
  password: string;
  setPassword: (password: string) => void;
}

export function PasswordInput({ password, setPassword }: PasswordInputProps) {
  return (
    <div>
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-800"
      >
        Password
      </label>
      <Input
        id="password"
        name="password"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-1 border-gray-300 focus:ring-purple-500 focus:border-purple-500"
      />
    </div>
  );
}
