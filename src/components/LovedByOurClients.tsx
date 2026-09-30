import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/fragrances.ts';

export const LovedByOurClients: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextTestimonials = () => {
    setStartIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonials = () => {
    setStartIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Get current 3 visible items with wrap-around
  const visibleTestimonials = [
    TESTIMONIALS[startIndex % TESTIMONIALS.length],
    TESTIMONIALS[(startIndex + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(startIndex + 2) % TESTIMONIALS.length],
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#faf7f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with delicate diamond line */}
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="font-serif text-lg sm:text-xl tracking-[0.28em] font-normal text-[#2d1217] uppercase">
            LOVED BY OUR CLIENTS
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2.5">
            <span className="w-10 h-[1px] bg-[#d9c4b5]" />
            <span className="text-[#a46450] text-xs">✦</span>
            <span className="w-10 h-[1px] bg-[#d9c4b5]" />
          </div>
        </div>

        {/* Carousel Container with Left/Right Arrows */}
        <div className="relative flex items-center gap-3 sm:gap-6">
          {/* Left Arrow */}
          <button
            onClick={prevTestimonials}
            className="w-10 h-10 rounded-full border border-[#ebd6c7] bg-white hover:bg-[#3a0816] hover:text-white hover:border-[#3a0816] text-[#4d362c] flex items-center justify-center transition-all duration-300 shadow-xs cursor-pointer shrink-0 z-10"
            aria-label="Previous review"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 flex-1">
            {visibleTestimonials.map((t, idx) => (
              <div
                key={`${t.id}-${idx}`}
                className="bg-white rounded-lg border border-[#ebdcd0] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Top Row: Quote mark and Star rating */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl sm:text-4xl text-[#cca795] leading-none select-none">
                      “
                    </span>
                    <div className="flex items-center gap-1 text-[#c99540]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#c99540] text-[#c99540]" />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-[#4f3a31] text-xs sm:text-[13px] leading-relaxed italic font-light mb-6">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#f2e6dc]">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover border border-[#e5d0c2]"
                  />
                  <div>
                    <h4 className="font-medium text-xs tracking-wider text-[#2d1217] uppercase">
                      {t.author}
                    </h4>
                    <p className="text-[10px] text-[#8c7468] tracking-wider uppercase font-light">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextTestimonials}
            className="w-10 h-10 rounded-full border border-[#ebd6c7] bg-white hover:bg-[#3a0816] hover:text-white hover:border-[#3a0816] text-[#4d362c] flex items-center justify-center transition-all duration-300 shadow-xs cursor-pointer shrink-0 z-10"
            aria-label="Next review"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
