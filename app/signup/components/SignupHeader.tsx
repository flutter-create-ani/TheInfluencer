import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function SignupHeader() {
  return (
    <CardHeader>
      <CardTitle className="text-3xl font-bold text-center text-gray-800">
        Join Us
      </CardTitle>
      <CardDescription className="text-center text-gray-600">
        Create your account and start your influencer journey
      </CardDescription>
    </CardHeader>
  );
}
