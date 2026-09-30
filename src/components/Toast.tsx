import React from 'react';
import { Check, ShoppingBag, Heart } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'cart' | 'wishlist' | 'info';
  onViewCart?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type, onViewCart }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#2d0914] text-[#fbf6f2] py-3 px-5 rounded-lg shadow-2xl border border-[#6b1e32] flex items-center gap-3 animate-slideUp">
      <div className="w-6 h-6 rounded-full bg-[#521323] flex items-center justify-center text-white shrink-0">
        {type === 'cart' ? (
          <ShoppingBag className="w-3.5 h-3.5" />
        ) : type === 'wishlist' ? (
          <Heart className="w-3.5 h-3.5 fill-white" />
        ) : (
          <Check className="w-3.5 h-3.5" />
        )}
      </div>

      <span className="text-xs tracking-wider uppercase font-medium">{message}</span>

      {type === 'cart' && onViewCart && (
        <button
          onClick={onViewCart}
          className="ml-2 text-[10px] uppercase font-semibold text-[#f5c6b4] underline hover:text-white transition-colors cursor-pointer"
        >
          View Bag
        </button>
      )}
    </div>
  );
};
