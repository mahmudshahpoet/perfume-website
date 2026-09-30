import React from 'react';
import { COLLECTIONS, CollectionItem } from '../data/fragrances.ts';

interface ShopByCollectionProps {
  onSelectCollection: (collectionId: string) => void;
}

export const ShopByCollection: React.FC<ShopByCollectionProps> = ({
  onSelectCollection,
}) => {
  return (
    <section id="shop-by-collection" className="py-16 sm:py-20 bg-[#faf7f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-serif text-lg sm:text-xl tracking-[0.28em] font-normal text-[#2d1217] uppercase">
            SHOP BY COLLECTION
          </h2>
          <div className="w-12 h-[1px] bg-[#d9c4b5] mx-auto mt-2.5" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {COLLECTIONS.map((item: CollectionItem) => (
            <div
              key={item.id}
              onClick={() => onSelectCollection(item.id)}
              className="group relative h-[360px] sm:h-[400px] rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Tinted Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${item.bgGradient} transition-opacity duration-300 group-hover:opacity-95`}
              />

              {/* Card Content (Bottom-aligned as in reference) */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                <h3 className="font-serif text-lg sm:text-xl font-medium tracking-[0.12em] leading-snug uppercase mb-1.5 text-[#fbf5f0]">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#eedfd5]/90 tracking-wider mb-5 font-light">
                  {item.subtitle}
                </p>

                <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCollection(item.id);
                    }}
                    className="inline-block text-[10px] tracking-[0.2em] font-medium uppercase py-2.5 px-6 border border-white/70 hover:border-white hover:bg-white hover:text-[#2d1217] transition-all duration-300 rounded-xs"
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>

              {/* Subtle Inner Glow on Hover */}
              <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 rounded-lg transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
