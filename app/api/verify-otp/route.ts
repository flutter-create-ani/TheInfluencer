import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Mock database (replace with actual database queries)
const users = [
  {
    email: "vipin@gmail.com",
    otp: "123456", // Mock OTP (replace with actual OTP logic)
    otpExpires: new Date(Date.now() + 10 * 60 * 1000), // OTP expires in 10 minutes
    is_verified: false,
  },
];

// Secret key for JWT (store this in environment variables in production)
const JWT_SECRET = "your_jwt_secret_key";

export async function POST(request: Request) {
  try {
    const { email, otp } = await request.json();

    // Validate required fields
    if (!email || !otp) {
      return NextResponse.json(
        { error: "Email and OTP are required." },
        { status: 400 }
      );
    }

    // Find the user in the mock database
    const user = users.find((u) => u.email === email);

    if (!user) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    // Check if the OTP is correct and not expired
    if (user.otp !== otp || new Date() > user.otpExpires) {
      return NextResponse.json(
        { error: "Invalid OTP or OTP expired." },
        { status: 400 }
      );
    }

    // Mark the user as verified
    user.is_verified = true;

    // Generate a JWT token
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    // Return the success response
    return NextResponse.json(
      {
        message: "Account verified successfully.",
        token,
        user: {
          email: user.email,
          is_verified: user.is_verified,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("OTP verification error:", error);
    return NextResponse.json(
      { error: "Internal Server Error." },
      { status: 500 }
    );
  }
}
