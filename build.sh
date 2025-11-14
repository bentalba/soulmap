#!/bin/bash
set -e

echo "Installing dependencies..."
npm install --legacy-peer-deps

echo "Building project..."
npm run build

echo "Build complete!"
