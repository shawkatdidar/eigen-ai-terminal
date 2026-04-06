import fs from "fs";
import path from "path";
import WikiArticle from "@/components/WikiArticle";

export default async function WikiPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "public/wiki", ...slug);

  // Try exact path, then with .md extension
  let content: string;
  let resolvedPath: string;

  if (fs.existsSync(filePath)) {
    content = fs.readFileSync(filePath, "utf-8");
    resolvedPath = slug.join("/");
  } else if (fs.existsSync(filePath + ".md")) {
    content = fs.readFileSync(filePath + ".md", "utf-8");
    resolvedPath = slug.join("/") + ".md";
  } else {
    content = `# Page not found\n\nThe file \`${slug.join("/")}\` does not exist in the knowledge base.\n\nReturn to the [index](/wiki).`;
    resolvedPath = slug.join("/");
  }

  return <WikiArticle content={content} currentPath={resolvedPath} />;
}
