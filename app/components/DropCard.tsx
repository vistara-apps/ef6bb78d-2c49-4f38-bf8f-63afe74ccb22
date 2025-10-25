'use client';

import { Calendar, MapPin, Users, TrendingUp } from 'lucide-react';

interface Drop {
  id: string;
  title: string;
  description: string;
  artworkUrl: string;
  eventDate: string;
  eventLocation: string;
  maxSupply: number;
  currentMinted: number;
  priceUSDC: number;
  status: 'active' | 'sold-out' | 'upcoming';
}

interface DropCardProps {
  drop: Drop;
  variant?: 'compact' | 'featured' | 'minting';
}

export function DropCard({ drop, variant = 'compact' }: DropCardProps) {
  const progress = (drop.currentMinted / drop.maxSupply) * 100;
  const remaining = drop.maxSupply - drop.currentMinted;

  return (
    <div className="group bg-surface rounded-lg border border-border overflow-hidden hover:shadow-card-hover transition-all duration-200 hover:scale-[1.02]">
      {/* Artwork */}
      <div className="relative aspect-square bg-surface-hover overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
        <div className="absolute top-4 right-4 px-3 py-1 bg-surface/90 backdrop-blur-sm rounded-full text-sm font-semibold">
          ${drop.priceUSDC}
        </div>
        {drop.status === 'sold-out' && (
          <div className="absolute inset-0 bg-bg/80 backdrop-blur-sm flex items-center justify-center">
            <span className="text-2xl font-bold">SOLD OUT</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
          {drop.title}
        </h3>
        <p className="text-text-muted text-sm mb-4 line-clamp-2">
          {drop.description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <Calendar className="w-4 h-4" />
            <span>{new Date(drop.eventDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <MapPin className="w-4 h-4" />
            <span>{drop.eventLocation}</span>
          </div>
        </div>

        {/* Progress Bar */}
        {variant === 'minting' && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-text-muted flex items-center gap-1">
                <Users className="w-4 h-4" />
                {drop.currentMinted} / {drop.maxSupply} minted
              </span>
              <span className="font-semibold text-primary">{remaining} left</span>
            </div>
            <div className="h-2 bg-surface-hover rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* CTA Button */}
        <button className="w-full py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-all duration-200 shadow-glow hover:shadow-card-hover">
          Mint Now
        </button>
      </div>
    </div>
  );
}
