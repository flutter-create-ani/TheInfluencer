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
  const [role, setRole] = useState("influencer");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Make a POST request to your backend API
      const response = await fetch("https://theinfluencer.in/v1/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          user_type: role.toLowerCase(), // Match the API's expected field name
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle API errors
        throw new Error(data.error || "Invalid credentials or server error");
      }

      // Handle successful login
      if (data.message === "Login successful.") {
        // Save the token and user data in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirect to the appropriate dashboard based on the user's role
        router.push(`/dashboard/${data.user.user_type}`);
      } else {
        setError(data.error || "An error occurred during login");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred during login. Please try again."
      );
    } finally {
      setIsLoading(false);
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

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-lg transition duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Log in"}
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
