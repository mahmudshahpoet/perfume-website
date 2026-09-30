import React from 'react';
import { Sparkles, Gift, Droplets } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside aria-label="Special promotions" className="bg-[#3b0b17] text-[#e8cbbd] py-2 px-4 text-[10px] md:text-[11px] tracking-[0.16em] uppercase font-medium border-b border-[#521323]">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 sm:gap-6 flex-wrap text-center">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[#d8a892]" />
          <span>Complimentary shipping on orders over $75</span>
        </div>
        <span className="hidden sm:inline text-[#7a3243]">|</span>
        <div className="flex items-center gap-1.5">
          <Droplets className="w-3 h-3 text-[#d8a892]" />
          <span>Sample every order</span>
        </div>
        <span className="hidden sm:inline text-[#7a3243]">|</span>
        <div className="flex items-center gap-1.5">
          <Gift className="w-3 h-3 text-[#d8a892]" />
          <span>Luxury gift wrapping</span>
        </div>
      </div>
    </aside>
  );
};
