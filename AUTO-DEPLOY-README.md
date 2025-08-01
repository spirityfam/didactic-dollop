# 🚀 Auto-Deploy Setup for Spirity Website

This setup allows you to automatically deploy changes to your website whenever you make modifications.

## 📋 Available Scripts

### 1. **Manual Auto-Deploy** (`npm run auto-deploy`)
- Commits all current changes
- Pushes to GitHub
- Deploys to website
- Use this when you want to deploy current changes

### 2. **Watch and Auto-Deploy** (`npm run watch-deploy`)
- Watches for file changes in `src/` directory
- Automatically deploys when changes are detected
- Runs continuously until you stop it (Ctrl+C)

## 🎯 How to Use

### Option 1: Manual Deployment
```bash
# Make your changes to files
# Then run:
npm run auto-deploy
```

### Option 2: Continuous Watching
```bash
# Start the watcher (will run until you stop it)
npm run watch-deploy

# Make changes to any file in src/ directory
# Changes will be automatically deployed!
```

## 🔧 What Each Script Does

1. **Checks for changes** - Only deploys if there are actual changes
2. **Commits changes** - Creates a timestamped commit
3. **Pushes to GitHub** - Updates the main branch
4. **Builds the project** - Creates optimized production build
5. **Deploys to GitHub Pages** - Makes changes live on https://spiritys.com

## ⚠️ Requirements

- **fswatch** (for watch mode): Install with `brew install fswatch` (macOS)
- Git configured with proper credentials
- npm dependencies installed

## 🎉 Benefits

- **No manual steps** - Just make changes and they're live!
- **Automatic timestamps** - Every commit has a clear timestamp
- **Error handling** - Scripts check for changes before deploying
- **Fast deployment** - Optimized build and deploy process

## 🚨 Troubleshooting

If you get permission errors:
```bash
chmod +x auto-deploy.sh
chmod +x watch-and-deploy.sh
```

If fswatch is not found:
```bash
brew install fswatch  # macOS
# or install equivalent for your OS
```

## 📝 Example Usage

```bash
# Start watching for changes
npm run watch-deploy

# In another terminal, edit a file:
echo "// New comment" >> src/components/Testimonial.js

# The watcher will automatically:
# 1. Detect the change
# 2. Commit with timestamp
# 3. Push to GitHub
# 4. Deploy to website
# 5. Show success message
```

Your website will be automatically updated at https://spiritys.com! 🎉 