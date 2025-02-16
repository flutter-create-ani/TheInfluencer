import { NextResponse } from "next/server";

// Mock database (replace with actual database queries)
const users = [
  {
    email: "vipin@gmail.com",
    otp: "123456", // Mock OTP (replace with actual OTP logic)
    otpExpires: new Date(Date.now() + 10 * 60 * 1000), // OTP expires in 10 minutes
  },
];

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    // Find the user in the mock database
    const user = users.find((u) => u.email === email);

    if (!user) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    // Generate a new OTP (mock implementation)
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = newOtp;
    user.otpExpires = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes

    // Simulate sending the OTP to the user's email
    console.log(`OTP sent to ${email}: ${newOtp}`);

    // Return the success response
    return NextResponse.json(
      { message: "OTP sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Resend OTP error:", error);
    return NextResponse.json(
      { error: "Internal Server Error." },
      { status: 500 }
    );
  }
}
