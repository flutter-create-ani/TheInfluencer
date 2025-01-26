"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { EmailInput } from "./components/EmailInput";
import { PasswordInput } from "./components/PasswordInput";
import { RoleSelector } from "./components/RoleSelector";
import { LoginHeader } from "./components/LoginHeader";
import { SocialLoginButtons } from "./components/SocialLoginButtons";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [role, setRole] = useState("Influencer");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });

      if (response.ok) {
        router.push("/dashboard");
      } else {
        const data = await response.json();
        setError(data.message || "Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred during login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md bg-white shadow-xl rounded-lg">
        <LoginHeader />
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <EmailInput email={email} setEmail={setEmail} />
            <PasswordInput password={password} setPassword={setPassword} />
            <RoleSelector role={role} setRole={setRole} />

            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-lg transition duration-300"
            >
              Log in
            </Button>
            <div className="text-right mt-2">
              <a
                href="/forgot-password"
                className="text-sm text-purple-600 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <SocialLoginButtons />
        </CardFooter>
      </Card>
    </div>
  );
}
