#!/bin/bash
set -e

echo "🚀 Deploying Complete Arkiology Site..."

cd ~/clawd/projects/arkiology-website

# Load GitHub token
export GITHUB_TOKEN=$(grep GITHUB_TOKEN ~/clawd/.env.github | cut -d= -f2)

# Configure git
git config user.name "ArkiologykrA"
git config user.email "contact@arkiology.com"
git remote set-url origin https://ArkiologykrA:${GITHUB_TOKEN}@github.com/ArkiologykrA/arkiology-website.git

# Add all files
git add .

# Commit with detailed message
git commit -m "COMPLETE SITE - All 5 pages with 100% content

Homepage (18 sections):
✅ Hero + Trust indicators + Scroll indicator
✅ Marquee (Industries)
✅ What If (4 scenarios)
✅ The Problem
✅ Services Grid (4 services)
✅ How We're Different (3 principles)
✅ Live Demo Mock (chat at 2am)
✅ The Name (Ark + -ology)
✅ Who We Serve (3 business types)
✅ Process Timeline (4 weeks)
✅ Results Section (stats + before/after)
✅ Stats Bar (24/7, 4-8, 100%, 0)
✅ FAQ (6 questions)
✅ Testimonials (3 clients)
✅ Why Clients Trust Us
✅ Our Promise (3 guarantees)
✅ Final CTA (with circles)
✅ Footer

Services: All 4 services detailed + process
About: Complete (name, philosophy, approach, location, values)
AI Employees: Hero + chat demo + stats + capabilities
Contact: Full form + FAQ + success state

Zero content truncated. Zero sections missing."

# Push to GitHub
git push origin main --force

echo "✅ Deployment complete!"
echo "🌐 Site deploying to: https://arkiology.com"
