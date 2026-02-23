#!/bin/bash
# Single-command deploy for Arkiology website
# Moves complete homepage + pushes all changes

cd /Users/residencesupply/clawd/projects/arkiology-website

# Load token from .env file (not committed to git)
source ~/.env.github 2>/dev/null || source ../../.env.github

# Move complete homepage to production
cp COMPLETE-HOMEPAGE.tsx app/page.tsx

# Add all changes
git add .

# Commit with timestamp
git commit -m "Complete site - All pages with full content (deployed $(date '+%Y-%m-%d %H:%M'))"

# Push to GitHub (Vercel auto-deploys)
git remote set-url origin https://${GITHUB_TOKEN}@github.com/ArkiologykrA/arkiology-website.git
git push origin main

echo ""
echo "✅ DEPLOYED!"
echo "Live at: https://arkiology.com"
echo "Vercel: https://vercel.com/arkiologys-projects/arkiology-website"
