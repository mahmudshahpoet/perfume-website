import React from 'react';
import { Sparkles, Clock, Globe, Gift, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onDiscoverClick: () => void;
  onSelectFragrance: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDiscoverClick,
  onSelectFragrance,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fcf9f6] via-[#f7ece5] to-[#f4e6de] py-12 lg:py-20 border-b border-[#ebd9cd]/70">
      {/* Subtle ambient luxury light glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#ffd8cc]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#ebd0c3]/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline and Brand Narrative */}
          <div className="lg:col-span-6 z-10 pt-4 lg:pt-0">
            <span className="inline-block text-[11px] font-semibold tracking-[0.28em] text-[#9c5946] uppercase mb-4">
              CRAFTED TO CAPTIVATE
            </span>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[68px] font-normal text-[#2b0d16] leading-[1.08] tracking-tight mb-6">
              Scents that <br />
              <span className="italic font-normal font-serif text-[#41101e]">leave a legacy.</span>
            </h1>

            <p className="text-[#5e483e] text-sm sm:text-base leading-relaxed max-w-lg mb-8 font-light">
              Veloura Parfums creates timeless fragrances that celebrate elegance,
              femininity, and unforgettable presence.
            </p>

            {/* CTA Button */}
            <div className="mb-14">
              <button
                onClick={onDiscoverClick}
                className="group inline-flex items-center gap-2.5 bg-[#3a0816] hover:bg-[#541224] text-[#fbf6f2] text-xs font-medium tracking-[0.22em] uppercase py-4 px-9 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:translate-y-[-1px] cursor-pointer"
              >
                <span>DISCOVER THE COLLECTION</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Value Proposition Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#eedbd0]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#f4e2d7] flex items-center justify-center shrink-0">
                  <Sparkles className="w-3 h-3 text-[#7a3424]" />
                </div>
                <div className="text-[10px] font-semibold tracking-[0.14em] text-[#4d362c] uppercase leading-tight">
                  Clean<br />Ingredients
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#f4e2d7] flex items-center justify-center shrink-0">
                  <Clock className="w-3 h-3 text-[#7a3424]" />
                </div>
                <div className="text-[10px] font-semibold tracking-[0.14em] text-[#4d362c] uppercase leading-tight">
                  Long Lasting<br />Performance
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#f4e2d7] flex items-center justify-center shrink-0">
                  <Globe className="w-3 h-3 text-[#7a3424]" />
                </div>
                <div className="text-[10px] font-semibold tracking-[0.14em] text-[#4d362c] uppercase leading-tight">
                  Made in<br />France
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#f4e2d7] flex items-center justify-center shrink-0">
                  <Gift className="w-3 h-3 text-[#7a3424]" />
                </div>
                <div className="text-[10px] font-semibold tracking-[0.14em] text-[#4d362c] uppercase leading-tight">
                  Luxury<br />Packaging
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backing Card with soft blur model portrait & warm atmosphere */}
              <div className="relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-[#eedfd5]/80 bg-gradient-to-tr from-[#3a101b] via-[#632231] to-[#eed8cb]">
                {/* Background model portrait with warm overlay */}
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
                  alt="Veloura Parfums Inspiration Model"
                  className="absolute inset-0 w-full h-full object-cover object-top mix-blend-overlay opacity-40 scale-105 filter blur-[0.5px]"
                />

                {/* Warm champagne studio gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#26050e] via-[#3a0816]/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2b0812]/50 via-transparent to-[#e8c1b4]/20" />

                {/* Floating soft rose petals & bokeh */}
                <div className="absolute top-8 right-10 w-12 h-12 bg-pink-300/30 rounded-full blur-md animate-pulse" />
                <div className="absolute top-24 left-8 text-pink-200/40 text-3xl select-none">❀</div>
                <div className="absolute top-48 right-16 text-pink-200/50 text-2xl select-none rotate-45">✿</div>

                {/* 3 Perfume Bottles Stage Display */}
                <div className="absolute inset-x-0 bottom-0 pt-8 pb-6 px-4 flex items-end justify-center gap-3 sm:gap-4 z-20">
                  {/* Bottle 1: ROSE NOIR (Ruby Burgundy Bottle) */}
                  <div
                    onClick={() => onSelectFragrance('rose-noir')}
                    className="group relative cursor-pointer flex flex-col items-center transition-all duration-300 hover:translate-y-[-6px] hover:z-30 w-1/3"
                  >
                    {/* Bottle Cap */}
                    <div className="w-8 h-8 rounded-sm bg-gradient-to-b from-[#dfbe89] via-[#c69a59] to-[#99733c] shadow-md border-t border-[#f4e2c0] -mb-1" />
                    {/* Bottle Neck */}
                    <div className="w-4 h-3 bg-gradient-to-r from-[#aa8347] via-[#f7e0b5] to-[#aa8347]" />
                    {/* Bottle Body */}
                    <div className="w-full max-w-[120px] h-[180px] sm:h-[210px] rounded-lg bg-gradient-to-b from-[#4a0d1b] via-[#2f060f] to-[#1c0208] border border-[#a14357]/60 shadow-[0_15px_30px_rgba(0,0,0,0.6)] p-2.5 flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-sm">
                      {/* Glass Reflection Highlight */}
                      <div className="absolute inset-y-0 left-2 w-1.5 bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-full" />
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-pink-500/20 rounded-full blur-xl" />

                      {/* Bottle Label */}
                      <div className="w-full py-2.5 px-1 bg-[#1a0207]/90 border border-[#dfbe89]/40 rounded-sm text-center flex flex-col items-center">
                        <span className="font-serif text-[11px] sm:text-xs tracking-wider text-[#faeade]">Veloura</span>
                        <span className="text-[6px] tracking-[0.25em] text-[#d6b47c] uppercase">PARFUMS</span>
                        <div className="w-6 h-[1px] bg-[#d6b47c]/40 my-1" />
                        <span className="text-[7px] sm:text-[8px] font-semibold tracking-[0.15em] text-[#f4ded2] uppercase">ROSE NOIR</span>
                        <span className="text-[5px] sm:text-[6px] tracking-wider text-[#b89585] uppercase">EXTRAIT DE PARFUM</span>
                      </div>
                    </div>
                    {/* Base Reflection */}
                    <div className="w-16 h-3 bg-black/40 blur-sm rounded-full -mt-1" />
                  </div>

                  {/* Bottle 2: L'AMOUR (Center Hero Crystal Fluted Bottle) */}
                  <div
                    onClick={() => onSelectFragrance('lamour')}
                    className="group relative cursor-pointer flex flex-col items-center transition-all duration-300 hover:translate-y-[-8px] hover:z-30 w-1/3 -mb-2"
                  >
                    {/* Bottle Cap */}
                    <div className="w-10 h-9 rounded-sm bg-gradient-to-b from-[#f3e3ca] via-[#e2c192] to-[#b8905c] shadow-lg border-t border-white/80 -mb-1 flex items-center justify-center">
                      <div className="w-6 h-5 bg-white/30 rounded-xs" />
                    </div>
                    {/* Bottle Neck */}
                    <div className="w-5 h-3 bg-gradient-to-r from-[#b38a53] via-[#ffebb8] to-[#b38a53]" />
                    {/* Bottle Body */}
                    <div className="w-full max-w-[130px] h-[200px] sm:h-[235px] rounded-lg bg-gradient-to-b from-[#ffdcd7]/40 via-[#f9b5ab]/30 to-[#de6b7c]/40 border-2 border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.55)] p-3 flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-md">
                      {/* Crystal Facet Lines */}
                      <div className="absolute inset-y-0 left-3 w-[1px] bg-white/40" />
                      <div className="absolute inset-y-0 right-3 w-[1px] bg-white/40" />
                      <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/20" />
                      <div className="absolute top-2 left-2 w-8 h-8 bg-white/50 rounded-full blur-md" />

                      {/* Bottle Label */}
                      <div className="w-full py-3 px-1.5 bg-[#fbf5f2]/95 border border-[#dfbe89] rounded-sm text-center shadow-md flex flex-col items-center">
                        <span className="font-serif text-xs sm:text-[13px] tracking-wide text-[#340b15] font-medium">Veloura</span>
                        <span className="text-[6.5px] tracking-[0.25em] text-[#735345] uppercase">PARFUMS</span>
                        <div className="w-8 h-[1px] bg-[#dfbe89] my-1" />
                        <span className="text-[8px] sm:text-[9px] font-semibold tracking-[0.18em] text-[#340b15] uppercase">L'AMOUR</span>
                        <span className="text-[5.5px] sm:text-[6.5px] tracking-wider text-[#82695e] uppercase">EAU DE PARFUM</span>
                      </div>
                    </div>
                    {/* Base Reflection */}
                    <div className="w-20 h-4 bg-black/50 blur-sm rounded-full -mt-1" />
                  </div>

                  {/* Bottle 3: EAU DE LUMIÈRE (Golden Amber Fluted Bottle) */}
                  <div
                    onClick={() => onSelectFragrance('eau-de-lumiere')}
                    className="group relative cursor-pointer flex flex-col items-center transition-all duration-300 hover:translate-y-[-6px] hover:z-30 w-1/3"
                  >
                    {/* Bottle Cap */}
                    <div className="w-8 h-8 rounded-sm bg-gradient-to-b from-[#fad58f] via-[#d69f4b] to-[#9c6a1e] shadow-md border-t border-amber-100 -mb-1" />
                    {/* Bottle Neck */}
                    <div className="w-4 h-3 bg-gradient-to-r from-[#ba832e] via-[#ffe39c] to-[#ba832e]" />
                    {/* Bottle Body */}
                    <div className="w-full max-w-[120px] h-[185px] sm:h-[215px] rounded-lg bg-gradient-to-b from-[#fcd385]/40 via-[#f59e0b]/30 to-[#92400e]/40 border border-[#fde68a]/70 shadow-[0_15px_30px_rgba(0,0,0,0.6)] p-2.5 flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-md">
                      {/* Glass highlight */}
                      <div className="absolute inset-y-0 right-2 w-1.5 bg-gradient-to-b from-white/40 to-transparent rounded-full" />
                      <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-amber-400/20 rounded-full blur-lg" />

                      {/* Bottle Label */}
                      <div className="w-full py-2.5 px-1 bg-[#fffdf9]/95 border border-[#c49749] rounded-sm text-center shadow-sm flex flex-col items-center">
                        <span className="font-serif text-[11px] sm:text-xs tracking-wider text-[#3d240d]">Veloura</span>
                        <span className="text-[6px] tracking-[0.25em] text-[#856338] uppercase">PARFUMS</span>
                        <div className="w-6 h-[1px] bg-[#c49749]/50 my-1" />
                        <span className="text-[6.5px] sm:text-[7.5px] font-semibold tracking-[0.12em] text-[#3d240d] uppercase">EAU DE LUMIÈRE</span>
                        <span className="text-[5px] sm:text-[6px] tracking-wider text-[#7c634b] uppercase">EAU DE PARFUM</span>
                      </div>
                    </div>
                    {/* Base Reflection */}
                    <div className="w-16 h-3 bg-black/40 blur-sm rounded-full -mt-1" />
                  </div>
                </div>

                {/* Mirror surface polish line */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
