'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ark-black/90 backdrop-blur-md border-b border-ark-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          ARK<span className="text-ark-accent">▲</span>OLOGY
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/services" className="text-ark-light hover:text-ark-white transition-colors">
            Services
          </Link>
          <Link href="/ai-employees" className="text-ark-light hover:text-ark-white transition-colors">
            AI Employees
          </Link>
          <Link href="/about" className="text-ark-light hover:text-ark-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="bg-ark-white text-ark-black px-5 py-2.5 font-medium hover:bg-ark-light transition-colors">
            Start a Project
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-ark-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ark-dark border-t border-ark-border">
          <div className="px-6 py-4 space-y-4">
            <Link href="/services" className="block text-ark-light hover:text-ark-white">
              Services
            </Link>
            <Link href="/ai-employees" className="block text-ark-light hover:text-ark-white">
              AI Employees
            </Link>
            <Link href="/about" className="block text-ark-light hover:text-ark-white">
              About
            </Link>
            <Link href="/contact" className="block bg-ark-white text-ark-black px-5 py-3 font-medium text-center">
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
