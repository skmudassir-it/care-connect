import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const contentType = req.headers.get("content-type") || "";
  let data: Record<string, unknown> = {};
  if (contentType.includes("application/json")) {
    data = await req.json();
  } else {
    const fd = await req.formData();
    fd.forEach((v, k) => { data[k] = v; });
  }
  console.log("Contact form:", data);
  return NextResponse.json({ success: true, message: "Message received. We'll get back to you soon." });
}
