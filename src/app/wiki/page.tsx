import fs from "fs";
import path from "path";
import WikiArticle from "@/components/WikiArticle";

export default function WikiIndex() {
  const filePath = path.join(process.cwd(), "public/wiki/index.md");
  const content = fs.readFileSync(filePath, "utf-8");

  return <WikiArticle content={content} currentPath="index.md" />;
}
