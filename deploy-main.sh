#!/bin/bash

echo "🚀 Starting deployment to main branch..."

# Build the React app
echo "📦 Building React app..."
npm run build

# Create a .nojekyll file to bypass Jekyll processing
touch build/.nojekyll

# Copy all files from build to root directory
echo "📋 Copying build files..."
cp -r build/* .

# Add all files
echo "➕ Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy React app to GitHub Pages - $(date)"

# Push to GitHub main branch
echo "🚀 Pushing to GitHub main branch..."
git push origin main

echo "✅ Deployment completed successfully!"
echo "🌐 Your website should be updated at: https://spiritys.com"
echo "⏰ It may take a few minutes for changes to propagate." 