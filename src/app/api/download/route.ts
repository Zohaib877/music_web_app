import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "No URL provided" }, { status: 400 });
  }

  try {
    const response = await fetch(url);
    const contentType = response.headers.get("content-type");

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch file" }, { status: response.status });
    }

    const headers = new Headers();
    headers.set("Content-Type", contentType || "application/octet-stream");
    headers.set("Content-Disposition", `attachment; filename="${url.split("/").pop()}"`);

    return new NextResponse(response.body, { headers });
  } catch (error) {
    return NextResponse.json({ error: "Error fetching file" }, { status: 500 });
  }
}
