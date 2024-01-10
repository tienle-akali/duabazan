import { NextResponse } from "next/server";

export async function GET(request) {
  const res = [
    "tag_before",
    "tag_after",
    "business_card_before",
    "business_card_after",
  ].map((i) => `/images/card/640/${i}.png`);

  return NextResponse.json(res);
}

export async function POST(request) {
  const res = null;
  return NextResponse.json(res);
}
