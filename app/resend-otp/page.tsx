"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ResendOtpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleResendOtp = async () => {
    setIsLoading(true);
    setError("");
    setMessage("");

    try {
      // Get the email from localStorage (set during signup)
      const email = localStorage.getItem("email");

      if (!email) {
        throw new Error("Email not found. Please sign up again.");
      }

      // Make a POST request to resend the OTP
      const response = await fetch(
        "https://theinfluencer.in/v1/api/send-verification-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to resend OTP");
      }

      // Handle successful OTP resend
      setMessage(data.message || "OTP sent successfully.");
    } catch (err) {
      console.error("Resend OTP error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while resending OTP. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md bg-white shadow-xl rounded-lg">
        <CardHeader>
          <h1 className="text-2xl font-bold text-center">Resend OTP</h1>
          <p className="text-sm text-gray-600 text-center">
            Click the button below to resend the OTP to your email.
          </p>
        </CardHeader>
        <CardContent>
          {message && (
            <p className="text-green-500 text-sm text-center">{message}</p>
          )}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <Button
            onClick={handleResendOtp}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-lg transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Resend OTP"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
