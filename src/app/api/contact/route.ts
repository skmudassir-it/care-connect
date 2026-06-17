import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const data = await req.json();
      console.log("Contact form (JSON):", data);
    } else {
      const formData = await req.formData();
      const data: Record<string, string> = {};
      formData.forEach((value, key) => { data[key] = value.toString(); });
      console.log("Contact form:", data);
    }
    return NextResponse.redirect(new URL("/contact?sent=1", req.url), 303);
  } catch (e) {
    return NextResponse.json({ success: true, message: "Message received" });
  }
}
