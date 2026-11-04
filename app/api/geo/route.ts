export const runtime = "edge";

// Coarse visitor location from Vercel's edge headers, for the visit
// notification. Headers are absent in local dev, so every field can be empty.
export function GET(req: Request) {
  const h = req.headers;
  let city = h.get("x-vercel-ip-city") ?? "";
  try {
    city = decodeURIComponent(city);
  } catch {
    // do nothing
  }

  return Response.json(
    {
      city,
      region: h.get("x-vercel-ip-country-region") ?? "",
      country: h.get("x-vercel-ip-country") ?? "",
    },
    { headers: { "Cache-Control": "no-store" } }
  );
}
