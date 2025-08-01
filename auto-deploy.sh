#!/bin/bash

# Auto-deploy script for Spirity website
# This script automatically commits, pushes to Git, and deploys changes

echo "🚀 Starting auto-deploy process..."

# Check if there are any changes to commit
if [[ -z $(git status --porcelain) ]]; then
    echo "✅ No changes to commit"
    exit 0
fi

# Get current timestamp for commit message
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

echo "📝 Committing changes..."
git add .
git commit -m "Auto-deploy: Changes made at $TIMESTAMP"

echo "📤 Pushing to GitHub..."
git push origin main

echo "🏗️ Building and deploying..."
npm run deploy

echo "✅ Auto-deploy completed successfully!"
echo "🌐 Website should be live at: https://spiritys.com" 