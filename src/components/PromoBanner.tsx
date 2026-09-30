import React from 'react';

interface PromoBannerProps {
  onShopSaleClick: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onShopSaleClick }) => {
  return (
    <section className="bg-[#380815] text-[#fbf6f2] relative overflow-hidden py-9 sm:py-11 border-y border-[#521323]">
      {/* Decorative Botanical Petal Watermark SVG in Background Right */}
      <svg
        className="absolute right-3 sm:right-12 -bottom-10 w-44 h-44 text-[#e2a98f]/10 pointer-events-none select-none"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path d="M100 20 C120 60 160 80 180 100 C160 120 120 140 100 180 C80 140 40 120 20 100 C40 80 80 60 100 20 Z" />
        <circle cx="100" cy="100" r="22" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M50 50 C80 70 90 90 100 100 C90 110 80 130 50 150" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M150 50 C120 70 110 90 100 100 C110 110 120 130 150 150" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Left: 20% OFF display */}
          <div className="flex items-baseline gap-2 shrink-0">
            <span className="font-serif text-5xl sm:text-6xl lg:text-[70px] font-normal tracking-tight text-[#f2dfd3] leading-none">
              20%
            </span>
            <span className="font-serif text-lg sm:text-xl font-normal tracking-widest text-[#d8b09e] uppercase">
              OFF
            </span>
          </div>

          {/* Center: Editorial promo copy */}
          <div className="text-center md:text-left flex-1 md:px-6">
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-white tracking-wide">
              Because you deserve something exquisite.
            </h3>
            <p className="text-xs sm:text-sm text-[#f4ded2]/85 tracking-wider mt-1 font-light">
              Enjoy 20% off your order for a limited time only. Use code <span className="underline decoration-[#e2a98f] font-medium text-white">VELOURA20</span> at checkout.
            </p>
          </div>

          {/* Right: SHOP THE SALE button */}
          <div className="shrink-0">
            <button
              onClick={onShopSaleClick}
              className="bg-[#fbf7f3] hover:bg-white text-[#380815] text-[11px] font-medium tracking-[0.2em] uppercase py-3.5 px-8 rounded-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-102 cursor-pointer"
            >
              SHOP THE SALE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
