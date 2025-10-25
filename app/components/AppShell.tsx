'use client';

import { type ReactNode } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

interface AppShellProps {
  children: ReactNode;
  variant?: 'default' | 'glass';
}

export function AppShell({ children, variant = 'default' }: AppShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const shellClasses = variant === 'glass' 
    ? 'backdrop-blur-lg bg-surface/80' 
    : 'bg-bg';

  return (
    <div className={`min-h-screen ${shellClasses}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">MemoryLink</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-fg hover:text-primary transition-colors duration-200 font-medium">
                Explore
              </a>
              <a href="#" className="text-fg hover:text-primary transition-colors duration-200 font-medium">
                Create
              </a>
              <a href="#" className="text-fg hover:text-primary transition-colors duration-200 font-medium">
                Gallery
              </a>
              <a href="#" className="text-fg hover:text-primary transition-colors duration-200 font-medium">
                About
              </a>
            </div>

            {/* Wallet Connect */}
            <div className="hidden md:block">
              <ConnectButton />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-surface-hover transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col gap-4">
                <a href="#" className="text-fg hover:text-primary transition-colors duration-200 font-medium">
                  Explore
                </a>
                <a href="#" className="text-fg hover:text-primary transition-colors duration-200 font-medium">
                  Create
                </a>
                <a href="#" className="text-fg hover:text-primary transition-colors duration-200 font-medium">
                  Gallery
                </a>
                <a href="#" className="text-fg hover:text-primary transition-colors duration-200 font-medium">
                  About
                </a>
                <div className="pt-4 border-t border-border">
                  <ConnectButton />
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-surface/50 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">MemoryLink</span>
              </div>
              <p className="text-text-muted text-sm">
                Turn life moments into collectible memories—no crypto knowledge required.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Explore</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Create</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Support</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Farcaster</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-text-muted">
            <p>© 2024 MemoryLink. Built on Base. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
