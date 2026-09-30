export interface Fragrance {
  id: string;
  name: string;
  concentration: string;
  price: number;
  originalPrice?: number;
  description: string;
  collection: 'floral' | 'warm' | 'fresh' | 'exclusive';
  rating: number;
  reviewsCount: number;
  image: string;
  bottleColor: string;
  badge?: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  size: string;
  inStock: boolean;
}

export const FRAGRANCES: Fragrance[] = [
  {
    id: 'lamour',
    name: "L'AMOUR",
    concentration: 'EAU DE PARFUM',
    price: 128.0,
    description: 'An ethereal symphony of velvety Grasse roses, delicate pink peony, and whispered whispers of white musk and sparkling pink pepper.',
    collection: 'floral',
    rating: 4.9,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=85',
    bottleColor: '#f7d6d0',
    notes: {
      top: ['Pink Pepper', 'Italian Mandarin', 'Morning Dew'],
      heart: ['Rose de Mai', 'Blush Peony', 'Magnolia Blossom'],
      base: ['White Cashmere Musk', 'Cedarwood', 'Soft Amber']
    },
    size: '100ml / 3.4 fl. oz.',
    inStock: true
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
    bottleColor: '#360913',
    badge: 'Bestseller',
    notes: {
      top: ['Black Plum', 'Cardamom', 'Damask Saffron'],
      heart: ['Smoked Midnight Rose', 'Labdanum', 'Leather Violet'],
      base: ['Vintage Oud', 'Indonesian Patchouli', 'Bourbon Vanilla']
    },
    size: '100ml / 3.4 fl. oz.',
    inStock: true
  },
  {
    id: 'eau-de-lumiere',
    name: 'EAU DE LUMIÈRE',
    concentration: 'EAU DE PARFUM',
    price: 128.0,
    description: 'Pure Mediterranean sunshine distilled into radiant neroli, golden solar jasmine, luminous bergamot, and warm sun-drenched sandalwood.',
    collection: 'fresh',
    rating: 4.8,
    reviewsCount: 116,
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=85',
    bottleColor: '#f3c98b',
    notes: {
      top: ['Calabrian Bergamot', 'Neroli Petals', 'Crisp Pear'],
      heart: ['Solar Jasmine Sambac', 'Orange Blossom', 'Freesia'],
      base: ['Australian Sandalwood', 'Golden Amber', 'Solar Musk']
    },
    size: '100ml / 3.4 fl. oz.',
    inStock: true
  },
  {
    id: 'jardin-secrete',
    name: 'JARDIN SECRÈTE',
    concentration: 'EAU DE PARFUM',
    price: 118.0,
    description: 'A morning stroll through a hidden private sanctuary in Provence. Verdant green fig leaf, Florentine iris, crisp cedar, and early morning mist.',
    collection: 'fresh',
    rating: 4.9,
    reviewsCount: 89,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=85',
    bottleColor: '#e0ece4',
    notes: {
      top: ['Green Fig Leaf', 'Dewy Ivy', 'Citron Zest'],
      heart: ['Iris Florentina', 'White Violet', 'Lily of the Valley'],
      base: ['Atlas Cedarwood', 'Oakmoss', 'Clean Vetiver']
    },
    size: '100ml / 3.4 fl. oz.',
    inStock: true
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
    bottleColor: '#b4602c',
    badge: 'Limited Reserve',
    notes: {
      top: ['Cognac Accord', 'Bitter Almond', 'Spiced Nutmeg'],
      heart: ['Roasted Tonka Bean', 'Cinnamon Bark', 'Tobacco Blossom'],
      base: ['Madagascar Bourbon Vanilla', 'Siam Benzoin', 'Sandalwood']
    },
    size: '100ml / 3.4 fl. oz.',
    inStock: true
  }
];

export interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  themeColor: string;
  bgGradient: string;
}

export const COLLECTIONS: CollectionItem[] = [
  {
    id: 'floral',
    title: 'FLORAL BOUQUETS',
    subtitle: 'Soft. Romantic. Timeless.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=85',
    themeColor: '#3d1620',
    bgGradient: 'from-[#3a101b]/90 to-[#22070f]/90'
  },
  {
    id: 'warm',
    title: 'WARM & SENSUAL',
    subtitle: 'Rich. Alluring. Addictive.',
    image: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=700&q=85',
    themeColor: '#8a4b56',
    bgGradient: 'from-[#91505c]/85 to-[#5c232f]/90'
  },
  {
    id: 'fresh',
    title: 'FRESH & RADIANT',
    subtitle: 'Light. Elegant. Uplifting.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=700&q=85',
    themeColor: '#42101e',
    bgGradient: 'from-[#42101e]/90 to-[#26050e]/95'
  },
  {
    id: 'exclusive',
    title: 'EXCLUSIVE COLLECTION',
    subtitle: 'Rare. Unique. Unforgettable.',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=700&q=85',
    themeColor: '#6f5043',
    bgGradient: 'from-[#6e5043]/85 to-[#422c22]/90'
  }
];

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
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
