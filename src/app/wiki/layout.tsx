import fs from "fs";
import path from "path";
import WikiShell from "@/components/WikiShell";

interface ManifestFile {
  path: string;
  frontmatter: Record<string, unknown>;
  wikilinks: string[];
  tags: string[];
  size: number;
}

interface Manifest {
  totalFiles: number;
  lastUpdated: string;
  files: ManifestFile[];
}

export default function WikiLayout({ children }: { children: React.ReactNode }) {
  const manifestPath = path.join(process.cwd(), "public/wiki/manifest.json");
  const manifest: Manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));

  // Build folder tree from manifest
  const tree: Record<string, ManifestFile[]> = {};
  const rootFiles: ManifestFile[] = [];

  for (const file of manifest.files) {
    if (file.path.includes("/")) {
      const folder = file.path.split("/")[0];
      if (!tree[folder]) tree[folder] = [];
      tree[folder].push(file);
    } else {
      rootFiles.push(file);
    }
  }

  return (
    <WikiShell tree={tree} rootFiles={rootFiles} totalFiles={manifest.totalFiles} lastUpdated={manifest.lastUpdated}>
      {children}
    </WikiShell>
  );
}
