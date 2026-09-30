import React, { useState } from 'react';
import { X, Heart, Star, Sparkles, Check, ShoppingBag, ShieldCheck } from 'lucide-react';
import { Fragrance } from '../data/fragrances.ts';

interface QuickViewModalProps {
  fragrance: Fragrance | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (fragrance: Fragrance) => void;
  isWishlisted: boolean;
  onToggleWishlist: (id: string) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  fragrance,
  isOpen,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}) => {
  const [selectedSize, setSelectedSize] = useState('100ml');
  const [isAdded, setIsAdded] = useState(false);

  if (!isOpen || !fragrance) return null;

  const handleAdd = () => {
    onAddToCart(fragrance);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#1c040b]/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative bg-[#fcfaf7] w-full max-w-3xl rounded-xl shadow-2xl border border-[#ebdcd0] overflow-hidden z-10 animate-scaleUp">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#63493d] hover:text-[#3a0816] transition-colors rounded-full bg-white/80"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Product Visual */}
          <div className="bg-gradient-to-b from-[#f8f1eb] to-[#eedcd1] p-8 flex items-center justify-center relative">
            <img
              src={fragrance.image}
              alt={fragrance.name}
              className="max-h-72 object-contain mix-blend-multiply drop-shadow-2xl"
            />
            {fragrance.badge && (
              <span className="absolute top-4 left-4 bg-[#3a0816] text-[#faeee6] text-[10px] tracking-widest uppercase font-medium py-1 px-3 rounded-full">
                {fragrance.badge}
              </span>
            )}
          </div>

          {/* Right: Product Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] tracking-[0.22em] text-[#915a49] uppercase font-semibold">
                  {fragrance.concentration}
                </span>
                <div className="flex items-center gap-1 text-[#c99540]">
                  <Star className="w-3.5 h-3.5 fill-[#c99540]" />
                  <span className="text-xs font-semibold text-[#2d1217]">{fragrance.rating}</span>
                  <span className="text-[10px] text-[#826a5e]">({fragrance.reviewsCount})</span>
                </div>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#2d1217] uppercase tracking-wide">
                {fragrance.name}
              </h2>

              <p className="text-base font-semibold text-[#2d1217] mt-1.5 mb-4">
                ${fragrance.price.toFixed(2)}
              </p>

              <p className="text-xs sm:text-[13px] text-[#543f35] leading-relaxed mb-6 font-light">
                {fragrance.description}
              </p>

              {/* Olfactory Scent Pyramid */}
              <div className="bg-[#f5ede5] p-3.5 rounded-lg border border-[#e8d7ca] mb-6">
                <div className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7a3424] mb-2">
                  <Sparkles className="w-3 h-3" /> Olfactory Notes
                </div>
                <div className="space-y-1.5 text-xs">
                  <div>
                    <span className="font-medium text-[#2d1217]">Top: </span>
                    <span className="text-[#634e44]">{fragrance.notes.top.join(' · ')}</span>
                  </div>
                  <div>
                    <span className="font-medium text-[#2d1217]">Heart: </span>
                    <span className="text-[#634e44]">{fragrance.notes.heart.join(' · ')}</span>
                  </div>
                  <div>
                    <span className="font-medium text-[#2d1217]">Base: </span>
                    <span className="text-[#634e44]">{fragrance.notes.base.join(' · ')}</span>
                  </div>
                </div>
              </div>

              {/* Volume Selection */}
              <div className="mb-6">
                <label className="block text-[10px] tracking-wider uppercase font-semibold text-[#543f35] mb-2">
                  Bottle Size
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedSize('50ml')}
                    className={`text-xs py-1.5 px-4 rounded border transition-colors ${
                      selectedSize === '50ml'
                        ? 'border-[#3a0816] bg-[#3a0816] text-white'
                        : 'border-[#dfcec1] text-[#4d362c] hover:border-[#3a0816]'
                    }`}
                  >
                    50ml / 1.7 oz
                  </button>
                  <button
                    onClick={() => setSelectedSize('100ml')}
                    className={`text-xs py-1.5 px-4 rounded border transition-colors ${
                      selectedSize === '100ml'
                        ? 'border-[#3a0816] bg-[#3a0816] text-white'
                        : 'border-[#dfcec1] text-[#4d362c] hover:border-[#3a0816]'
                    }`}
                  >
                    100ml / 3.4 oz
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="flex gap-2.5">
                <button
                  onClick={handleAdd}
                  className={`flex-1 py-3 px-4 rounded-sm text-xs font-medium tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                    isAdded
                      ? 'bg-[#2b6336] text-white'
                      : 'bg-[#3a0816] hover:bg-[#521323] text-white hover:shadow-md'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" /> ADDED TO BAG
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" /> ADD TO BAG — ${fragrance.price.toFixed(2)}
                    </>
                  )}
                </button>

                <button
                  onClick={() => onToggleWishlist(fragrance.id)}
                  className={`p-3 rounded-sm border transition-colors flex items-center justify-center ${
                    isWishlisted
                      ? 'border-[#3a0816] bg-[#fbf2ef] text-[#3a0816]'
                      : 'border-[#dfcec1] text-[#73584c] hover:border-[#3a0816]'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#3a0816]' : ''}`} />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#7d655a]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3a0816]" />
                <span>Complimentary luxury sample & free returns included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
