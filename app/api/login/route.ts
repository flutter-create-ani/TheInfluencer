import { NextResponse } from "next/server"

const users = [
  { user_id: "user001", email: "vipin@gmail.com", password: "0000000", role: "influencer" },
  { user_id: "user002", email: "jane_smith@example.com", password: "securepass456", role: "brand" },
  { user_id: "user003", email: "mike_admin@example.com", password: "admin@789", role: "admin" },
  { user_id: "user004", email: "susan_blogger@example.com", password: "blogger2023", role: "influencer" },
  { user_id: "user005", email: "brand_king@example.com", password: "brandpass007", role: "brand" },
  { user_id: "user006", email: "admin_elite@example.com", password: "eliteadmin99", role: "admin" },
  { user_id: "user007", email: "creative_vibes@example.com", password: "influence007", role: "influencer" },
  { user_id: "user008", email: "brand_builder@example.com", password: "builder@2022", role: "brand" },
  { user_id: "user009", email: "admin_master@example.com", password: "masterkey123", role: "admin" },
  { user_id: "user010", email: "trendsetter@example.com", password: "trendy@321", role: "influencer" },
]

export async function POST(request: Request) {
  if (!request.body) {
    return NextResponse.json({ status: "error", message: "No request body" }, { status: 400 })
  }

  try {
    const { email, password, role } = await request.json()

    // Add validation for required fields
    if (!email || !password || !role) {
      return NextResponse.json({ status: "error", message: "Missing required fields" }, { status: 400 })
    }

    // Convert role to lowercase for comparison
    const normalizedRole = role.toLowerCase()

    const user = users.find((u) => u.email === email && u.password === password && u.role === normalizedRole)

    if (user) {
      return NextResponse.json({
        status: "success",
        user_id: user.user_id,
        role: user.role,
        redirectTo: `/dashboard/${user.role}`,
      })
    }

    return NextResponse.json({ status: "error", message: "Invalid email or password" }, { status: 401 })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ status: "error", message: "Server error occurred" }, { status: 500 })
  }
}

// Handle GET requests
export async function GET() {
  return NextResponse.json({ status: "error", message: "Method not allowed" }, { status: 405 })
}

