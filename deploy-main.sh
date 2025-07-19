#!/bin/bash

echo "🚀 Starting deployment to main branch..."

# Build the React app
echo "📦 Building React app..."
npm run build

# Create .nojekyll file to bypass Jekyll processing
touch build/.nojekyll

# Copy all built files to root directory
echo "📁 Copying built files..."
cp -r build/* .

# Add .nojekyll file
touch .nojekyll

# Add all files to git
echo "📝 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy React app to main branch - $(date)"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Deployment completed!"
echo "🌐 Your website should be available at: https://spirityfam.github.io/didactic-dollop"
echo "⏰ Please wait 2-3 minutes for GitHub Pages to update." 