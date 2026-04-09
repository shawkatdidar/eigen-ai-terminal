"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ManifestFile {
  path: string;
  frontmatter: Record<string, unknown>;
  wikilinks: string[];
  tags: string[];
  size: number;
}

/** Human-readable labels for folders */
const folderLabels: Record<string, string> = {
  nodes: "Domains",
  briefs: "Daily Briefs",
  frameworks: "Frameworks",
};

const folderIcons: Record<string, string> = {
  nodes: "📡",
  briefs: "📋",
  frameworks: "🧭",
};

/** Folders to HIDE from sidebar (still accessible via links, just not shown) */
const hiddenFolders = new Set(["entities"])

/** Root files to HIDE from sidebar — proprietary methodology or not for this phase */
const hiddenRootFiles = new Set([
  "force-dynamics.md",    // Proprietary — cause & effect methodology
  "predictions.md",       // Confusing for general audience
  "opportunity-pipeline.md", // Internal strategic assessment
  "index.md",             // Redundant — dashboard is the landing page
]);

/** Human-readable names for root-level system files */
const rootFileLabels: Record<string, string> = {
  "radar.md": "Dashboard",
  "index.md": "Index",
  "watchlist.md": "Watchlist",
  "force-dynamics.md": "Cause & Effect Chains",
  "convergences.md": "Developing Trends",
  "bottleneck-map.md": "What's Blocked",
  "velocity-trackers.md": "How Fast Things Move",
  "predictions.md": "Predictions",
  "opportunity-pipeline.md": "Opportunities",
};

/** Order for root files */
const rootFileOrder = [
  "radar.md", "force-dynamics.md", "convergences.md", "bottleneck-map.md",
  "velocity-trackers.md", "predictions.md", "opportunity-pipeline.md",
  "watchlist.md", "index.md",
];

function fileDisplayName(file: ManifestFile): string {
  // Check root file label first
  if (rootFileLabels[file.path]) return rootFileLabels[file.path];
  return (file.frontmatter.name as string) || file.path.split("/").pop()?.replace(".md", "") || file.path;
}

function fileHref(filePath: string): string {
  return `/wiki/${filePath.replace(/\.md$/, "")}`;
}

