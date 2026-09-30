import React from 'react';
import { Instagram, Facebook, Truck, RotateCcw, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  return (
    <footer id="footer" className="bg-[#24050e] text-[#e8cfc4] pt-16 pb-12 border-t border-[#450e1d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-6 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 pr-0 lg:pr-6">
            <div className="cursor-pointer select-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="font-serif text-3xl tracking-wide font-normal text-white">
                Veloura
              </div>
              <div className="text-[9px] tracking-[0.45em] text-[#c9a08e] uppercase font-medium mt-1">
                PARFUMS
              </div>
            </div>

            <p className="text-xs text-[#d4b5a8] leading-relaxed mt-4 max-w-xs font-light">
              Timeless fragrances. Unforgettable you.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3.5 mt-6 text-[#d4b5a8]">
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-[#521323] hover:border-[#d9a084] hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-[#521323] hover:border-[#d9a084] hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              {/* Pinterest & TikTok custom SVG icons */}
              <a
                href="#pinterest"
                aria-label="Pinterest"
                className="w-8 h-8 rounded-full border border-[#521323] hover:border-[#d9a084] hover:text-white flex items-center justify-center transition-colors"
              >
                <span className="font-serif font-bold text-xs">P</span>
              </a>
              <a
                href="#tiktok"
                aria-label="TikTok"
                className="w-8 h-8 rounded-full border border-[#521323] hover:border-[#d9a084] hover:text-white flex items-center justify-center transition-colors"
              >
                <span className="font-sans font-semibold text-xs">♪</span>
              </a>
            </div>
          </div>

          {/* SHOP Column */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white mb-4">
              SHOP
            </h4>
            <ul className="space-y-2.5 text-xs text-[#c9aba0] font-light">
              <li>
                <button
                  onClick={() => onNavigateSection('featured-fragrances')}
                  className="hover:text-white transition-colors"
                >
                  All Fragrances
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('featured-fragrances')}
                  className="hover:text-white transition-colors"
                >
                  Bestsellers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('shop-by-collection')}
                  className="hover:text-white transition-colors"
                >
                  Gift Sets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('featured-fragrances')}
                  className="hover:text-white transition-colors"
                >
                  Travel Sprays
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('featured-fragrances')}
                  className="text-[#e2a98f] hover:underline"
                >
                  Sale
                </button>
              </li>
            </ul>
          </div>

          {/* COLLECTIONS Column */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white mb-4">
              COLLECTIONS
            </h4>
            <ul className="space-y-2.5 text-xs text-[#c9aba0] font-light">
              <li>
                <button
                  onClick={() => onNavigateSection('shop-by-collection')}
                  className="hover:text-white transition-colors"
                >
                  Floral Bouquets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('shop-by-collection')}
                  className="hover:text-white transition-colors"
                >
                  Warm & Sensual
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('shop-by-collection')}
                  className="hover:text-white transition-colors"
                >
                  Fresh & Radiant
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('shop-by-collection')}
                  className="hover:text-white transition-colors"
                >
                  Exclusive Collection
                </button>
              </li>
            </ul>
          </div>

          {/* CUSTOMER CARE Column */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white mb-4">
              CUSTOMER CARE
            </h4>
            <ul className="space-y-2.5 text-xs text-[#c9aba0] font-light">
              <li>
                <a href="#shipping" className="hover:text-white transition-colors">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#returns" className="hover:text-white transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* ABOUT Column */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white mb-4">
              ABOUT
            </h4>
            <ul className="space-y-2.5 text-xs text-[#c9aba0] font-light">
              <li>
                <button
                  onClick={() => onNavigateSection('our-story')}
                  className="hover:text-white transition-colors"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('our-story')}
                  className="hover:text-white transition-colors"
                >
                  Ingredients
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('our-story')}
                  className="hover:text-white transition-colors"
                >
                  Craftsmanship
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('our-story')}
                  className="hover:text-white transition-colors"
                >
                  Sustainability
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Guarantees Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 pb-10 border-t border-[#420f1e]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#3b0b17] flex items-center justify-center shrink-0 text-[#d8a892]">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-semibold tracking-wider text-white uppercase">
                COMPLIMENTARY SHIPPING
              </div>
              <div className="text-[10px] text-[#b89587] font-light">
                On orders over $75
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#3b0b17] flex items-center justify-center shrink-0 text-[#d8a892]">
              <RotateCcw className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-semibold tracking-wider text-white uppercase">
                EASY RETURNS
              </div>
              <div className="text-[10px] text-[#b89587] font-light">
                30-day return policy
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#3b0b17] flex items-center justify-center shrink-0 text-[#d8a892]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-semibold tracking-wider text-white uppercase">
                SECURE PAYMENTS
              </div>
              <div className="text-[10px] text-[#b89587] font-light">
                Shop with confidence
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-8 border-t border-[#340a16] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#9c7d72] gap-4">
          <p>© 2025 Veloura Parfums. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-[#e8cfc4] transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms" className="hover:text-[#e8cfc4] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
