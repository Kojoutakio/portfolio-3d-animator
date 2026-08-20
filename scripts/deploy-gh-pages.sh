#!/usr/bin/env bash
# Deploy to GitHub Pages
set -e
echo "◆ Deploying to GitHub Pages..."
./scripts/build.sh
npx gh-pages -d dist -m "Deploy portfolio $(date +%Y-%m-%d)"
echo "✓ Deployed!"
