'use client';

import { type LucideIcon } from 'lucide-react';

interface StatsCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
}

export function StatsCard({ label, value, icon: Icon, trend }: StatsCardProps) {
  return (
    <div className="bg-surface rounded-lg border border-border p-6 hover:shadow-card transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        {trend && (
          <span className="text-success text-sm font-semibold flex items-center gap-1">
            {trend}
          </span>
        )}
      </div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-text-muted text-sm">{label}</div>
    </div>
  );
}
