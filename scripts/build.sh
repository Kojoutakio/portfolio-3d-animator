#!/usr/bin/env bash
# Build script for 3D Animator Portfolio
set -e
echo "◆ Building 3D Animator Portfolio..."
if [ ! -d "node_modules" ]; then
  echo "→ Installing dependencies..."
  npm install
fi
echo "→ Running TypeScript check & Vite build..."
npm run build
echo ""
echo "✓ Build complete! Output in ./dist/"
