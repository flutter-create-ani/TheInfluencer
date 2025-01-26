import { Input } from "@/components/ui/input";

interface PasswordInputProps {
  password: string;
  setPassword: (password: string) => void;
  id: string;
  label: string;
}

export function PasswordInput({
  password,
  setPassword,
  id,
  label,
}: PasswordInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-800">
        {label}
      </label>
      <Input
        id={id}
        name={id}
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-1 border-gray-300 focus:ring-purple-500 focus:border-purple-500"
      />
    </div>
  );
}
