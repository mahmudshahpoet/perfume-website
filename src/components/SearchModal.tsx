import React, { useState, useMemo } from 'react';
import { X, Search, Sparkles } from 'lucide-react';
import { FRAGRANCES, Fragrance } from '../data/fragrances.ts';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFragrance: (fragrance: Fragrance) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectFragrance,
}) => {
  const [query, setQuery] = useState('');

  const filteredFragrances = useMemo(() => {
    if (!query.trim()) return FRAGRANCES;
    const q = query.toLowerCase();
    return FRAGRANCES.filter(
      (f) =>
        f.name.toLowerCase().includes(q) ||
        f.concentration.toLowerCase().includes(q) ||
        f.description.toLowerCase().includes(q) ||
        f.notes.top.some((n) => n.toLowerCase().includes(q)) ||
        f.notes.heart.some((n) => n.toLowerCase().includes(q)) ||
        f.notes.base.some((n) => n.toLowerCase().includes(q))
    );
  }, [query]);

  if (!isOpen) return null;

  const quickTags = ['Rose', 'Vanilla', 'Amber', 'Jasmine', 'Oud', 'Fresh', 'Floral'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#1c040b]/70 backdrop-blur-xs transition-opacity"
      />

      {/* Search Container */}
      <div className="relative bg-[#fcfaf7] w-full max-w-2xl rounded-xl shadow-2xl border border-[#ebdcd0] p-6 z-10 animate-scaleUp">
        <div className="flex items-center justify-between pb-4 border-b border-[#e8d7ca]">
          <div className="flex items-center gap-3 flex-1">
            <Search className="w-5 h-5 text-[#826a5e]" />
            <input
              type="text"
              placeholder="Search fragrances, notes (e.g. Rose, Vanilla, Bergamot)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              className="w-full bg-transparent text-sm sm:text-base text-[#2d1217] placeholder-[#9c8579] focus:outline-none"
            />
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#7a6458] hover:text-[#3a0816] transition-colors rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Filter Tags */}
        <div className="py-3 flex items-center gap-2 flex-wrap border-b border-[#ebdcd0]">
          <span className="text-[10px] uppercase font-semibold tracking-wider text-[#826a5e] flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#3a0816]" /> Popular Notes:
          </span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="text-xs py-1 px-2.5 rounded-full bg-[#f4ebe3] text-[#4d362c] hover:bg-[#3a0816] hover:text-white transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="mt-4 max-h-96 overflow-y-auto space-y-3">
          {filteredFragrances.length === 0 ? (
            <div className="text-center py-10 text-[#7a6458] text-xs">
              No fragrances found matching "{query}". Try searching for notes like Rose, Vanilla, or Bergamot.
            </div>
          ) : (
            filteredFragrances.map((f) => (
              <div
                key={f.id}
                onClick={() => {
                  onSelectFragrance(f);
                  onClose();
                }}
                className="flex items-center gap-4 p-2.5 rounded-lg hover:bg-[#f6eee7] cursor-pointer transition-colors border border-transparent hover:border-[#ebdcd0]"
              >
                <div className="w-14 h-16 bg-[#faf6f2] rounded flex items-center justify-center p-1 shrink-0">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-sm font-semibold tracking-wide text-[#2d1217] uppercase">
                      {f.name}
                    </h4>
                    <span className="text-xs font-semibold text-[#2d1217]">
                      ${f.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-[10px] tracking-wider text-[#826a5e] uppercase">
                    {f.concentration}
                  </p>
                  <p className="text-[11px] text-[#59443b] line-clamp-1 mt-0.5 font-light">
                    {f.notes.heart.join(', ')} · {f.notes.base.join(', ')}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
