import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Gift } from 'lucide-react';
import { Fragrance } from '../data/fragrances.ts';

export interface CartItem {
  fragrance: Fragrance;
  quantity: number;
  size: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
  appliedPromo: string | null;
  onApplyPromo: (code: string) => boolean;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  appliedPromo,
  onApplyPromo,
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [selectedSample, setSelectedSample] = useState('Rose Noir Sample (2ml)');

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.fragrance.price * item.quantity,
    0
  );

  const discountRate = appliedPromo === 'VELOURA20' ? 0.2 : 0;
  const discountAmount = subtotal * discountRate;
  const isFreeShipping = subtotal >= 75 || items.length === 0;
  const shippingCost = isFreeShipping ? 0 : 12.0;
  const total = Math.max(0, subtotal - discountAmount + (items.length > 0 ? shippingCost : 0));

  const freeShippingThreshold = 75;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const success = onApplyPromo(promoInput.trim().toUpperCase());
    if (success) {
      setPromoError('');
    } else {
      setPromoError('Invalid coupon code. Try "VELOURA20"');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#1f060d]/60 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#fdfbf9] shadow-2xl flex flex-col justify-between border-l border-[#ebdcd0]">
          {/* Cart Header */}
          <div className="p-5 sm:p-6 border-b border-[#ebdcd0] flex items-center justify-between bg-[#faf6f2]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#3b0816]" />
              <h2 className="font-serif text-lg font-medium tracking-wider uppercase text-[#2d1217]">
                Your Shopping Bag ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#6e584f] hover:text-[#3b0816] transition-colors rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Complimentary Shipping Threshold Progress Bar */}
          <div className="bg-[#f5ece5] px-5 py-3 border-b border-[#ebdcd0] text-center">
            {isFreeShipping && items.length > 0 ? (
              <p className="text-[11px] font-medium tracking-wider text-[#35613c] uppercase">
                ✦ You've unlocked Complimentary Express Shipping!
              </p>
            ) : (
              <p className="text-[11px] font-light text-[#573e34]">
                Add <span className="font-medium text-[#3b0816]">${remainingForFreeShipping.toFixed(2)}</span> more to qualify for <span className="font-medium">Free Shipping</span>
              </p>
            )}
            <div className="w-full bg-[#ebdcd0] h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-[#521323] h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <ShoppingBag className="w-12 h-12 text-[#d4b9a9] mx-auto stroke-1" />
                <h3 className="font-serif text-lg text-[#3d1e16]">Your bag is currently empty</h3>
                <p className="text-xs text-[#7d655a] max-w-xs mx-auto">
                  Explore our handcrafted French fragrances and elevate your daily ritual.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 bg-[#3a0816] text-white text-[11px] font-medium tracking-[0.2em] uppercase py-3 px-6 rounded-full hover:bg-[#541224] transition-colors"
                >
                  Explore Fragrances
                </button>
              </div>
            ) : (
              <>
                {items.map((item) => (
                  <div
                    key={item.fragrance.id}
                    className="flex gap-4 p-3 bg-white rounded-lg border border-[#eee4db] relative group"
                  >
                    <div className="w-20 h-24 bg-[#faf6f2] rounded p-1 flex items-center justify-center shrink-0">
                      <img
                        src={item.fragrance.image}
                        alt={item.fragrance.name}
                        className="max-h-full max-w-full object-contain mix-blend-multiply"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-sm font-semibold tracking-wider text-[#2d1217] uppercase">
                            {item.fragrance.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.fragrance.id)}
                            className="text-[#aa9185] hover:text-[#991b1b] transition-colors p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[10px] tracking-wider text-[#826a5d] uppercase">
                          {item.fragrance.concentration} · {item.size}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#f4ebe3]">
                        {/* Quantity controls */}
                        <div className="flex items-center border border-[#e5d8cc] rounded">
                          <button
                            onClick={() => onUpdateQuantity(item.fragrance.id, -1)}
                            className="p-1 hover:bg-[#f5ede5] text-[#543b31] transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-medium text-[#2d1217]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.fragrance.id, 1)}
                            className="p-1 hover:bg-[#f5ede5] text-[#543b31] transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-medium text-xs text-[#2d1217]">
                          ${(item.fragrance.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Complimentary Sample Choice */}
                <div className="p-3.5 rounded-lg bg-[#f8f2eb] border border-[#ebd8cb] mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-4 h-4 text-[#7a3424]" />
                    <span className="text-[11px] font-semibold tracking-wider text-[#3d1810] uppercase">
                      Select Complimentary Sample
                    </span>
                  </div>
                  <select
                    value={selectedSample}
                    onChange={(e) => setSelectedSample(e.target.value)}
                    className="w-full text-xs bg-white border border-[#ded0c3] rounded p-2 text-[#4d3329] focus:outline-none"
                  >
                    <option value="Rose Noir Sample (2ml)">Rose Noir Extrait (2ml)</option>
                    <option value="L'Amour Sample (2ml)">L'Amour Eau de Parfum (2ml)</option>
                    <option value="Eau de Lumière Sample (2ml)">Eau de Lumière (2ml)</option>
                    <option value="Jardin Secrète Sample (2ml)">Jardin Secrète (2ml)</option>
                    <option value="Véloura Intense Sample (2ml)">Véloura Intense (2ml)</option>
                  </select>
                </div>
              </>
            )}
          </div>

          {/* Cart Footer */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 bg-[#faf6f2] border-t border-[#ebdcd0] space-y-3.5">
              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (e.g. VELOURA20)"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  className="flex-1 bg-white border border-[#ded0c3] text-xs px-3 py-2 rounded focus:outline-none uppercase text-[#2b1810] placeholder-[#998379]"
                />
                <button
                  type="submit"
                  className="bg-[#421522] hover:bg-[#591b2c] text-white text-[10px] tracking-wider uppercase font-medium px-4 py-2 rounded transition-colors"
                >
                  Apply
                </button>
              </form>

              {appliedPromo && (
                <div className="text-[11px] text-[#2b6336] flex items-center justify-between">
                  <span>Coupon {appliedPromo} applied (20% OFF)</span>
                  <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              {promoError && (
                <div className="text-[11px] text-[#991b1b]">{promoError}</div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#5c463d] pt-2 border-t border-[#ebdcd0]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {appliedPromo && (
                  <div className="flex justify-between text-[#2b6336]">
                    <span>Promotional Discount (20%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{isFreeShipping ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-[#2d1217] pt-2 border-t border-[#ebdcd0]">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={onCheckout}
                className="w-full bg-[#3a0816] hover:bg-[#541224] text-white text-xs font-medium tracking-[0.2em] uppercase py-3.5 px-4 rounded-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#856e63]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#541224]" />
                <span>256-bit SSL encrypted & secure checkout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
