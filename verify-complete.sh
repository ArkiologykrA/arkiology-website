#!/bin/bash

echo "🔍 Verifying Complete Site Content..."
echo ""

# Homepage checks
echo "📄 Homepage (app/page.tsx):"
echo "  - Hero section:" $(grep -c "Stop paying for" app/page.tsx || echo "0")
echo "  - Marquee:" $(grep -c "MED SPAS" app/page.tsx || echo "0")
echo "  - What If:" $(grep -c "What If..." app/page.tsx || echo "0")
echo "  - The Problem:" $(grep -c "Everyone has a website" app/page.tsx || echo "0")
echo "  - Services Grid:" $(grep -c "Four pillars" app/page.tsx || echo "0")
echo "  - Live Demo:" $(grep -c "2am\|2:14 AM" app/page.tsx || echo "0")
echo "  - The Name:" $(grep -c "Ark.*-ology" app/page.tsx || echo "0")
echo "  - Process Timeline:" $(grep -c "Week 1-2\|Week 3-4" app/page.tsx || echo "0")
echo "  - Results:" $(grep -c "3x.*40%.*<5s" app/page.tsx || echo "0")
echo "  - Stats Bar:" $(grep -c "24/7.*4-8.*100%.*0" app/page.tsx || echo "0")
echo "  - FAQ:" $(grep -c "How much do your services cost" app/page.tsx || echo "0")
echo "  - Testimonials:" $(grep -c "Maria R\|James T\|Sarah L" app/page.tsx || echo "0")
echo "  - Our Promise:" $(grep -c "24-Hour Response\|You Own Everything" app/page.tsx || echo "0")
echo ""

# Services checks
echo "📄 Services (app/services/page.tsx):"
echo "  - All 4 services:" $(grep -c "Websites.*Digital Presence.*Automations.*AI Employees" app/services/page.tsx || echo "0")
echo ""

# About checks
echo "📄 About (app/about/page.tsx):"
echo "  - Philosophy section:" $(grep -c "Infrastructure over aesthetics" app/about/page.tsx || echo "0")
echo "  - Values section:" $(grep -c "Honesty.*Execution.*Partnership.*Quality" app/about/page.tsx || echo "0")
echo ""

# AI Employees checks
echo "📄 AI Employees (app/ai-employees/page.tsx):"
echo "  - Stats:" $(grep -c "78%.*5 min.*35%" app/ai-employees/page.tsx || echo "0")
echo ""

# Contact checks
echo "📄 Contact (app/contact/page.tsx):"
echo "  - Form fields:" $(grep -c "name.*email.*company.*service.*budget.*message.*timeline" app/contact/page.tsx || echo "0")
echo ""

echo "✅ Verification complete!"
