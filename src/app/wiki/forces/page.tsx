import fs from "fs";
import path from "path";
import ForceGraph from "@/components/ForceGraph";
import type { RadarData } from "@/lib/types";

export default function ForcesPage() {
  const dataPath = path.join(process.cwd(), "public/data/radar.json");
  const data: RadarData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

  return <ForceGraph data={data} />;
}
