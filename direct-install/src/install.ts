#!/usr/bin/env node

/**
 * EIGEN AI TERMINAL — Direct Installer
 *
 * Installs the skill directly into your OpenClaw workspace.
 * Includes automatic daily morning briefing — no ClawHub scanner restrictions.
 *
 * Usage: npx eigen-ai-terminal-setup
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ── Find OpenClaw skills directory ──────────────────────────

function findSkillsDir(): string | null {
  // Common OpenClaw skills locations
  const candidates = [
    // Default workspace skills directory
    path.join(process.cwd(), "skills"),
    // Home directory OpenClaw config
    path.join(process.env.HOME || "~", ".openclaw", "skills"),
    // XDG config
    path.join(process.env.XDG_CONFIG_HOME || path.join(process.env.HOME || "~", ".config"), "openclaw", "skills"),
  ];

  // Check OPENCLAW_WORKDIR env var
  if (process.env.OPENCLAW_WORKDIR) {
    candidates.unshift(path.join(process.env.OPENCLAW_WORKDIR, "skills"));
  }

  for (const dir of candidates) {
    if (fs.existsSync(dir)) return dir;
  }

  // If none found, use ~/.openclaw/skills as default and create it
  const defaultDir = path.join(process.env.HOME || "~", ".openclaw", "skills");
  return defaultDir;
}

// ── Install ─────────────────────────────────────────────────

function install() {
  console.log("");
  console.log("  ╔══════════════════════════════════════╗");
  console.log("  ║   Eigen AI Terminal — Direct Install  ║");
  console.log("  ╚══════════════════════════════════════╝");
  console.log("");

  // Find skills directory
  const skillsDir = findSkillsDir();
  if (!skillsDir) {
    console.error("  ✖ Could not find OpenClaw skills directory.");
    console.error("    Set OPENCLAW_WORKDIR or run from your OpenClaw workspace.");
    process.exit(1);
  }

  const targetDir = path.join(skillsDir, "eigen-ai-terminal");
  console.log(`  Installing to: ${targetDir}`);
  console.log("");

  // Create target directory
  fs.mkdirSync(targetDir, { recursive: true });

  // Copy skill files from the package
  const sourceDir = path.join(__dirname, "..", "skill-files");

  // Check if skill-files exists (installed via npm)
  // If not, try relative to dist (compiled location)
  const possibleSources = [
    sourceDir,
    path.join(__dirname, "skill-files"),
    path.join(__dirname, "..", "..", "skill-files"),
  ];

  let actualSource: string | null = null;
  for (const src of possibleSources) {
    if (fs.existsSync(path.join(src, "SKILL.md"))) {
      actualSource = src;
      break;
    }
  }

  if (!actualSource) {
    // Fallback: download from the website
    console.log("  Downloading skill files from terminal.clawlab.dev...");
    downloadAndInstall(targetDir);
    return;
  }

  // Copy files
  const files = fs.readdirSync(actualSource);
  for (const file of files) {
    const src = path.join(actualSource, file);
    const dest = path.join(targetDir, file);
    fs.copyFileSync(src, dest);
    console.log(`  ✓ ${file}`);
  }

  printSuccess(targetDir);
}

async function downloadAndInstall(targetDir: string) {
  const baseUrl = "https://terminal.clawlab.dev";

  // Download SKILL.md from our repo's direct-install version
  // For now, we'll create it inline since the website doesn't host this version
  const skillMdUrl = "https://raw.githubusercontent.com/shawkatdidar/eigen-ai-terminal/main/direct-install/skill-files/SKILL.md";
  const indexJsUrl = "https://raw.githubusercontent.com/shawkatdidar/eigen-ai-terminal/main/direct-install/skill-files/index.js";

  try {
    const [skillRes, indexRes] = await Promise.all([
      fetch(skillMdUrl),
      fetch(indexJsUrl),
    ]);

    if (!skillRes.ok || !indexRes.ok) throw new Error("Download failed");

    fs.writeFileSync(path.join(targetDir, "SKILL.md"), await skillRes.text());
    console.log("  ✓ SKILL.md");

    fs.writeFileSync(path.join(targetDir, "index.js"), await indexRes.text());
    console.log("  ✓ index.js");

    printSuccess(targetDir);
  } catch (err) {
    console.error("  ✖ Failed to download skill files.");
    console.error("    Try cloning the repo instead:");
    console.error("    git clone https://github.com/shawkatdidar/eigen-ai-terminal.git");
    console.error("    cp -r eigen-ai-terminal/direct-install/skill-files/ ~/.openclaw/skills/eigen-ai-terminal/");
    process.exit(1);
  }
}

function printSuccess(targetDir: string) {
  console.log("");
  console.log("  ╔══════════════════════════════════════╗");
  console.log("  ║        ✅ Install complete!           ║");
  console.log("  ╚══════════════════════════════════════╝");
  console.log("");
  console.log("  What happens next:");
  console.log("  1. Your OpenClaw agent will detect the new skill");
  console.log("  2. It will ask what you're building");
  console.log("  3. It sets up a daily 7am morning briefing");
  console.log("     personalized to your work");
  console.log("");
  console.log("  Installed to: " + targetDir);
  console.log("");
  console.log("  11 tools available — ask your agent:");
  console.log('  • "What happened in AI today?"');
  console.log('  • "Show ripple effects of [signal]"');
  console.log('  • "Search Eigen wiki for [topic]"');
  console.log("");
}

install();
