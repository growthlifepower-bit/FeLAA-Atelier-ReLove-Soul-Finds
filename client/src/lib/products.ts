// ==========================================================================
// ReLove Soul Finds — Product Data Store
// Mock product catalog for all four categories
// ==========================================================================

export type Category = 'all' | 'clothing' | 'art' | 'jewelry';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: Exclude<Category, 'all'>;
  description: string;
  condition: 'Excellent' | 'Good' | 'Fair' | 'Loved';
  era: string;
  image: string;
  tags: string[];
  purchaseLink?: string;
  isFeatured?: boolean;
  isNew?: boolean;
  isSold?: boolean;
}

// Curated Unsplash images for product cards (warm, vintage-toned)
const IMAGES = {
  clothing: [
    'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80',
    'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80',
    'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80',
  ],
  art: [
    'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80',
    'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80',
    'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80',
    'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80',
    'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80',
    'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80',
  ],
};

export const PRODUCTS: Product[] = [
  // CLOTHING
  {
    id: 'c1',
    name: '80s Surface Geo-Stitched Denim Jacket',
    price: 68,
    originalPrice: 120,
    category: 'clothing',
    description: 'A beautifully upcycled 1980s denim jacket with hand-embroidered geometric couch-stitch of graphic text. One of a kind.',
    condition: 'Excellent',
    era: '1980s',
    image: IMAGES.clothing[0],
    tags: ['denim', 'embroidered', 'upcycled', 'geometric'],
    purchaseLink: 'https://buy.stripe.com/aFa00l77Q7ao4vB4H41gs06',
    isFeatured: true,
    isNew: true,
  },
  {
    id: 'c2',
    name: '70s Floral Wrap Dress',
    price: 45,
    category: 'clothing',
    description: 'A stunning rust and cream floral wrap dress from the early 1970s. Flutter sleeves, wrap tie waist. Size M.',
    condition: 'Good',
    era: '1970s',
    image: IMAGES.clothing[1],
    tags: ['dress', 'floral', '70s', 'boho'],
    purchaseLink: 'https://buy.stripe.com/dRmdRbgIqamA7HN0qO1gs02',
    isFeatured: true,
  },
  {
    id: 'c3',
    name: 'Patchwork Corduroy Blazer',
    price: 65,
    originalPrice: 85,
    category: 'clothing',
    description: 'A rich patchwork blazer in terracotta, navy, and mustard corduroy panels. Fully lined. Size L.',
    condition: 'Excellent',
    era: '1990s',
    image: IMAGES.clothing[2],
    tags: ['blazer', 'corduroy', 'patchwork', 'upcycled'],
    purchaseLink: 'https://buy.stripe.com/bJe14pcsagKY6DJ7Tg1gs05',
  },
  {
    id: 'c4',
    name: 'Line Knit Vest',
    price: 38,
    category: 'clothing',
    description: 'Circular-knitted vest in cream, rust, and mustard. Bohemian and one-of-a-kind. Size S/M.',
    condition: 'Excellent',
    era: '1970s',
    image: IMAGES.clothing[3],
    tags: ['knit', 'vest', 'handmade', 'boho'],
    purchaseLink: 'https://buy.stripe.com/dRm5kFbo63Ycgej4H41gs04',
    isNew: true,
  },
  {
    id: 'c5',
    name: 'Vintage Denim Frill Skirt',
    price: 38,
    category: 'clothing',
    description: 'Black denim midi skirt with asymmetrical frill hemline. Size S-M.',
    condition: 'Good',
    era: '1980s',
    image: IMAGES.clothing[4],
    tags: ['skirt', 'denim', 'midi', 'frill'],
    purchaseLink: 'https://buy.stripe.com/cNi5kFbo652g1jp5L81gs03',
  },
  {
    id: 'c6',
    name: 'Long Knit Cardigan',
    price: 52,
    originalPrice: 60,
    category: 'clothing',
    description: 'Oversized cardigan in apple green and baby pink with wooden buttons. Cozy and timeless. Size L.',
    condition: 'Good',
    era: '1990s',
    image: IMAGES.clothing[5],
    tags: ['cardigan', 'knit', 'oversized', 'cozy'],
    purchaseLink: 'https://buy.stripe.com/14A14pfEmeCQ8LR8Xk1gs07',
  },


  // ART
  {
    id: 't1',
    name: 'Tin Wind-Up Robot',
    price: 75,
    originalPrice: 110,
    category: 'art',
    description: 'A classic 1950s tin wind-up robot in red and silver. Still winds and walks! A true collector\'s piece.',
    condition: 'Good',
    era: '1950s',
    image: IMAGES.art[0],
    tags: ['robot', 'tin', 'wind-up', 'space age'],
    isFeatured: true,
  },
  {
    id: 't2',
    name: 'Wooden Pull-Along Duck',
    price: 35,
    category: 'art',
    description: 'Charming hand-painted wooden pull-along duck with rolling wheels. A beloved nursery classic.',
    condition: 'Good',
    era: '1960s',
    image: IMAGES.art[1],
    tags: ['wooden', 'pull toy', 'duck', 'nursery'],
    isNew: true,
  },
  {
    id: 't3',
    name: 'Painted Wooden Building Blocks Set',
    price: 42,
    category: 'art',
    description: 'Complete set of 24 hand-painted wooden building blocks in primary colors. Original box included.',
    condition: 'Good',
    era: '1960s',
    image: IMAGES.art[2],
    tags: ['blocks', 'wooden', 'educational', 'complete set'],
    isFeatured: true,
  },
  {
    id: 't4',
    name: 'Cast Iron Dump Truck',
    price: 58,
    originalPrice: 80,
    category: 'art',
    description: 'Heavy cast iron dump truck with working tipping bed. Original red paint with natural patina.',
    condition: 'Fair',
    era: '1940s',
    image: IMAGES.art[3],
    tags: ['cast iron', 'truck', 'dump truck', 'heavy'],
  },
  {
    id: 't5',
    name: 'Vintage Tin Tea Set',
    price: 48,
    category: 'art',
    description: 'Complete 12-piece tin lithograph tea set with floral motif. Teapot, cups, saucers, and tray.',
    condition: 'Good',
    era: '1950s',
    image: IMAGES.art[4],
    tags: ['tea set', 'tin', 'lithograph', 'complete'],
  },
  {
    id: 't6',
    name: 'Steiff Teddy Bear',
    price: 95,
    category: 'art',
    description: 'Beloved Steiff teddy bear with button in ear. Mohair fur, glass eyes, jointed limbs. Loved but sound.',
    condition: 'Loved',
    era: '1960s',
    image: IMAGES.art[5],
    tags: ['Steiff', 'teddy bear', 'mohair', 'jointed'],
    isNew: true,
  },
];

