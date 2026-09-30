import React, { useState } from 'react';
import { Search, ShoppingBag, User, ChevronDown, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onNavigateSection,
}) => {
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#fbf9f6]/95 backdrop-blur-md border-b border-[#ece4d9] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#3d1620] hover:text-[#781830] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Left Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-8 text-[11px] font-medium tracking-[0.2em] text-[#331c18] uppercase">
            <div
              className="relative"
              onMouseEnter={() => setIsShopDropdownOpen(true)}
              onMouseLeave={() => setIsShopDropdownOpen(false)}
            >
              <button
                onClick={() => onNavigateSection('featured-fragrances')}
                className="flex items-center gap-1 hover:text-[#521323] transition-colors py-2 cursor-pointer"
              >
                <span>SHOP</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isShopDropdownOpen ? 'rotate-180 text-[#521323]' : ''}`} />
              </button>

              {/* Shop Dropdown Menu */}
              {isShopDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-[#faf7f3] border border-[#e8dfd3] shadow-xl py-4 px-5 transition-all animate-fadeIn">
                  <div className="text-[10px] tracking-[0.25em] text-[#a46450] font-semibold uppercase mb-2 border-b border-[#eedfd5] pb-1.5">
                    Fragrance Categories
                  </div>
                  <ul className="space-y-2.5 text-xs text-[#4a2e26] font-normal normal-case">
                    <li>
                      <button
                        onClick={() => {
                          onNavigateSection('shop-by-collection');
                          setIsShopDropdownOpen(false);
                        }}
                        className="hover:text-[#521323] hover:translate-x-1 transition-all block w-full text-left"
                      >
                        Floral Bouquets
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          onNavigateSection('shop-by-collection');
                          setIsShopDropdownOpen(false);
                        }}
                        className="hover:text-[#521323] hover:translate-x-1 transition-all block w-full text-left"
                      >
                        Warm & Sensual
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          onNavigateSection('shop-by-collection');
                          setIsShopDropdownOpen(false);
                        }}
                        className="hover:text-[#521323] hover:translate-x-1 transition-all block w-full text-left"
                      >
                        Fresh & Radiant
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          onNavigateSection('shop-by-collection');
                          setIsShopDropdownOpen(false);
                        }}
                        className="hover:text-[#521323] hover:translate-x-1 transition-all block w-full text-left"
                      >
                        Exclusive Collection
                      </button>
                    </li>
                    <li className="pt-2 border-t border-[#eedfd5]">
                      <button
                        onClick={() => {
                          onNavigateSection('featured-fragrances');
                          setIsShopDropdownOpen(false);
                        }}
                        className="text-[#521323] font-medium hover:underline block w-full text-left"
                      >
                        View All Fragrances →
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigateSection('shop-by-collection')}
              className="hover:text-[#521323] transition-colors py-2 cursor-pointer"
            >
              COLLECTIONS
            </button>

            <button
              onClick={() => onNavigateSection('featured-fragrances')}
              className="hover:text-[#521323] transition-colors py-2 cursor-pointer"
            >
              BESTSELLERS
            </button>
          </nav>

          {/* Center Brand Logo */}
          <div className="text-center cursor-pointer select-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="font-serif text-3xl sm:text-[34px] tracking-[0.06em] font-normal text-[#2e0915] leading-none">
              SHAHNAMA
            </div>
            <div className="text-[9px] tracking-[0.45em] text-[#694e45] uppercase font-medium mt-1">
              PARFUMS
            </div>
          </div>

          {/* Right Navigation Links & Action Icons */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            <nav className="hidden lg:flex items-center space-x-7 text-[11px] font-medium tracking-[0.2em] text-[#331c18] uppercase">
              <button
                onClick={() => onNavigateSection('our-story')}
                className="hover:text-[#521323] transition-colors py-2 cursor-pointer"
              >
                ABOUT
              </button>
              <button
                onClick={() => onNavigateSection('our-story')}
                className="hover:text-[#521323] transition-colors py-2 cursor-pointer"
              >
                JOURNAL
              </button>
              <button
                onClick={() => onNavigateSection('footer')}
                className="hover:text-[#521323] transition-colors py-2 cursor-pointer"
              >
                CONTACT
              </button>
            </nav>

            {/* Icon Actions */}
            <div className="flex items-center space-x-3.5 sm:space-x-5 text-[#331c18]">
              <button
                className="p-1.5 hover:text-[#521323] transition-colors cursor-pointer"
                title="Account"
                aria-label="User Account"
              >
                <User className="w-[18px] h-[18px] stroke-[1.5]" />
              </button>

              <button
                onClick={onOpenSearch}
                className="p-1.5 hover:text-[#521323] transition-colors cursor-pointer"
                title="Search Fragrances"
                aria-label="Search"
              >
                <Search className="w-[18px] h-[18px] stroke-[1.5]" />
              </button>

              <button
                onClick={onOpenCart}
                className="p-1.5 hover:text-[#521323] transition-colors relative cursor-pointer"
                title="Shopping Bag"
                aria-label="Cart"
              >
                <ShoppingBag className="w-[18px] h-[18px] stroke-[1.5]" />
                <span className="absolute -top-1 -right-1 bg-[#3d0817] text-[#fbf6f2] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium leading-none">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#eedfd5] py-4 px-2 space-y-3 bg-[#faf7f3]">
            <button
              onClick={() => {
                onNavigateSection('featured-fragrances');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 text-xs tracking-wider uppercase font-medium text-[#2d1b15] hover:bg-[#f0e4d7]"
            >
              Shop Fragrances
            </button>
            <button
              onClick={() => {
                onNavigateSection('shop-by-collection');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 text-xs tracking-wider uppercase font-medium text-[#2d1b15] hover:bg-[#f0e4d7]"
            >
              Collections
            </button>
            <button
              onClick={() => {
                onNavigateSection('featured-fragrances');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 text-xs tracking-wider uppercase font-medium text-[#2d1b15] hover:bg-[#f0e4d7]"
            >
              Bestsellers
            </button>
            <button
              onClick={() => {
                onNavigateSection('our-story');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 text-xs tracking-wider uppercase font-medium text-[#2d1b15] hover:bg-[#f0e4d7]"
            >
              About & Heritage
            </button>
            <button
              onClick={() => {
                onNavigateSection('footer');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 text-xs tracking-wider uppercase font-medium text-[#2d1b15] hover:bg-[#f0e4d7]"
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
