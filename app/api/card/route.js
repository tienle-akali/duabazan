import { NextResponse } from "next/server";

export async function GET(request) {
  const res = [
    "Tag before",
    "Tag after",
    "Business card before",
    "Business card after",
  ].map((i) => `/images/card/1200/${i}.png`);

  return NextResponse.json(res);
}

export async function POST(request) {
  const res = null;
  return NextResponse.json(res);
}