export const CATEGORIES = [
  {
    id: 'art' as const,
    label: 'Art',
    shortLabel: 'Art',
    description: 'Upcycled art, objects & artefacts',
    image: '/felaa-numode.jpg',
    count: 6,
    emoji: '🎨',
  },
  {
    id: 'clothing' as const,
    label: 'FeLAA NuMode',
    shortLabel: 'Clothing',
    description: 'Upcycled & one-of-a-kind wearables',
    image: '/felaa-numode-category.jpg',
    count: 6,
    emoji: '👗',
    href: '/relove-soul-finds',
  },
  {
    id: 'jewelry' as const,
    label: 'Jewelry',
    shortLabel: 'Jewelry',
    description: 'Curated vintage & handcrafted jewelry',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    count: 0,
    emoji: '💍',
  },
];

export function getProductsByCategory(category: Category): Product[] {
  if (category === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter(p => p.isFeatured);
}

export function getNewArrivals(): Product[] {
  return PRODUCTS.filter(p => p.isNew);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q)) ||
    p.era.toLowerCase().includes(q)
  );
}

export const CONDITION_COLORS: Record<Product['condition'], string> = {
  Excellent: 'bg-green-100 text-green-800',
  Good: 'bg-blue-100 text-blue-800',
  Fair: 'bg-yellow-100 text-yellow-800',
  Loved: 'bg-rose-100 text-rose-800',
};
