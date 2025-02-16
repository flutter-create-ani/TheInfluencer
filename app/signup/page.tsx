"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { NameInput } from "./components/NameInput";
import { EmailInput } from "./components/EmailInput";
import { PasswordInput } from "./components/PasswordInput";
import { ConfirmPasswordInput } from "./components/ConfirmPasswordInput";
import { SignupHeader } from "./components/SignupHeader";
import { SocialSignupButtons } from "./components/SocialSignupButtons";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("influencer"); // Add user type state
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      // Make a POST request to your backend API
      const response = await fetch("https://theinfluencer.in/v1/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirm_password: confirmPassword, // Match the API's expected field name
          user_type: userType, // Include user type
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle API errors
        throw new Error(data.error || "An error occurred during signup");
      }

      // Handle successful signup
      if (
        data.message ===
        "User registered successfully. Please verify your account."
      ) {
        // Redirect to the verification page or login page
        router.push("/verify-email");
      } else {
        setError(data.error || "An error occurred during signup");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred during signup. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md bg-white shadow-xl rounded-lg">
        <SignupHeader />
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <NameInput name={name} setName={setName} />
            <EmailInput email={email} setEmail={setEmail} />
            <PasswordInput
              password={password}
              setPassword={setPassword}
              id="password"
              label="Password"
            />
            <ConfirmPasswordInput
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
            />
            {/* Add user type selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                User Type
              </label>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              >
                <option value="influencer">Influencer</option>
                <option value="brand">Brand</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-lg transition duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Signing up..." : "Sign up"}
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <SocialSignupButtons />
        </CardFooter>
      </Card>
    </div>
  );
}
