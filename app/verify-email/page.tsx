"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function VerifyEmailPage() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Get the email from localStorage (set during signup)
      const email = localStorage.getItem("email");

      if (!email) {
        throw new Error("Email not found. Please sign up again.");
      }

      // Make a POST request to verify the OTP
      const response = await fetch(
        "https://theinfluencer.in/v1/api/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ email, otp }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to verify OTP");
      }

      // Handle successful verification
      if (data.message === "Account verified successfully.") {
        // Redirect to the dashboard or login page
        router.push("/dashboard");
      } else {
        setError(data.error || "An error occurred during verification.");
      }
    } catch (err) {
      console.error("Verification error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred during verification. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md bg-white shadow-xl rounded-lg">
        <CardHeader>
          <h1 className="text-2xl font-bold text-center">Verify Email</h1>
          <p className="text-sm text-gray-600 text-center">
            Enter the OTP sent to your email to verify your account.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-lg transition duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Verifying..." : "Verify"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-600">
          Didn&apos;t receive the OTP?{" "}
          <button
            onClick={() => router.push("/resend-otp")}
            className="text-purple-600 hover:underline"
          >
            Resend OTP
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}
