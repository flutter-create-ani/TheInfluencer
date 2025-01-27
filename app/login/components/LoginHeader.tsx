import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function LoginHeader() {
  return (
    <CardHeader>
      <CardTitle className="text-3xl font-bold text-center text-gray-800">
        Welcome Back
      </CardTitle>
      <CardDescription className="text-center text-gray-600">
        Log in to your account to access the platform
      </CardDescription>
    </CardHeader>
  );
}
