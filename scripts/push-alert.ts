#!/usr/bin/env npx tsx

/**
 * PUSH ALERT — Create a breaking alert that agents will pick up.
 *
 * Usage:
 *   npx tsx scripts/push-alert.ts "Title" "Summary" [domains] [ttlHours]
 *   npx tsx scripts/push-alert.ts --clear
 *
 * Examples:
 *   npx tsx scripts/push-alert.ts "GPT-5 released" "OpenAI just dropped GPT-5..." "Frontier Models,AI Coding Tools"
 *   npx tsx scripts/push-alert.ts --clear
 *
 * After creating, run ./scripts/publish.sh to deploy (or it auto-deploys on push).
 */

import fs from "fs";
import path from "path";

const OUTPUT = path.resolve(__dirname, "../public/data/alert.json");

const args = process.argv.slice(2);

if (args[0] === "--clear") {
  try { fs.unlinkSync(OUTPUT); } catch { /* already gone */ }
  console.log("Alert cleared.");
  process.exit(0);
}

const title = args[0];
const summary = args[1];
const domains = args[2] ? args[2].split(",").map(d => d.trim()) : [];
const ttlHours = parseInt(args[3] || "12");

if (!title || !summary) {
  console.error("Usage: push-alert.ts \"Title\" \"Summary\" [domains] [ttlHours]");
  process.exit(1);
}

const now = new Date();
const alert = {
  active: true,
  since: now.toISOString(),
  title,
  summary,
  domains,
  expires: new Date(now.getTime() + ttlHours * 60 * 60 * 1000).toISOString(),
};

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.writeFileSync(OUTPUT, JSON.stringify(alert, null, 2));

console.log("");
console.log("  Alert created:");
console.log(`  Title:   ${title}`);
console.log(`  Summary: ${summary.slice(0, 80)}...`);
console.log(`  Domains: ${domains.length ? domains.join(", ") : "(all)"}`);
console.log(`  Expires: ${alert.expires}`);
console.log("");
console.log("  Deploy to make it live: ./scripts/publish.sh");
console.log("");
