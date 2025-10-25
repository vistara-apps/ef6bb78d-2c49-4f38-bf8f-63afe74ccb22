'use client';

import { useState, useEffect } from 'react';
import { Sparkles, Zap, QrCode, Share2, TrendingUp, Users } from 'lucide-react';
import { AppShell } from './components/AppShell';
import { DropCard } from './components/DropCard';
import { StatsCard } from './components/StatsCard';
import { FeatureCard } from './components/FeatureCard';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const featuredDrops = [
    {
      id: '1',
      title: 'Base Summit 2024',
      description: 'Exclusive collectible from the inaugural Base Summit',
      artworkUrl: '/api/placeholder/400/400',
      eventDate: '2024-03-15',
      eventLocation: 'San Francisco, CA',
      maxSupply: 500,
      currentMinted: 342,
      priceUSDC: 15,
      status: 'active' as const,
    },
    {
      id: '2',
      title: 'Onchain Music Festival',
      description: 'Limited edition NFT from the biggest onchain music event',
      artworkUrl: '/api/placeholder/400/400',
      eventDate: '2024-04-20',
      eventLocation: 'Austin, TX',
      maxSupply: 1000,
      currentMinted: 856,
      priceUSDC: 10,
      status: 'active' as const,
    },
    {
      id: '3',
      title: 'Web3 Gaming Expo',
      description: 'Commemorative collectible from the premier gaming conference',
      artworkUrl: '/api/placeholder/400/400',
      eventDate: '2024-05-10',
      eventLocation: 'Los Angeles, CA',
      maxSupply: 750,
      currentMinted: 203,
      priceUSDC: 12,
      status: 'active' as const,
    },
  ];

  const stats = [
    { label: 'Total Collectibles Minted', value: '12,458', icon: Sparkles, trend: '+23%' },
    { label: 'Active Creators', value: '342', icon: Users, trend: '+15%' },
    { label: 'Events Hosted', value: '89', icon: TrendingUp, trend: '+31%' },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Instant Minting',
      description: 'Create and distribute collectibles in under 30 seconds with no wallet setup required.',
    },
    {
      icon: QrCode,
      title: 'QR Code Distribution',
      description: 'Generate scannable QR codes for seamless physical-to-digital experiences at events.',
    },
    {
      icon: Share2,
      title: 'Social Integration',
      description: 'Share collectibles directly to Farcaster and build your social proof gallery.',
    },
  ];

  return (
    <AppShell>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Turn Life Moments into{' '}
              <span className="gradient-text">Collectible Memories</span>
            </h1>
            <p className="text-xl text-text-muted mb-8 leading-relaxed">
              A frictionless platform for event organizers and creators to mint instant digital collectibles—no crypto knowledge required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-all duration-200 shadow-glow hover:shadow-card-hover">
                Create Your First Drop
              </button>
              <button className="px-8 py-4 bg-surface hover:bg-surface-hover text-fg font-semibold rounded-lg transition-all duration-200 border border-border">
                Explore Collectibles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Drops */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Drops</h2>
              <p className="text-text-muted">Trending collectibles from top events</p>
            </div>
            <button className="text-primary hover:text-primary-hover font-semibold transition-colors duration-200">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDrops.map((drop) => (
              <DropCard key={drop.id} drop={drop} variant="minting" />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why MemoryLink?</h2>
            <p className="text-text-muted text-lg">
              Built for creators and collectors who want the benefits of blockchain without the complexity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-12 border border-primary/30">
            <h2 className="text-4xl font-bold mb-4">Ready to Create Your First Drop?</h2>
            <p className="text-xl text-text-muted mb-8">
              Join hundreds of creators turning moments into memories
            </p>
            <button className="px-10 py-5 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-all duration-200 shadow-glow hover:shadow-card-hover text-lg">
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
