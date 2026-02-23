#!/bin/bash
cd /Users/residencesupply/clawd/projects/arkiology-website
git add .
git commit -m "Complete site content - All 5 pages with full content from HTML source"
git push origin main
echo "✅ Pushed to GitHub - Vercel will auto-deploy"
echo "Live at: https://arkiology.com"
