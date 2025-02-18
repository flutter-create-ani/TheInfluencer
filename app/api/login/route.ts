import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Mock database (replace this with actual database queries)
const users = [
  {
    user_id: "user001",
    email: "test@example.com",
    password: "test1234",
    role: "influencer",
    name: "Vipin",
  },
  {
    user_id: "user002",
    email: "test@example.com",
    password: "test@example.com",
    role: "brand",
    name: "Jane Smith",
  },
  {
    user_id: "user003",
    email: "mike_admin@example.com",
    password: "admin@789",
    role: "admin",
    name: "Mike Admin",
  },
];

// Secret key for JWT (store this in environment variables in production)
const JWT_SECRET = "your_jwt_secret_key";

export async function POST(request: Request) {
  if (!request.body) {
    return NextResponse.json({ error: "No request body" }, { status: 400 });
  }

  try {
    const { email, password, user_type } = await request.json();

    // Validate required fields
    if (!email || !password || !user_type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Convert role to lowercase for comparison
    const normalizedRole = user_type.toLowerCase();

    // Find the user in the mock database
    const user = users.find(
      (u) =>
        u.email === email &&
        u.password === password &&
        u.role === normalizedRole
    );

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials or Email does not exist." },
        { status: 400 }
      );
    }

    // Generate a JWT token
    const token = jwt.sign(
      { user_id: user.user_id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    // Return the success response with token and user details
    return NextResponse.json(
      {
        message: "Login successful.",
        token,
        user: {
          id: user.user_id,
          name: user.name,
          email: user.email,
          user_type: user.role,
          is_verified: true, // Mock verification status
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal Server Error." },
      { status: 500 }
    );
  }
}

// Handle GET requests
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
