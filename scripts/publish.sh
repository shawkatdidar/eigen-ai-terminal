#!/bin/bash
# PUBLISH — Rebuilds data from the wiki and pushes to production.
# Run this after your daily scan: ./scripts/publish.sh

set -e
cd "$(dirname "$0")/.."

echo "📡 Eigen AI Terminal — Rebuilding data from wiki..."
npx tsx scripts/build-data.ts

echo "📤 Pushing to production..."
git add public/data/radar.json
git commit -m "Update radar data $(date +%Y-%m-%d)" --allow-empty
git push

echo "✅ Done! Vercel will auto-deploy in ~30 seconds."
echo "   Live at: https://eigenterminal.clawlab.dev"
