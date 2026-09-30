import React from 'react';
import { Sparkles, Beaker, Leaf, Clock, ArrowRight } from 'lucide-react';

interface OurStoryProps {
  onDiscoverCraftClick: () => void;
  onExploreNotesClick: () => void;
}

export const OurStory: React.FC<OurStoryProps> = ({
  onDiscoverCraftClick,
  onExploreNotesClick,
}) => {
  return (
    <section id="our-story" className="py-16 sm:py-24 bg-[#f8f4ee] border-b border-[#ebdcd0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heritage Copy & Pillars */}
          <div className="lg:col-span-6">
            <span className="inline-block text-[11px] font-semibold tracking-[0.28em] text-[#9c5946] uppercase mb-3">
              OUR STORY
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b0d16] leading-[1.15] mb-5">
              The art of fine fragrance <br />
              <span className="italic font-normal">is our heritage.</span>
            </h2>

            <p className="text-[#59443b] text-sm sm:text-[15px] leading-relaxed mb-7 font-light">
              At Veloura Parfums, every scent is a work of art—meticulously crafted in
              France using the world's finest ingredients. We believe in timeless elegance,
              sustainable luxury, and the emotion that only a signature scent can evoke.
            </p>

            {/* Discover Craft Button */}
            <div className="mb-10">
              <button
                onClick={onDiscoverCraftClick}
                className="inline-flex items-center gap-2 bg-[#3a0816] hover:bg-[#541224] text-[#fbf6f2] text-[11px] font-medium tracking-[0.2em] uppercase py-3.5 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>DISCOVER OUR CRAFT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 4 Feature Badges Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#e2d0c2]">
              <div className="space-y-1.5">
                <div className="w-7 h-7 rounded-full bg-[#eee2d6] flex items-center justify-center text-[#7a3424]">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-semibold tracking-wider text-[#351c14] uppercase leading-tight">
                  Finest Ingredients
                </div>
                <p className="text-[9.5px] text-[#69544c] leading-tight font-light">
                  Sourced responsibly from around the world
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="w-7 h-7 rounded-full bg-[#eee2d6] flex items-center justify-center text-[#7a3424]">
                  <Beaker className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-semibold tracking-wider text-[#351c14] uppercase leading-tight">
                  Expert Artisans
                </div>
                <p className="text-[9.5px] text-[#69544c] leading-tight font-light">
                  Blended by master perfumers in France
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="w-7 h-7 rounded-full bg-[#eee2d6] flex items-center justify-center text-[#7a3424]">
                  <Leaf className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-semibold tracking-wider text-[#351c14] uppercase leading-tight">
                  Sustainable Luxury
                </div>
                <p className="text-[9.5px] text-[#69544c] leading-tight font-light">
                  Eco-conscious choices for a better tomorrow
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="w-7 h-7 rounded-full bg-[#eee2d6] flex items-center justify-center text-[#7a3424]">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-semibold tracking-wider text-[#351c14] uppercase leading-tight">
                  Timeless Quality
                </div>
                <p className="text-[9.5px] text-[#69544c] leading-tight font-light">
                  Made to be treasured for generations
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Flatlay Composition */}
          <div className="lg:col-span-6 relative">
            <div
              onClick={onExploreNotesClick}
              className="group relative h-[420px] sm:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-[#ebd8cb] bg-[#efe3d6] cursor-pointer"
            >
              {/* Flatlay Photography: Perfume + Vanilla + Citrus + Dried Roses */}
              <img
                src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=85"
                alt="Veloura Parfums Craftsmanship & Raw Ingredients"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />

              {/* Rich Warm Ambient Grading */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2b0c16]/50 via-transparent to-[#ecd3c2]/30" />

              {/* Decorative Raw Elements Tag */}
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm py-1.5 px-3.5 rounded-full border border-[#ebd6c7] text-[10px] tracking-[0.2em] font-medium text-[#4a2e25] uppercase shadow-xs">
                Raw Botanicals & Extrait
              </div>

              {/* Inset Rose Noir bottle vignette with botanicals */}
              <div className="absolute bottom-5 right-5 left-5 p-4 rounded-xl bg-gradient-to-r from-[#21040b]/90 to-[#3b0b18]/85 backdrop-blur-md border border-[#c49749]/30 text-white flex items-center justify-between">
                <div>
                  <div className="text-[9px] tracking-[0.25em] text-[#d6b47c] uppercase font-medium">
                    Grasse, France · Harvest 2025
                  </div>
                  <div className="font-serif text-base tracking-wide text-[#fdf5ee]">
                    Rose de Mai & Madagascar Bourbon Vanilla
                  </div>
                </div>
                <div className="text-[10px] tracking-wider text-[#e2c192] uppercase font-semibold border-b border-[#e2c192] pb-0.5 shrink-0 ml-4 group-hover:translate-x-1 transition-transform">
                  Explore Formula →
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
