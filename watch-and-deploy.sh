#!/bin/bash

# Watch and auto-deploy script for Spirity website
# This script watches for file changes and automatically deploys

echo "👀 Starting file watcher for auto-deployment..."
echo "📁 Watching for changes in src/ directory..."
echo "🔄 Press Ctrl+C to stop watching"

# Function to deploy
deploy() {
    echo ""
    echo "🚀 Changes detected! Starting auto-deploy..."
    
    # Check if there are any changes to commit
    if [[ -z $(git status --porcelain) ]]; then
        echo "✅ No changes to commit"
        return
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
    echo ""
    echo "👀 Continuing to watch for changes..."
}

# Watch for changes in src/ directory
fswatch -o src/ | while read f; do
    deploy
done 