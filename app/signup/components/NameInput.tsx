import { Input } from "@/components/ui/input";

interface NameInputProps {
  name: string;
  setName: (name: string) => void;
}

export function NameInput({ name, setName }: NameInputProps) {
  return (
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-800">
        Name
      </label>
      <Input
        id="name"
        name="name"
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mt-1 border-gray-300 focus:ring-purple-500 focus:border-purple-500"
      />
    </div>
  );
}
