#!/usr/bin/env npx tsx

/**
 * Generates clawhub-skill/index.js from mcp-server/src/index.ts
 * Strips all local file access (fs, path, __dirname) and replaces
 * data loading with remote-only fetch. This passes ClawHub's scanner.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT = path.resolve(__dirname, "../../clawhub-skill/index.js");
const DIST = path.resolve(__dirname, "../dist/index.js");

// Read the compiled JS (not TS, to avoid needing to compile)
let code = fs.readFileSync(DIST, "utf-8");

// 1. Replace the header comment
code = code.replace(
  /\/\*\*[\s\S]*?\*\//,
  `/**
 * EIGEN AI TERMINAL — MCP SERVER v1.0 (ClawHub Edition)
 *
 * Clean build for ClawHub distribution.
 * Fetches public read-only data from terminal.clawlab.dev.
 * No local file access. No secrets. No user data collected.
 */`
);

// 2. Remove fs, path, url imports
code = code.replace(/import fs from "fs";\n/g, "");
code = code.replace(/import path from "path";\n/g, "");
code = code.replace(/import { fileURLToPath } from "url";\n/g, "");

// 3. Remove __filename/__dirname
code = code.replace(/const __filename.*;\n/g, "");
code = code.replace(/const __dirname.*;\n/g, "");

// 4. Replace readLocalFile to always return null
code = code.replace(
  /function readLocalFile\(\.\.\.candidates\)[\s\S]*?return null;\s*\}/,
  `function readLocalFile(..._candidates) { return null; }`
);

// 5. Replace dataFileCandidates and wikiFileCandidates to return empty
code = code.replace(
  /function dataFileCandidates\(filename\)[\s\S]*?return \[[\s\S]*?\];\s*\}/,
  `function dataFileCandidates(_filename) { return []; }`
);
code = code.replace(
  /function wikiFileCandidates\(filePath\)[\s\S]*?return \[[\s\S]*?\];\s*\}/,
  `function wikiFileCandidates(_filePath) { return []; }`
);

// 6. Remove any remaining fs.readFileSync / fs.existsSync calls
code = code.replace(/fs\.readFileSync\([^)]+\)/g, '""');
code = code.replace(/fs\.existsSync\([^)]+\)/g, "false");

// 7. Remove any path.resolve / path.join calls (replace with empty string)
code = code.replace(/path\.resolve\([^)]+\)/g, '""');
code = code.replace(/path\.join\([^)]+\)/g, '""');

fs.writeFileSync(OUT, code);
console.log(`✓ ClawHub build written to ${OUT} (${(code.length / 1024).toFixed(1)} KB)`);
