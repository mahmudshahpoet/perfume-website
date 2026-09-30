import React from 'react';
import { Heart, Eye, Check } from 'lucide-react';
import { Fragrance } from '../data/fragrances.ts';

interface FeaturedFragrancesProps {
  fragrances: Fragrance[];
  wishlist: string[];
  addedId: string | null;
  onToggleWishlist: (id: string) => void;
  onAddToCart: (fragrance: Fragrance) => void;
  onQuickView: (fragrance: Fragrance) => void;
  onViewAllClick: () => void;
}

export const FeaturedFragrances: React.FC<FeaturedFragrancesProps> = ({
  fragrances,
  wishlist,
  addedId,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
  onViewAllClick,
}) => {
  return (
    <section id="featured-fragrances" className="py-16 sm:py-24 bg-[#fbf9f6] border-b border-[#eae1d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="font-serif text-lg sm:text-xl tracking-[0.28em] font-normal text-[#2d1217] uppercase">
            FEATURED FRAGRANCES
          </h2>
          <div className="w-12 h-[1px] bg-[#d9c4b5] mx-auto mt-2.5" />
        </div>

        {/* 5 Fragrances Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {fragrances.map((fragrance) => {
            const isWishlisted = wishlist.includes(fragrance.id);
            const isJustAdded = addedId === fragrance.id;

            return (
              <div
                key={fragrance.id}
                className="group bg-white rounded-lg border border-[#e8dfd5] p-3 sm:p-4 flex flex-col justify-between hover:shadow-xl hover:border-[#cfb8a6] transition-all duration-300 relative"
              >
                {/* Wishlist Heart Icon */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(fragrance.id);
                  }}
                  className="absolute top-3.5 right-3.5 z-10 p-1.5 rounded-full text-[#9c8275] hover:text-[#521323] transition-colors cursor-pointer"
                  aria-label="Save to wishlist"
                >
                  <Heart
                    className={`w-4 h-4 transition-transform active:scale-125 ${
                      isWishlisted ? 'fill-[#521323] text-[#521323]' : 'stroke-[1.3]'
                    }`}
                  />
                </button>

                {/* Fragrance Bottle Display */}
                <div
                  onClick={() => onQuickView(fragrance)}
                  className="relative h-48 sm:h-56 w-full flex items-center justify-center p-2 mb-4 cursor-pointer overflow-hidden rounded bg-gradient-to-b from-[#faf6f2] to-[#f4ebe3]/40"
                >
                  {/* Clean perfume bottle photo */}
                  <img
                    src={fragrance.image}
                    alt={fragrance.name}
                    className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-108 transition-transform duration-500"
                  />

                  {/* Quick View Button overlay on hover */}
                  <div className="absolute inset-0 bg-[#2b0c14]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-[#2d1217] text-[10px] tracking-widest uppercase font-medium py-1.5 px-3 rounded-full shadow-md flex items-center gap-1.5">
                      <Eye className="w-3 h-3" /> Quick View
                    </span>
                  </div>
                </div>

                {/* Fragrance Details */}
                <div className="text-center mb-4">
                  <h3
                    onClick={() => onQuickView(fragrance)}
                    className="font-serif text-sm sm:text-base font-semibold tracking-wider text-[#2d1217] uppercase hover:text-[#521323] cursor-pointer transition-colors"
                  >
                    {fragrance.name}
                  </h3>
                  <p className="text-[9.5px] sm:text-[10px] tracking-[0.2em] text-[#856b5e] uppercase mt-0.5 font-medium">
                    {fragrance.concentration}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-[#2d1217] mt-1.5">
                    ${fragrance.price.toFixed(2)}
                  </p>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => onAddToCart(fragrance)}
                  className={`w-full py-2.5 px-3 text-[10px] sm:text-[11px] font-medium tracking-[0.16em] uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs ${
                    isJustAdded
                      ? 'bg-[#2e5e3b] text-white'
                      : 'bg-[#3a0816] hover:bg-[#541224] text-white hover:shadow-md'
                  }`}
                >
                  {isJustAdded ? (
                    <>
                      <Check className="w-3 h-3" /> ADDED
                    </>
                  ) : (
                    'ADD TO CART'
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* View All Fragrances Link */}
        <div className="text-center mt-10">
          <button
            onClick={onViewAllClick}
            className="inline-flex items-center text-[11px] sm:text-xs tracking-[0.22em] font-medium uppercase text-[#472d24] hover:text-[#521323] transition-colors group cursor-pointer"
          >
            <span>VIEW ALL FRAGRANCES</span>
            <span className="ml-1 group-hover:translate-x-1 transition-transform">›</span>
          </button>
        </div>
      </div>
    </section>
  );
};
