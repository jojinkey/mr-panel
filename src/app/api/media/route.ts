import { type NextRequest } from "next/server";

// Upstream map lives here only — never reaches the client bundle.
const UPSTREAM: Record<string, string> = {
  // ── videos ──
  "hero-video":  "https://file.garden/aaq7u9giWjY0-o-W/MR%20PANEL/MR%20Panel%20Vidoe.mp4",
  "calm-video":  "https://file.garden/aaq7u9giWjY0-o-W/MR%20PANEL/Still%20calm.mp4",
  // ── images ──
  "hero-logo":   "https://file.garden/aaq7u9giWjY0-o-W/MR%20PANEL/MR%20Panel%20log%20png%20no%20bg.png",
  "furniture":   "https://file.garden/aaq7u9giWjY0-o-W/MR%20PANEL/Furniture%20set.png",
};

// 30 days — file.garden assets are immutable; cache very aggressively.
const MAX_AGE = 60 * 60 * 24 * 30;

// Response headers forwarded from the upstream verbatim.
const FORWARD_RESPONSE_HEADERS = [
  "content-type",
  "content-length",
  "content-range",
  "accept-ranges",
  // Cache-validation headers — let the browser make conditional requests.
  "etag",
  "last-modified",
];

// Request headers forwarded to the upstream so the browser's conditional
// requests (If-None-Match / If-Modified-Since) can resolve as 304.
const FORWARD_REQUEST_HEADERS = [
  "range",           // byte-range for video seeking
  "if-none-match",   // ETag-based conditional
  "if-modified-since",
  "if-range",        // conditional range request
];

export async function GET(request: NextRequest) {
  const key = request.nextUrl.searchParams.get("key") ?? "";

  const upstream = UPSTREAM[key];
  if (!upstream) {
    return new Response("Unknown media key", { status: 404 });
  }

  const upstreamHeaders: Record<string, string> = {};
  for (const h of FORWARD_REQUEST_HEADERS) {
    const v = request.headers.get(h);
    if (v) upstreamHeaders[h] = v;
  }

  let upstreamRes: Response;
  try {
    upstreamRes = await fetch(upstream, {
      headers: upstreamHeaders,
      cache: "no-store",
    });
  } catch {
    return new Response("Upstream unreachable", { status: 502 });
  }

  // 200, 206 (partial), and 304 (not modified) are all valid.
  if (!upstreamRes.ok && upstreamRes.status !== 304) {
    return new Response("Upstream error", { status: upstreamRes.status });
  }

  // 304 has no body — return it straight back so the browser uses its cache.
  if (upstreamRes.status === 304) {
    const h304 = new Headers();
    for (const h of ["etag", "cache-control", "last-modified"]) {
      const v = upstreamRes.headers.get(h);
      if (v) h304.set(h, v);
    }
    h304.set("Cache-Control", `public, max-age=${MAX_AGE}, stale-while-revalidate=86400`);
    return new Response(null, { status: 304, headers: h304 });
  }

  const headers = new Headers();

  for (const h of FORWARD_RESPONSE_HEADERS) {
    const v = upstreamRes.headers.get(h);
    if (v) headers.set(h, v);
  }

  // Guarantee byte-range support so browsers can seek immediately.
  if (!headers.has("accept-ranges")) {
    headers.set("accept-ranges", "bytes");
  }

  // Tell CDNs the response varies by Range so they never serve a full-file
  // response to a partial-content request.
  headers.set("vary", "Range");

  headers.set(
    "Cache-Control",
    `public, max-age=${MAX_AGE}, stale-while-revalidate=86400`
  );

  return new Response(upstreamRes.body, {
    status: upstreamRes.status,
    headers,
  });
}
