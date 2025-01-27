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
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        router.push("/dashboard");
      } else {
        const data = await response.json();
        setError(data.message || "An error occurred during signup");
      }
    } catch {
      setError("An error occurred during signup");
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
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-lg transition duration-300"
            >
              Sign up
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