export default function WikiShell({
  tree,
  rootFiles,
  totalFiles,
  lastUpdated,
  children,
}: {
  tree: Record<string, ManifestFile[]>;
  rootFiles: ManifestFile[];
  totalFiles: number;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(["nodes", "frameworks"]));
  const pathname = usePathname();

  const toggleFolder = (folder: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(folder)) next.delete(folder);
      else next.add(folder);
      return next;
    });
  };

  const isActive = (filePath: string) => pathname === fileHref(filePath);

  // Sort root files by defined order, filter out hidden ones
  const sortedRootFiles = [...rootFiles]
    .filter((f) => !hiddenRootFiles.has(f.path))
    .sort((a, b) => {
      const ai = rootFileOrder.indexOf(a.path);
      const bi = rootFileOrder.indexOf(b.path);
      return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    });

  // Split briefs: most recent vs historical
  const briefFiles = tree["briefs"] || [];
  const sortedBriefs = [...briefFiles].sort((a, b) => b.path.localeCompare(a.path));
  const latestBrief = sortedBriefs[0];
  const historicalBriefs = sortedBriefs.slice(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-[#a7d7f9] bg-white">
        <div className="max-w-[1400px] mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-[14px] text-[#0645ad] hover:underline">
              ← Home
            </Link>
            <span className="text-[#54595d] text-[13px]">|</span>
            <Link href="/wiki" className="text-[18px] font-serif font-bold text-[#202122]">
              Eigen AI Terminal
            </Link>
          </div>
          <div className="flex items-center gap-4 text-[12px] text-[#54595d]">
            <span>{totalFiles} articles</span>
            <span>Updated {new Date(lastUpdated).toLocaleDateString()}</span>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-[#0645ad] hover:underline sm:hidden"
            >
              {sidebarOpen ? "Hide" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto flex">
        {/* Sidebar */}
        <aside
          className={`
            ${sidebarOpen ? "w-[260px] min-w-[260px]" : "w-0 min-w-0 overflow-hidden"}
            border-r border-[#eaecf0] bg-[#f8f9fa] transition-all duration-200
            h-[calc(100vh-45px)] sticky top-[45px] overflow-y-auto
          `}
        >
          <div className="p-4">
            {/* Force map — special link */}
            <div className="mb-3">
              <Link
                href="/wiki/forces"
                className={`
                  flex items-center gap-2 px-2 py-2 rounded text-[13px] font-semibold transition-colors
                  ${pathname === "/wiki/forces"
                    ? "bg-[#eaf3ff] text-[#202122]"
                    : "text-[#0645ad] hover:bg-[#eaf3ff]"
                  }
                `}
              >
                <span className="text-[15px]">🗺️</span>
                Cause &amp; Effect Map
              </Link>
            </div>

            {/* Root files — the main navigation */}
            <div className="mb-4">
              <p className="text-[11px] font-bold text-[#54595d] uppercase tracking-wider mb-1.5 px-1">
                Overview
              </p>
              {sortedRootFiles.map((file) => (
                <Link
                  key={file.path}
                  href={file.path === "radar.md" ? "/wiki" : fileHref(file.path)}
                  className={`
                    block px-2 py-1 text-[13px] rounded transition-colors
                    ${isActive(file.path) || (file.path === "radar.md" && pathname === "/wiki")
                      ? "bg-[#eaf3ff] text-[#202122] font-semibold"
                      : "text-[#0645ad] hover:bg-[#eaf3ff]"
                    }
                  `}
                >
                  {fileDisplayName(file)}
                </Link>
              ))}
            </div>

            {/* Latest brief */}
            {latestBrief && (
              <div className="mb-3">
                <p className="text-[11px] font-bold text-[#54595d] uppercase tracking-wider mb-1.5 px-1">
                  📋 Latest Brief
                </p>
                <Link
                  href={fileHref(latestBrief.path)}
                  className={`
                    block px-2 py-1 text-[13px] rounded transition-colors
                    ${isActive(latestBrief.path)
                      ? "bg-[#eaf3ff] text-[#202122] font-semibold"
                      : "text-[#0645ad] hover:bg-[#eaf3ff]"
                    }
                  `}
                >
                  {fileDisplayName(latestBrief)}
                </Link>

                {/* Historical briefs — collapsed */}
                {historicalBriefs.length > 0 && (
                  <>
                    <button
                      onClick={() => toggleFolder("briefs-history")}
                      className="flex items-center gap-1 w-full px-2 py-1 text-[12px] text-[#72777d] hover:text-[#0645ad]"
                    >
                      <span>{expandedFolders.has("briefs-history") ? "▾" : "▸"}</span>
                      <span>Past briefs ({historicalBriefs.length})</span>
                    </button>
                    {expandedFolders.has("briefs-history") && (
                      <div className="ml-2">
                        {historicalBriefs.map((file) => (
                          <Link
                            key={file.path}
                            href={fileHref(file.path)}
                            className={`
                              block px-2 py-0.5 text-[12px] rounded transition-colors
                              ${isActive(file.path)
                                ? "bg-[#eaf3ff] text-[#202122] font-semibold"
                                : "text-[#0645ad] hover:bg-[#eaf3ff]"
                              }
                            `}
                          >
                            {fileDisplayName(file)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {/* Folder tree — excluding hidden folders and briefs (handled above) */}
            {Object.entries(tree)
              .filter(([folder]) => !hiddenFolders.has(folder) && folder !== "briefs")
              .sort()
              .map(([folder, files]) => (
                <div key={folder} className="mb-2">
                  <button
                    onClick={() => toggleFolder(folder)}
                    className="flex items-center gap-1.5 w-full px-1 py-1 text-[11px] font-bold text-[#54595d] uppercase tracking-wider hover:text-[#202122]"
                  >
                    <span className="text-[13px]">{expandedFolders.has(folder) ? "▾" : "▸"}</span>
                    <span>{folderIcons[folder] || "📄"}</span>
                    <span>{folderLabels[folder] || folder}</span>
                    <span className="text-[10px] font-normal ml-auto text-[#72777d]">{files.length}</span>
                  </button>
                  {expandedFolders.has(folder) && (
                    <div className="ml-2">
                      {files.sort((a, b) => fileDisplayName(a).localeCompare(fileDisplayName(b))).map((file) => (
                        <Link
                          key={file.path}
                          href={fileHref(file.path)}
                          className={`
                            block px-2 py-1 text-[13px] rounded transition-colors
                            ${isActive(file.path)
                              ? "bg-[#eaf3ff] text-[#202122] font-semibold"
                              : "text-[#0645ad] hover:bg-[#eaf3ff]"
                            }
                          `}
                        >
                          {fileDisplayName(file)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
