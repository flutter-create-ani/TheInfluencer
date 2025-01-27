import { Input } from "@/components/ui/input";

interface ConfirmPasswordInputProps {
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
}

export function ConfirmPasswordInput({
  confirmPassword,
  setConfirmPassword,
}: ConfirmPasswordInputProps) {
  return (
    <div>
      <label
        htmlFor="confirm-password"
        className="block text-sm font-medium text-gray-800"
      >
        Confirm Password
      </label>
      <Input
        id="confirm-password"
        name="confirm-password"
        type="password"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="mt-1 border-gray-300 focus:ring-purple-500 focus:border-purple-500"
      />
    </div>
  );
}
