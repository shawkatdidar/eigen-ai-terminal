/**
 * HOME PAGE — Server Component
 *
 * This file runs on the server (not in the user's browser).
 * It reads the JSON data file and passes it to the RadarPage component.
 *
 * Why two files? Server components can read files directly (fast, secure).
 * Client components handle interactivity (clicks, toggles).
 * The server loads the data, the client displays it.
 */

import fs from "fs";
import path from "path";
import RadarPage from "@/components/RadarPage";
import type { RadarData } from "@/lib/types";

export default function Home() {
  // Read the pre-built JSON data
  const dataPath = path.join(process.cwd(), "public/data/radar.json");
  const raw = fs.readFileSync(dataPath, "utf-8");
  const data: RadarData = JSON.parse(raw);

  return <RadarPage data={data} />;
}
