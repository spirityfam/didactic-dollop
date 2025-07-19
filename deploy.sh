#!/bin/bash

# Build the React app
npm run build

# Create a .nojekyll file to bypass Jekyll processing
touch build/.nojekyll

# Copy all files from build to a temporary directory
cp -r build/* .

# Add all files
git add .

# Commit changes
git commit -m "Deploy React app to GitHub Pages"

# Push to GitHub
git push origin main

echo "Deployment completed!" 