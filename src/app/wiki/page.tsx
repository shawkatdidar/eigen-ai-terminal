import fs from "fs";
import path from "path";
import RadarPage from "@/components/RadarPage";
import type { RadarData } from "@/lib/types";

export default function WikiIndex() {
  const dataPath = path.join(process.cwd(), "public/data/radar.json");
  const data: RadarData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

  return <RadarPage data={data} embedded />;
}
