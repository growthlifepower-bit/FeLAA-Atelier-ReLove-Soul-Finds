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
  isPreorder?: boolean;
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
    name: 'Reverie — Ivory Cowl Slip Midi',
    price: 89,
    category: 'clothing',
    description: 'A draped ivory cowl neck and ruched side seam in liquid satin — sculpted to move, designed to linger. Spaghetti straps, midi length with thigh-high split. An FeLAA Atelier original.',
    condition: 'Excellent',
    era: 'FeLAA Atelier',
    image: '/reverie-cowl-midi.jpg',
    tags: ['dress', 'satin', 'cowl neck', 'midi', 'ivory', 'original design'],
    purchaseLink: 'https://buy.stripe.com/aFa00l77Q7ao4vB4H41gs06',
    isFeatured: true,
    isNew: true,
  },
  {
    id: 'c2',
    name: 'Blossom — Rose Lace Cold-Shoulder Midi',
    price: 145,
    category: 'clothing',
    description: 'All-over floral lace in blush rose with a cold-shoulder halter neckline, balloon cuffs and a scalloped A-line hem. Made to your measurements in your chosen lace variant. An FeLAA Atelier original.',
    condition: 'Excellent',
    era: 'FeLAA Atelier',
    image: '/felaa-blossom-lace.jpg',
    tags: ['dress', 'lace', 'halter', 'cold-shoulder', 'midi', 'blush'],
    purchaseLink: 'https://buy.stripe.com/dRmdRbgIqamA7HN0qO1gs02',
    isNew: true,
    isPreorder: true,
  },
  {
    id: 'c3',
    name: 'Crimson Garden — Jacquard Off-Shoulder Midi',
    price: 135,
    category: 'clothing',
    description: 'Rich navy and crimson floral jacquard in a structured off-shoulder silhouette with ruffle cuffs and a fitted pencil skirt. Statement evening dressing at its most intentional. Made to measure.',
    condition: 'Excellent',
    era: 'FeLAA Atelier',
    image: '/felaa-crimson-garden.jpg',
    tags: ['dress', 'jacquard', 'off-shoulder', 'navy', 'floral', 'evening'],
    purchaseLink: 'https://buy.stripe.com/bJe14pcsagKY6DJ7Tg1gs05',
    isNew: true,
    isPreorder: true,
  },
  {
    id: 'c4',
    name: 'Verdure — Olive Twist-Front Maxi',
    price: 120,
    category: 'clothing',
    description: 'Deep olive stretch fabric in a sleeveless mock-neck silhouette with a gathered twist knot at the waist. Clean, commanding, effortless. Made to your measurements.',
    condition: 'Excellent',
    era: 'FeLAA Atelier',
    image: '/felaa-verdure-maxi.jpg',
    tags: ['dress', 'maxi', 'olive', 'twist', 'mock-neck', 'sleeveless'],
    purchaseLink: 'https://buy.stripe.com/dRm5kFbo63Ycgej4H41gs04',
    isNew: true,
    isPreorder: true,
  },
  {
    id: 'c5',
    name: 'Soleil — Ankara Crop & Wide-Leg Linen Set',
    price: 58,
    category: 'clothing',
    description: 'A vibrant ankara wax print crop top paired with wide-leg sunshine yellow linen trousers. Roots and rhythm in one look. Choose your ankara print, made to your measurements.',
    condition: 'Excellent',
    era: 'FeLAA Atelier',
    image: '/felaa-soleil-set.jpg',
    tags: ['co-ord', 'ankara', 'wax print', 'crop top', 'wide-leg', 'linen', 'yellow'],
    purchaseLink: 'https://buy.stripe.com/cNi5kFbo652g1jp5L81gs03',
    isNew: true,
    isPreorder: true,
  },
  {
    id: 'c6',
    name: 'Butterfly Effect — Blue Ankara Mini',
    price: 125,
    category: 'clothing',
    description: 'Royal blue ankara butterfly print in a fit-and-flare silhouette with a sweetheart bodice, spaghetti straps and pockets. Joy in motion. Made to measure in your chosen ankara fabric.',
    condition: 'Excellent',
    era: 'FeLAA Atelier',
    image: '/felaa-butterfly-mini.jpg',
    tags: ['dress', 'ankara', 'mini', 'fit-and-flare', 'sweetheart', 'pockets', 'blue'],
    purchaseLink: 'https://buy.stripe.com/14A14pfEmeCQ8LR8Xk1gs07',
    isNew: true,
    isPreorder: true,
  },


  // ART
  {
    id: 't1',
    name: 'Pirouette — Watercolour Ballerina Study',
    price: 490,
    category: 'art',
    description: 'A suspended moment of flight — the dancer caught mid-turn in peach, rose and terracotta washes. Fluid ink outlines dissolve into pigment as if the body itself is becoming light. Original watercolour on paper, large format, oak frame.',
    condition: 'Excellent',
    era: 'Contemporary',
    image: '/felaa-art-pirouette.png',
    tags: ['watercolour', 'figurative', 'dancer', 'movement', 'peach', 'original'],
    isFeatured: true,
    isNew: true,
  },
  {
    id: 't2',
    name: 'Vessel — Abstract Botanical Forms',
    price: 560,
    category: 'art',
    description: 'Leaf-blade and petal shapes rendered in terracotta, ink-blue and amber — each form a vessel, each vessel a body. A meditation on containment and bloom. Original watercolour on paper, large format, oak frame.',
    condition: 'Excellent',
    era: 'Contemporary',
    image: '/felaa-art-vessel.png',
    tags: ['watercolour', 'abstract', 'botanical', 'terracotta', 'navy', 'original'],
    isNew: true,
  },
  {
    id: 't3',
    name: 'Griot — Expressive Figurative Study',
    price: 590,
    category: 'art',
    description: 'A figure erupting from ink and fire — navy, amber and raw sienna collide in a portrait of ancestral memory and spoken power. The griot carries every story. Original watercolour and ink on paper, large format, oak frame.',
    condition: 'Excellent',
    era: 'Contemporary',
    image: '/felaa-art-griot.png',
    tags: ['watercolour', 'ink', 'figurative', 'expressive', 'ancestral', 'original'],
    isFeatured: true,
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
