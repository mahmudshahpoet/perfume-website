import { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ShopByCollection } from './components/ShopByCollection.tsx';
import { FeaturedFragrances } from './components/FeaturedFragrances.tsx';
import { OurStory } from './components/OurStory.tsx';
import { PromoBanner } from './components/PromoBanner.tsx';
import { LovedByOurClients } from './components/LovedByOurClients.tsx';
import { NewsletterStrip } from './components/NewsletterStrip.tsx';
import { Footer } from './components/Footer.tsx';
import { CartDrawer, CartItem } from './components/CartDrawer.tsx';
import { QuickViewModal } from './components/QuickViewModal.tsx';
import { SearchModal } from './components/SearchModal.tsx';
import { Toast } from './components/Toast.tsx';
import { FRAGRANCES, Fragrance } from './data/fragrances.ts';

export default function App() {
  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      fragrance: FRAGRANCES[0], // L'AMOUR
      quantity: 1,
      size: '100ml / 3.4 fl. oz.',
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  // Wishlist State
  const [wishlist, setWishlist] = useState<string[]>(['rose-noir']);

  // Modals & Search
  const [quickViewFragrance, setQuickViewFragrance] = useState<Fragrance | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Toast notifications
  const [toast, setToast] = useState<{ message: string; type: 'cart' | 'wishlist' | 'info' } | null>(null);
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const showToast = (message: string, type: 'cart' | 'wishlist' | 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  const handleAddToCart = (fragrance: Fragrance) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.fragrance.id === fragrance.id);
      if (existing) {
        return prev.map((item) =>
          item.fragrance.id === fragrance.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          fragrance,
          quantity: 1,
          size: fragrance.size,
        },
      ];
    });

    setJustAddedId(fragrance.id);
    setTimeout(() => setJustAddedId(null), 1800);
    showToast(`${fragrance.name} added to bag`, 'cart');
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.fragrance.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.fragrance.id !== id));
  };

  const handleToggleWishlist = (id: string) => {
    setWishlist((prev) => {
      const isAlready = prev.includes(id);
      const fragrance = FRAGRANCES.find((f) => f.id === id);
      const name = fragrance ? fragrance.name : 'Fragrance';
      if (isAlready) {
        showToast(`${name} removed from wishlist`, 'wishlist');
        return prev.filter((item) => item !== id);
      } else {
        showToast(`${name} saved to wishlist`, 'wishlist');
        return [...prev, id];
      }
    });
  };

  const handleApplyPromo = (code: string): boolean => {
    if (code === 'VELOURA20') {
      setAppliedPromo('VELOURA20');
      showToast('20% Promotional Discount Applied!', 'info');
      return true;
    }
    return false;
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCollection = (collectionId: string) => {
    const el = document.getElementById('featured-fragrances');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    const matching = FRAGRANCES.find((f) => f.collection === collectionId);
    if (matching) {
      showToast(`Browsing ${matching.name} in this collection`, 'info');
    }
  };

  const handleSelectFragranceById = (id: string) => {
    const found = FRAGRANCES.find((f) => f.id === id);
    if (found) {
      setQuickViewFragrance(found);
    }
  };

  const cartTotalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#faf8f5] text-[#2b1810]">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Main Navigation Header */}
      <Navbar
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* 3. Hero Section */}
      <main className="flex-grow">
        <HeroSection
          onDiscoverClick={() => handleNavigateSection('featured-fragrances')}
          onSelectFragrance={handleSelectFragranceById}
        />

        {/* 4. Shop By Collection */}
        <ShopByCollection onSelectCollection={handleSelectCollection} />

        {/* 5. Featured Fragrances */}
        <FeaturedFragrances
          fragrances={FRAGRANCES}
          wishlist={wishlist}
          addedId={justAddedId}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onQuickView={(f) => setQuickViewFragrance(f)}
          onViewAllClick={() => handleNavigateSection('featured-fragrances')}
        />

        {/* 6. Brand Heritage / Our Story */}
        <OurStory
          onDiscoverCraftClick={() => {
            const found = FRAGRANCES.find((f) => f.id === 'rose-noir');
            if (found) setQuickViewFragrance(found);
          }}
          onExploreNotesClick={() => {
            const found = FRAGRANCES.find((f) => f.id === 'rose-noir');
            if (found) setQuickViewFragrance(found);
          }}
        />

        {/* 7. Promotional 20% Off Banner */}
        <PromoBanner
          onShopSaleClick={() => {
            setAppliedPromo('VELOURA20');
            setIsCartOpen(true);
            showToast('VELOURA20 20% discount code activated!', 'info');
          }}
        />

        {/* 8. Loved By Our Clients (Testimonials) */}
        <LovedByOurClients />

        {/* 9. Newsletter Email Signup */}
        <NewsletterStrip />
      </main>

      {/* 10. Footer */}
      <Footer onNavigateSection={handleNavigateSection} />

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => {
          showToast('Order received! Thank you for purchasing Veloura Parfums.', 'info');
          setIsCartOpen(false);
        }}
        appliedPromo={appliedPromo}
        onApplyPromo={handleApplyPromo}
      />

      {/* Quick View Fragrance Modal */}
      <QuickViewModal
        fragrance={quickViewFragrance}
        isOpen={!!quickViewFragrance}
        onClose={() => setQuickViewFragrance(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={quickViewFragrance ? wishlist.includes(quickViewFragrance.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Fragrance Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectFragrance={(f) => setQuickViewFragrance(f)}
      />

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onViewCart={() => {
            setToast(null);
            setIsCartOpen(true);
          }}
        />
      )}
    </div>
  );
}
