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

const folderLabels: Record<string, string> = {
  nodes: "Domains",
  entities: "Companies & Models",
  briefs: "Daily Briefs",
  frameworks: "Frameworks",
};

const folderIcons: Record<string, string> = {
  nodes: "📡",
  entities: "🏢",
  briefs: "📋",
  frameworks: "🧭",
};

function fileDisplayName(file: ManifestFile): string {
  return (file.frontmatter.name as string) || file.path.split("/").pop()?.replace(".md", "") || file.path;
}

function fileHref(filePath: string): string {
  // Remove .md extension for the URL
  const clean = filePath.replace(/\.md$/, "");
  return `/wiki/${clean}`;
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
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(Object.keys(tree)));
  const pathname = usePathname();

  const toggleFolder = (folder: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(folder)) next.delete(folder);
      else next.add(folder);
      return next;
    });
  };

  const isActive = (filePath: string) => {
    const href = fileHref(filePath);
    return pathname === href;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Wikipedia-style header */}
      <header className="border-b border-[#a7d7f9] bg-white">
        <div className="max-w-[1400px] mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-[14px] text-[#0645ad] hover:underline">
              ← Eigen AI Terminal
            </Link>
            <span className="text-[#54595d] text-[13px]">|</span>
            <Link href="/wiki" className="text-[18px] font-serif font-bold text-[#202122]">
              Knowledge Base
            </Link>
          </div>
          <div className="flex items-center gap-4 text-[12px] text-[#54595d]">
            <span>{totalFiles} articles</span>
            <span>Updated {new Date(lastUpdated).toLocaleDateString()}</span>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-[#0645ad] hover:underline sm:hidden"
            >
              {sidebarOpen ? "Hide sidebar" : "Show sidebar"}
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
            {/* Search placeholder */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search knowledge base..."
                className="w-full px-3 py-1.5 text-[13px] border border-[#a2a9b1] rounded bg-white
                  focus:outline-none focus:border-[#3366cc] focus:shadow-[inset_0_0_0_1px_#3366cc]"
                readOnly
              />
            </div>

            {/* Root files */}
            <div className="mb-3">
              <p className="text-[11px] font-bold text-[#54595d] uppercase tracking-wider mb-1.5 px-1">
                Overview
              </p>
              {rootFiles.map((file) => (
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

            {/* Folder tree */}
            {Object.entries(tree).sort().map(([folder, files]) => (
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
