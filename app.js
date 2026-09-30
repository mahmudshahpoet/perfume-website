(function () {
  'use strict';

  // =========================================================================
  // 1. DATA DEFINITIONS
  // =========================================================================
  const FRAGRANCES = [
    {
      id: 'lamour',
      name: "L'AMOUR",
      concentration: 'EAU DE PARFUM',
      price: 128.0,
      description: 'An ethereal symphony of velvety Grasse roses, delicate pink peony, and whispers of white musk and sparkling pink pepper.',
      collection: 'floral',
      rating: 4.9,
      reviewsCount: 142,
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=85',
      badge: '',
      notes: {
        top: ['Pink Pepper', 'Italian Mandarin', 'Morning Dew'],
        heart: ['Rose de Mai', 'Blush Peony', 'Magnolia Blossom'],
        base: ['White Cashmere Musk', 'Cedarwood', 'Soft Amber']
      },
      size: '100ml / 3.4 fl. oz.'
    },
    {
      id: 'rose-noir',
      name: 'ROSE NOIR',
      concentration: 'EXTRAIT DE PARFUM',
      price: 158.0,
      description: 'A seductive nocturnal incantation of dark Damask roses, smoky agarwood, crushed black plums, and rich Madagascar vanilla.',
      collection: 'warm',
      rating: 5.0,
      reviewsCount: 198,
      image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=85',
      badge: 'Bestseller',
      notes: {
        top: ['Black Plum', 'Cardamom', 'Damask Saffron'],
        heart: ['Smoked Midnight Rose', 'Labdanum', 'Leather Violet'],
        base: ['Vintage Oud', 'Indonesian Patchouli', 'Bourbon Vanilla']
      },
      size: '100ml / 3.4 fl. oz.'
    },
    {
      id: 'eau-de-lumiere',
      name: 'EAU DE LUMIÈRE',
      concentration: 'EAU DE PARFUM',
      price: 128.0,
      description: 'Pure Mediterranean sunshine distilled into radiant neroli, golden solar jasmine, luminous bergamot, and sun-drenched sandalwood.',
      collection: 'fresh',
      rating: 4.8,
      reviewsCount: 116,
      image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=85',
      badge: '',
      notes: {
        top: ['Calabrian Bergamot', 'Neroli Petals', 'Crisp Pear'],
        heart: ['Solar Jasmine Sambac', 'Orange Blossom', 'Freesia'],
        base: ['Australian Sandalwood', 'Golden Amber', 'Solar Musk']
      },
      size: '100ml / 3.4 fl. oz.'
    },
    {
      id: 'jardin-secrete',
      name: 'JARDIN SECRÈTE',
      concentration: 'EAU DE PARFUM',
      price: 118.0,
      description: 'A morning stroll through a hidden private sanctuary in Provence. Verdant green fig leaf, Florentine iris, crisp cedar, and early mist.',
      collection: 'fresh',
      rating: 4.9,
      reviewsCount: 89,
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=85',
      badge: '',
      notes: {
        top: ['Green Fig Leaf', 'Dewy Ivy', 'Citron Zest'],
        heart: ['Iris Florentina', 'White Violet', 'Lily of the Valley'],
        base: ['Atlas Cedarwood', 'Oakmoss', 'Clean Vetiver']
      },
      size: '100ml / 3.4 fl. oz.'
    },
    {
      id: 'veloura-intense',
      name: 'VÉLOURA INTENSE',
      concentration: 'EXTRAIT DE PARFUM',
      price: 168.0,
      description: 'Our crowned signature extrait. Hypnotic aged cognac accord enveloped in roasted tonka beans, molten golden amber, and rare royal woods.',
      collection: 'exclusive',
      rating: 5.0,
      reviewsCount: 224,
      image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=800&q=85',
      badge: 'Limited Reserve',
      notes: {
        top: ['Cognac Accord', 'Bitter Almond', 'Spiced Nutmeg'],
        heart: ['Roasted Tonka Bean', 'Cinnamon Bark', 'Tobacco Blossom'],
        base: ['Madagascar Bourbon Vanilla', 'Siam Benzoin', 'Sandalwood']
      },
      size: '100ml / 3.4 fl. oz.'
    }
  ];

  const TESTIMONIALS = [
    {
      id: 'emily',
      quote: 'Veloura Parfums is pure luxury. The scents are sophisticated, long-lasting, and absolutely mesmerizing.',
      author: 'EMILY R.',
      role: 'Verified Buyer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&h=240&q=85',
      rating: 5
    },
    {
      id: 'sophia',
      quote: 'The attention to detail in every bottle is unmatched. It feels like wearing confidence and elegance.',
      author: 'SOPHIA M.',
      role: 'Verified Buyer',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=240&h=240&q=85',
      rating: 5
    },
    {
      id: 'lauren',
      quote: "I've found my signature scent. Veloura is now the only perfume brand I trust and adore.",
      author: 'LAUREN T.',
      role: 'Verified Buyer',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&h=240&q=85',
      rating: 5
    },
    {
      id: 'camille',
      quote: 'Rose Noir has earned me endless compliments at every evening event. True French perfumery at its finest.',
      author: 'CAMILLE D.',
      role: 'Verified Buyer',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=240&h=240&q=85',
      rating: 5
    }
  ];

  // =========================================================================
  // 2. STATE MANAGEMENT
  // =========================================================================
  let cart = [
    {
      fragrance: FRAGRANCES[0], // L'AMOUR
      quantity: 1,
      size: '100ml / 3.4 fl. oz.'
    }
  ];
  let appliedPromo = null;
  const wishlist = new Set(['rose-noir']);
  let activeQuickViewFragrance = null;
  let testimonialIndex = 0;

  // =========================================================================
  // 3. TOAST NOTIFICATIONS
  // =========================================================================
  const toastEl = document.getElementById('toast');
  const toastMsgEl = document.getElementById('toast-msg');
  const toastActionEl = document.getElementById('toast-action');
  let toastTimer = null;

  function showToast(message, hasViewBag = false) {
    if (!toastEl) return;
    clearTimeout(toastTimer);

    toastMsgEl.textContent = message;
    if (hasViewBag) {
      toastActionEl.classList.remove('hidden');
    } else {
      toastActionEl.classList.add('hidden');
    }

    toastEl.classList.remove('hidden');

    toastTimer = setTimeout(() => {
      toastEl.classList.add('hidden');
    }, 3200);
  }

  toastActionEl?.addEventListener('click', () => {
    toastEl.classList.add('hidden');
    openCart();
  });

  // =========================================================================
  // 4. SCROLL-BASED 900-FRAME SEQUENCE
  // =========================================================================
  const TOTAL_FRAMES = 900;
  const INITIAL_BUFFER_COUNT = 30;
  const MAX_CACHE_SIZE = 150;
  const MAX_CONCURRENT_LOADS = 6;
  const LERP_FACTOR = 0.18;

  const canvas = document.getElementById('animation-canvas');
  const ctx = canvas ? canvas.getContext('2d', { alpha: false }) : null;
  const loader = document.getElementById('loader');
  const loaderBar = document.getElementById('loader-bar-fill');
  const sequenceElement = document.getElementById('scroll-sequence');

  const cache = new Map();
  const loading = new Set();

  let smoothedFrame = 1;
  let targetFrame = 1;
  let currentRenderedFrame = -1;
  let needsRedraw = true;
  let lastDirection = 1;

  function getFrameUrl(index) {
    const padded = String(index).padStart(6, '0');
    return `frame_${padded}.jpg`;
  }

  function loadFrame(index) {
    if (index < 1 || index > TOTAL_FRAMES) return Promise.resolve(null);
    if (cache.has(index)) return Promise.resolve(cache.get(index));
    if (loading.has(index)) return Promise.resolve(null);

    loading.add(index);

    return new Promise((resolve) => {
      const img = new Image();
      img.decoding = 'async';

      img.onload = () => {
        loading.delete(index);
        cache.set(index, img);
        evictDistantFrames();

        const currentTarget = Math.round(smoothedFrame);
        if (Math.abs(currentTarget - index) <= 2) {
          needsRedraw = true;
        }
        resolve(img);
      };

      img.onerror = () => {
        loading.delete(index);
        resolve(null);
      };

      img.src = getFrameUrl(index);
    });
  }

  function evictDistantFrames() {
    if (cache.size <= MAX_CACHE_SIZE) return;

    const center = Math.round(smoothedFrame);
    const sorted = Array.from(cache.keys()).sort((a, b) => {
      return Math.abs(b - center) - Math.abs(a - center);
    });

    const toRemove = sorted.slice(0, cache.size - MAX_CACHE_SIZE);
    for (const idx of toRemove) {
      const img = cache.get(idx);
      if (img) {
        img.onload = null;
        img.onerror = null;
        img.src = '';
      }
      cache.delete(idx);
    }
  }

  function getBestAvailableFrame(index) {
    if (cache.has(index)) return cache.get(index);

    let closestIdx = -1;
    let minDiff = Infinity;

    for (const key of cache.keys()) {
      const diff = Math.abs(key - index);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = key;
      }
    }

    if (closestIdx !== -1) {
      return cache.get(closestIdx);
    }

    return null;
  }

  function requestPriorityPreloads(currentIndex, delta) {
    if (loading.size >= MAX_CONCURRENT_LOADS) return;

    const dir = delta > 0.05 ? 1 : delta < -0.05 ? -1 : lastDirection;
    lastDirection = dir;

    const immediateTarget = Math.round(targetFrame);
    if (!cache.has(immediateTarget) && !loading.has(immediateTarget)) {
      loadFrame(immediateTarget);
      if (loading.size >= MAX_CONCURRENT_LOADS) return;
    }

    for (let i = 1; i <= 30; i++) {
      const fwd = currentIndex + i * dir;
      if (fwd >= 1 && fwd <= TOTAL_FRAMES && !cache.has(fwd) && !loading.has(fwd)) {
        loadFrame(fwd);
        if (loading.size >= MAX_CONCURRENT_LOADS) return;
      }
    }

    for (let i = 1; i <= 10; i++) {
      const bwd = currentIndex - i * dir;
      if (bwd >= 1 && bwd <= TOTAL_FRAMES && !cache.has(bwd) && !loading.has(bwd)) {
        loadFrame(bwd);
        if (loading.size >= MAX_CONCURRENT_LOADS) return;
      }
    }
  }

  function resizeCanvas() {
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.round(window.innerWidth * dpr);
    const h = Math.round(window.innerHeight * dpr);

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      needsRedraw = true;
    }
  }

  function drawFrame(index) {
    if (!ctx || !canvas) return;
    const img = getBestAvailableFrame(index);
    if (!img || !img.complete || img.naturalWidth === 0) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) * 0.5;
    const dy = (ch - dh) * 0.5;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  function onScrollSequence() {
    if (!sequenceElement) return;

    const totalTravel = sequenceElement.offsetHeight - window.innerHeight;
    if (totalTravel <= 0) {
      targetFrame = 1;
      return;
    }

    const rect = sequenceElement.getBoundingClientRect();
    const scrolled = -rect.top;
    const progress = Math.min(Math.max(scrolled / totalTravel, 0), 1);
    targetFrame = 1 + progress * (TOTAL_FRAMES - 1);
  }

  function renderLoop() {
    const delta = targetFrame - smoothedFrame;

    if (Math.abs(delta) > 0.0005) {
      smoothedFrame += delta * LERP_FACTOR;
    } else {
      smoothedFrame = targetFrame;
    }

    const frameToRender = Math.min(Math.max(Math.round(smoothedFrame), 1), TOTAL_FRAMES);

    if (frameToRender !== currentRenderedFrame || needsRedraw) {
      drawFrame(frameToRender);
      currentRenderedFrame = frameToRender;
      needsRedraw = false;
    }

    requestPriorityPreloads(frameToRender, delta);

    requestAnimationFrame(renderLoop);
  }

  // =========================================================================
  // 5. RENDER FEATURED FRAGRANCES
  // =========================================================================
  const fragrancesGrid = document.getElementById('fragrances-grid');

  function renderFeaturedFragrances() {
    if (!fragrancesGrid) return;

    fragrancesGrid.innerHTML = FRAGRANCES.map((f) => {
      const isWish = wishlist.has(f.id);

      return `
        <article class="product-card" data-id="${f.id}">
          <button class="wishlist-btn ${isWish ? 'active' : ''}" data-wishlist-id="${f.id}" aria-label="Save to wishlist">
            <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </button>

          <div class="card-flacon-wrap" data-qv-id="${f.id}">
            <img src="${f.image}" alt="${f.name}" class="flacon-thumb" loading="lazy">
            <div class="quick-view-overlay">
              <span class="quick-view-badge">
                <svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                QUICK VIEW
              </span>
            </div>
          </div>

          <div class="card-info">
            <h3 class="product-title" data-qv-id="${f.id}">${f.name}</h3>
            <p class="product-conc">${f.concentration}</p>
            <p class="product-price">$${f.price.toFixed(2)}</p>
          </div>

          <button class="btn-add-card" data-add-id="${f.id}">
            ADD TO CART
          </button>
        </article>
      `;
    }).join('');

    // Attach listeners
    fragrancesGrid.querySelectorAll('[data-wishlist-id]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.wishlistId;
        toggleWishlist(id);
      });
    });

    fragrancesGrid.querySelectorAll('[data-qv-id]').forEach((el) => {
      el.addEventListener('click', () => {
        const id = el.dataset.qvId;
        openQuickView(id);
      });
    });

    fragrancesGrid.querySelectorAll('[data-add-id]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.addId;
        addToCart(id, btn);
      });
    });
  }

  // =========================================================================
  // 6. CART DRAWER OPERATIONS
  // =========================================================================
  const cartDrawer = document.getElementById('cart-drawer');
  const cartBadge = document.getElementById('cart-badge');
  const cartCountTitle = document.getElementById('cart-count-title');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const shippingText = document.getElementById('shipping-progress-text');
  const shippingFill = document.getElementById('shipping-fill');
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const cartDiscountEl = document.getElementById('cart-discount');
  const discountRow = document.getElementById('discount-row');
  const cartShippingEl = document.getElementById('cart-shipping');
  const cartTotalEl = document.getElementById('cart-total');
  const promoInput = document.getElementById('promo-input');
  const promoMessage = document.getElementById('promo-message');

  function openCart() {
    if (!cartDrawer) return;
    renderCart();
    cartDrawer.classList.add('active');
    cartDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    if (!cartDrawer) return;
    cartDrawer.classList.remove('active');
    cartDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateCartBadge() {
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    if (cartBadge) cartBadge.textContent = totalCount;
    if (cartCountTitle) cartCountTitle.textContent = totalCount;
  }

  function renderCart() {
    updateCartBadge();
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div style="text-align: center; padding: 60px 20px;">
          <svg style="width: 48px; height: 48px; color: #d4b9a9; margin: 0 auto 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <h3 style="font-family: var(--font-serif); font-size: 18px; color: #3d1e16; margin-bottom: 8px;">Your bag is currently empty</h3>
          <p style="font-size: 12px; color: #7d655a; margin-bottom: 24px;">Explore our handcrafted French fragrances and elevate your daily ritual.</p>
          <button id="btn-empty-cart-explore" class="btn-primary-dark" style="padding: 12px 28px; font-size: 10px;">EXPLORE FRAGRANCES</button>
        </div>
      `;

      document.getElementById('btn-empty-cart-explore')?.addEventListener('click', () => {
        closeCart();
        scrollToSection('featured-fragrances');
      });

      // Reset prices
      if (cartSubtotalEl) cartSubtotalEl.textContent = '$0.00';
      if (cartTotalEl) cartTotalEl.textContent = '$0.00';
      if (shippingText) {
        shippingText.textContent = 'Add $75.00 more to qualify for Free Shipping';
        shippingText.classList.remove('unlocked');
      }
      if (shippingFill) shippingFill.style.width = '0%';
      return;
    }

    // Render items
    cartItemsContainer.innerHTML = cart.map((item) => `
      <div class="cart-item">
        <div class="cart-item-thumb">
          <img src="${item.fragrance.image}" alt="${item.fragrance.name}">
        </div>
        <div class="cart-item-info">
          <div>
            <div class="cart-item-head">
              <h4 class="cart-item-name">${item.fragrance.name}</h4>
              <button class="btn-icon" data-remove-id="${item.fragrance.id}" style="color: #aa9185; padding: 2px;" aria-label="Remove item">
                <svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
              </button>
            </div>
            <p class="cart-item-spec">${item.fragrance.concentration} · ${item.size}</p>
          </div>

          <div class="cart-item-controls">
            <div class="qty-control">
              <button class="btn-qty" data-qty-id="${item.fragrance.id}" data-delta="-1">−</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="btn-qty" data-qty-id="${item.fragrance.id}" data-delta="1">+</button>
            </div>
            <span class="cart-item-price">$${(item.fragrance.price * item.quantity).toFixed(2)}</span>
          </div>
        </div>
      </div>
    `).join('') + `
      <!-- Complimentary 2ml sample picker -->
      <div class="sample-picker-box">
        <div class="sample-head">
          <svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"/><rect width="20" height="5" x="2" y="7"/><line x1="12" x2="12" y1="22" y2="7"/></svg>
          <span>Select Complimentary Sample</span>
        </div>
        <select class="sample-select">
          <option>Rose Noir Extrait (2ml)</option>
          <option>L'Amour Eau de Parfum (2ml)</option>
          <option>Eau de Lumière (2ml)</option>
          <option>Jardin Secrète (2ml)</option>
          <option>Véloura Intense (2ml)</option>
        </select>
      </div>
    `;

    // Attach listeners
    cartItemsContainer.querySelectorAll('[data-remove-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.removeId;
        removeFromCart(id);
      });
    });

    cartItemsContainer.querySelectorAll('[data-qty-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.qtyId;
        const delta = parseInt(btn.dataset.delta, 10);
        updateQuantity(id, delta);
      });
    });

    // Calculate totals
    const subtotal = cart.reduce((sum, i) => sum + i.fragrance.price * i.quantity, 0);
    const discountRate = appliedPromo === 'VELOURA20' ? 0.2 : 0;
    const discountAmount = subtotal * discountRate;
    const isFreeShipping = subtotal >= 75 || cart.length === 0;
    const shippingCost = isFreeShipping ? 0 : 12.0;
    const total = Math.max(0, subtotal - discountAmount + shippingCost);

    if (cartSubtotalEl) cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;

    if (discountRow && cartDiscountEl) {
      if (appliedPromo) {
        discountRow.classList.remove('hidden');
        cartDiscountEl.textContent = `-$${discountAmount.toFixed(2)}`;
      } else {
        discountRow.classList.add('hidden');
      }
    }

    if (cartShippingEl) cartShippingEl.textContent = isFreeShipping ? 'FREE' : `$${shippingCost.toFixed(2)}`;
    if (cartTotalEl) cartTotalEl.textContent = `$${total.toFixed(2)}`;

    // Shipping progress
    const remaining = Math.max(0, 75 - subtotal);
    const pct = Math.min(100, (subtotal / 75) * 100);

    if (shippingFill) shippingFill.style.width = `${pct}%`;

    if (shippingText) {
      if (isFreeShipping) {
        shippingText.textContent = "✦ You've unlocked Complimentary Express Shipping!";
        shippingText.classList.add('unlocked');
      } else {
        shippingText.textContent = `Add $${remaining.toFixed(2)} more to qualify for Free Shipping`;
        shippingText.classList.remove('unlocked');
      }
    }
  }

  function addToCart(fragranceId, triggerBtn = null) {
    const found = FRAGRANCES.find((f) => f.id === fragranceId);
    if (!found) return;

    const existing = cart.find((item) => item.fragrance.id === fragranceId);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        fragrance: found,
        quantity: 1,
        size: found.size
      });
    }

    renderCart();

    if (triggerBtn) {
      const origText = triggerBtn.textContent;
      triggerBtn.classList.add('added');
      triggerBtn.innerHTML = `
        <svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        ADDED
      `;
      setTimeout(() => {
        triggerBtn.classList.remove('added');
        triggerBtn.textContent = origText;
      }, 1800);
    }

    showToast(`${found.name} added to bag`, true);
  }

  function updateQuantity(fragranceId, delta) {
    cart = cart.map((item) => {
      if (item.fragrance.id === fragranceId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean);

    renderCart();
  }

  function removeFromCart(fragranceId) {
    cart = cart.filter((item) => item.fragrance.id !== fragranceId);
    renderCart();
  }

  // Promo Code Form
  document.getElementById('promo-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!promoInput) return;
    const code = promoInput.value.trim().toUpperCase();

    if (code === 'VELOURA20') {
      appliedPromo = 'VELOURA20';
      promoMessage.classList.remove('hidden');
      promoMessage.className = 'promo-message text-green';
      promoMessage.textContent = '20% Promotional Discount Applied!';
      renderCart();
      showToast('20% Promotional Discount Applied!', false);
    } else {
      promoMessage.classList.remove('hidden');
      promoMessage.className = 'promo-message text-red';
      promoMessage.textContent = 'Invalid promo code. Try "VELOURA20"';
    }
  });

  document.getElementById('cart-btn')?.addEventListener('click', openCart);
  document.getElementById('cart-close-btn')?.addEventListener('click', closeCart);
  cartDrawer?.addEventListener('click', (e) => {
    if (e.target === cartDrawer) closeCart();
  });

  document.getElementById('btn-checkout')?.addEventListener('click', () => {
    showToast('Order received! Thank you for purchasing Veloura Parfums.', false);
    closeCart();
  });

  // =========================================================================
  // 7. WISHLIST OPERATIONS
  // =========================================================================
  function toggleWishlist(fragranceId) {
    const found = FRAGRANCES.find((f) => f.id === fragranceId);
    const name = found ? found.name : 'Fragrance';

    if (wishlist.has(fragranceId)) {
      wishlist.delete(fragranceId);
      showToast(`${name} removed from wishlist`, false);
    } else {
      wishlist.add(fragranceId);
      showToast(`${name} saved to wishlist`, false);
    }

    renderFeaturedFragrances();
    updateQuickViewWishlistState();
  }

  // =========================================================================
  // 8. QUICK VIEW OLFACTORY MODAL
  // =========================================================================
  const qvModal = document.getElementById('quick-view-modal');
  const qvCloseBtn = document.getElementById('quick-view-close-btn');
  const qvImage = document.getElementById('qv-image');
  const qvBadge = document.getElementById('qv-badge');
  const qvConcentration = document.getElementById('qv-concentration');
  const qvRatingVal = document.getElementById('qv-rating-val');
  const qvReviews = document.getElementById('qv-reviews');
  const qvName = document.getElementById('qv-name');
  const qvPrice = document.getElementById('qv-price');
  const qvDesc = document.getElementById('qv-desc');
  const qvTopNotes = document.getElementById('qv-top-notes');
  const qvHeartNotes = document.getElementById('qv-heart-notes');
  const qvBaseNotes = document.getElementById('qv-base-notes');
  const qvAddCartBtn = document.getElementById('qv-add-cart-btn');
  const qvWishlistBtn = document.getElementById('qv-wishlist-btn');

  function openQuickView(fragranceId) {
    const f = FRAGRANCES.find((item) => item.id === fragranceId);
    if (!f || !qvModal) return;

    activeQuickViewFragrance = f;

    qvImage.src = f.image;
    qvImage.alt = f.name;

    if (f.badge) {
      qvBadge.textContent = f.badge;
      qvBadge.classList.remove('hidden');
    } else {
      qvBadge.classList.add('hidden');
    }

    qvConcentration.textContent = f.concentration;
    qvRatingVal.textContent = f.rating;
    qvReviews.textContent = `(${f.reviewsCount})`;
    qvName.textContent = f.name;
    qvPrice.textContent = `$${f.price.toFixed(2)}`;
    qvDesc.textContent = f.description;
    qvTopNotes.textContent = f.notes.top.join(' · ');
    qvHeartNotes.textContent = f.notes.heart.join(' · ');
    qvBaseNotes.textContent = f.notes.base.join(' · ');

    updateQuickViewWishlistState();

    qvModal.classList.add('active');
    qvModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function updateQuickViewWishlistState() {
    if (!qvWishlistBtn || !activeQuickViewFragrance) return;
    if (wishlist.has(activeQuickViewFragrance.id)) {
      qvWishlistBtn.classList.add('active');
    } else {
      qvWishlistBtn.classList.remove('active');
    }
  }

  function closeQuickView() {
    if (!qvModal) return;
    qvModal.classList.remove('active');
    qvModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  qvCloseBtn?.addEventListener('click', closeQuickView);
  qvModal?.addEventListener('click', (e) => {
    if (e.target === qvModal) closeQuickView();
  });

  qvAddCartBtn?.addEventListener('click', () => {
    if (activeQuickViewFragrance) {
      addToCart(activeQuickViewFragrance.id);
      closeQuickView();
    }
  });

  qvWishlistBtn?.addEventListener('click', () => {
    if (activeQuickViewFragrance) {
      toggleWishlist(activeQuickViewFragrance.id);
    }
  });

  // Size buttons in Quick View
  document.querySelectorAll('.btn-size').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.btn-size').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // =========================================================================
  // 9. SEARCH MODAL OPERATIONS
  // =========================================================================
  const searchModal = document.getElementById('search-modal');
  const searchBtn = document.getElementById('search-btn');
  const searchCloseBtn = document.getElementById('search-close-btn');
  const searchInput = document.getElementById('search-input');
  const searchResultsList = document.getElementById('search-results-list');

  function openSearch() {
    if (!searchModal) return;
    searchModal.classList.add('active');
    searchModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      searchInput?.focus();
    }, 100);
    renderSearchResults('');
  }

  function closeSearch() {
    if (!searchModal) return;
    searchModal.classList.remove('active');
    searchModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (searchInput) searchInput.value = '';
  }

  function renderSearchResults(query) {
    if (!searchResultsList) return;
    const q = query.trim().toLowerCase();

    const matches = FRAGRANCES.filter((f) => {
      if (!q) return true;
      return (
        f.name.toLowerCase().includes(q) ||
        f.concentration.toLowerCase().includes(q) ||
        f.description.toLowerCase().includes(q) ||
        f.notes.top.some((n) => n.toLowerCase().includes(q)) ||
        f.notes.heart.some((n) => n.toLowerCase().includes(q)) ||
        f.notes.base.some((n) => n.toLowerCase().includes(q))
      );
    });

    if (matches.length === 0) {
      searchResultsList.innerHTML = `
        <div style="text-align: center; padding: 30px; font-size: 13px; color: #826a5e;">
          No fragrances found matching "${query}". Try searching for notes like Rose, Vanilla, or Bergamot.
        </div>
      `;
      return;
    }

    searchResultsList.innerHTML = matches.map((f) => `
      <div class="search-result-item" data-search-id="${f.id}">
        <div class="result-thumb">
          <img src="${f.image}" alt="${f.name}">
        </div>
        <div>
          <div class="result-name">${f.name}</div>
          <div class="result-notes">${f.notes.heart.join(', ')} · ${f.notes.base.join(', ')}</div>
        </div>
        <div class="result-price">$${f.price.toFixed(2)}</div>
      </div>
    `).join('');

    searchResultsList.querySelectorAll('[data-search-id]').forEach((item) => {
      item.addEventListener('click', () => {
        const id = item.dataset.searchId;
        closeSearch();
        openQuickView(id);
      });
    });
  }

  searchBtn?.addEventListener('click', openSearch);
  searchCloseBtn?.addEventListener('click', closeSearch);
  searchModal?.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearch();
  });

  searchInput?.addEventListener('input', (e) => {
    renderSearchResults(e.target.value);
  });

  document.querySelectorAll('.tag-pill').forEach((tag) => {
    tag.addEventListener('click', () => {
      const q = tag.dataset.query;
      if (searchInput) {
        searchInput.value = q;
        renderSearchResults(q);
      }
    });
  });

  // =========================================================================
  // 10. TESTIMONIALS CAROUSEL
  // =========================================================================
  const testimonialsGrid = document.getElementById('testimonials-grid');

  function renderTestimonials() {
    if (!testimonialsGrid) return;

    const visible = [
      TESTIMONIALS[testimonialIndex % TESTIMONIALS.length],
      TESTIMONIALS[(testimonialIndex + 1) % TESTIMONIALS.length],
      TESTIMONIALS[(testimonialIndex + 2) % TESTIMONIALS.length]
    ];

    testimonialsGrid.innerHTML = visible.map((t) => `
      <div class="testimonial-card">
        <div>
          <div class="quote-top">
            <span class="quote-mark">“</span>
            <div class="star-gold">★★★★★</div>
          </div>
          <p class="review-text">"${t.quote}"</p>
        </div>
        <div class="author-row">
          <img src="${t.avatar}" alt="${t.author}" class="author-avatar">
          <div>
            <h4 class="author-name">${t.author}</h4>
            <p class="author-role">${t.role}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  document.getElementById('carousel-next')?.addEventListener('click', () => {
    testimonialIndex = (testimonialIndex + 1) % TESTIMONIALS.length;
    renderTestimonials();
  });

  document.getElementById('carousel-prev')?.addEventListener('click', () => {
    testimonialIndex = (testimonialIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    renderTestimonials();
  });

  // =========================================================================
  // 11. NAVIGATION & GENERAL INTERACTIONS
  // =========================================================================
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  document.querySelectorAll('[data-navigate]').forEach((el) => {
    el.addEventListener('click', () => {
      const targetId = el.dataset.navigate;
      scrollToSection(targetId);
      // Close mobile menu if open
      document.getElementById('mobile-menu')?.classList.remove('open');
      document.getElementById('hamburger-icon')?.classList.remove('hidden');
      document.getElementById('close-menu-icon')?.classList.add('hidden');
    });
  });

  // Hero interactive 3 flacons
  document.querySelectorAll('.stage-bottle').forEach((bottle) => {
    bottle.addEventListener('click', () => {
      const id = bottle.dataset.id;
      if (id) openQuickView(id);
    });
  });

  // Flatlay formula explore
  document.getElementById('flatlay-card')?.addEventListener('click', () => {
    openQuickView('rose-noir');
  });

  document.getElementById('btn-discover-craft')?.addEventListener('click', () => {
    openQuickView('rose-noir');
  });

  // Shop Sale CTA
  document.getElementById('btn-shop-sale')?.addEventListener('click', () => {
    appliedPromo = 'VELOURA20';
    openCart();
    showToast('VELOURA20 20% discount code activated!', false);
  });

  // Shop Dropdown Hover/Click
  const shopDropdownWrapper = document.getElementById('shop-dropdown-wrapper');
  const shopDropdownBtn = document.getElementById('shop-dropdown-btn');

  shopDropdownBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    shopDropdownWrapper?.classList.toggle('active');
  });

  shopDropdownWrapper?.addEventListener('mouseenter', () => {
    shopDropdownWrapper.classList.add('active');
  });

  shopDropdownWrapper?.addEventListener('mouseleave', () => {
    shopDropdownWrapper.classList.remove('active');
  });

  // Mobile Menu Toggle
  const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeMenuIcon = document.getElementById('close-menu-icon');

  mobileToggleBtn?.addEventListener('click', () => {
    const isOpen = mobileMenu?.classList.toggle('open');
    if (isOpen) {
      hamburgerIcon?.classList.add('hidden');
      closeMenuIcon?.classList.remove('hidden');
    } else {
      hamburgerIcon?.classList.remove('hidden');
      closeMenuIcon?.classList.add('hidden');
    }
  });

  // Logo scroll to top
  document.getElementById('logo-btn')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.getElementById('footer-logo')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Newsletter Form
  document.getElementById('newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email')?.value;
    if (email && email.includes('@')) {
      document.getElementById('newsletter-form')?.classList.add('hidden');
      document.getElementById('newsletter-success')?.classList.remove('hidden');
      showToast('Welcome to the Inner Circle!', false);
    }
  });

  // Global Escape Key Listener
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeQuickView();
      closeSearch();
    }
  });

  // =========================================================================
  // 12. INITIALIZATION
  // =========================================================================
  async function init() {
    renderFeaturedFragrances();
    renderTestimonials();
    updateCartBadge();

    // Sequence Canvas Setup
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('scroll', onScrollSequence, { passive: true });

    onScrollSequence();

    // Load Frame 1 immediately
    const firstImg = await loadFrame(1);
    if (firstImg) {
      drawFrame(1);
      currentRenderedFrame = 1;
    }

    // Load initial buffer for silky start
    let loadedCount = 1;
    const bufferPromises = [];

    for (let i = 2; i <= INITIAL_BUFFER_COUNT; i++) {
      bufferPromises.push(
        loadFrame(i).then(() => {
          loadedCount++;
          if (loaderBar) {
            const pct = Math.min(100, Math.round((loadedCount / INITIAL_BUFFER_COUNT) * 100));
            loaderBar.style.width = `${pct}%`;
          }
        })
      );
    }

    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 800));
    await Promise.race([Promise.all(bufferPromises), timeoutPromise]);

    if (loaderBar) loaderBar.style.width = '100%';
    setTimeout(() => {
      loader?.classList.add('loaded');
    }, 150);

    requestAnimationFrame(renderLoop);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
