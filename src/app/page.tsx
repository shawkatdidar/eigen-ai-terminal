import fs from "fs";
import path from "path";
import LandingPage from "@/components/LandingPage";
import type { RadarData } from "@/lib/types";

export default function Home() {
  const dataPath = path.join(process.cwd(), "public/data/radar.json");
  const raw = fs.readFileSync(dataPath, "utf-8");
  const data: RadarData = JSON.parse(raw);

  return <LandingPage data={data} />;
}
