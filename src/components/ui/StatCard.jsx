import React from 'react';

export function StatCard({ value, label }) {
  return (
    <div className="p-6 border border-white/5 bg-white/[0.01]">
      <div className="text-4xl font-light tracking-tight mb-2">{value}</div>
      <div className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">{label}</div>
    </div>
  );
}