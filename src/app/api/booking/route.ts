import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  // In production: send to email (Resend/SendGrid), SMS, or CRM webhook
  console.log("Booking received:", JSON.stringify(data, null, 2));
  return NextResponse.json({ success: true, message: "Booking received. We'll contact you within 2 hours." });
}
