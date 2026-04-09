import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

/**
 * GET /api/status?since=2026-04-09T07:00:00Z
 *
 * Lightweight endpoint agents poll to check for breaking alerts.
 * Reads the static alert.json (generated at build time).
 * Returns { hasAlert: true, ... } or { hasAlert: false }.
 */

interface Alert {
  active: boolean;
  since: string;
  title: string;
  summary: string;
  domains: string[];
  expires: string;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const since = url.searchParams.get("since");

  const alertPath = path.join(process.cwd(), "public/data/alert.json");

  let alert: Alert | null = null;
  try {
    alert = JSON.parse(fs.readFileSync(alertPath, "utf-8"));
  } catch {
    // No alert file = no alert
  }

  if (!alert || !alert.active) {
    return NextResponse.json({ hasAlert: false }, {
      headers: { "Cache-Control": "public, max-age=120" },
    });
  }

  // Expired?
  if (alert.expires && new Date(alert.expires) < new Date()) {
    return NextResponse.json({ hasAlert: false }, {
      headers: { "Cache-Control": "public, max-age=120" },
    });
  }

  // Agent already saw this?
  if (since && new Date(alert.since) <= new Date(since)) {
    return NextResponse.json({ hasAlert: false }, {
      headers: { "Cache-Control": "public, max-age=120" },
    });
  }

  return NextResponse.json({
    hasAlert: true,
    since: alert.since,
    title: alert.title,
    summary: alert.summary,
    domains: alert.domains,
  }, {
    headers: { "Cache-Control": "public, max-age=60" },
  });
}
