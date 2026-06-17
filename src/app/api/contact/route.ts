import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.formData();
  console.log("Contact form:", Object.fromEntries(data.entries()));
  return NextResponse.redirect(new URL("/contact?sent=1", req.url), 303);
}
