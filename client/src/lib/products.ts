// ==========================================================================
// ReLove Soul Finds — Product Data Store
// Mock product catalog for all four categories
// ==========================================================================

export type Category = 'all' | 'clothing' | 'collectibles' | 'art' | 'furniture' | 'jewelry';

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
  stripeLink?: string;
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
  collectibles: [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=80',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    'https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=600&q=80',
    'https://images.unsplash.com/photo-1504198266287-1659872e6590?w=600&q=80',
    'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&q=80',
  ],
  toys: [
    'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80',
    'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80',
    'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80',
    'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80',
    'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80',
    'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80',
  ],
  furniture: [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80',
    'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&q=80',
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
    stripeLink: 'https://buy.stripe.com/aFa00l77Q7ao4vB4H41gs06',
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
    stripeLink: 'https://buy.stripe.com/dRmdRbgIqamA7HN0qO1gs02',
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
    stripeLink: 'https://buy.stripe.com/bJe14pcsagKY6DJ7Tg1gs05',
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
    stripeLink: 'https://buy.stripe.com/dRm5kFbo63Ycgej4H41gs04',
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
    stripeLink: 'https://buy.stripe.com/cNi5kFbo652g1jp5L81gs03',
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
    stripeLink: 'https://buy.stripe.com/14A14pfEmeCQ8LR8Xk1gs07',
  },

  // COLLECTIBLES
  {
    id: 'col1',
    name: 'Brass Compass & Leather Journal Set',
    price: 85,
    originalPrice: 140,
    category: 'collectibles',
    description: 'An exquisite Victorian-era brass compass paired with a hand-stitched leather journal. Both in remarkable condition.',
    condition: 'Excellent',
    era: '1890s',
    image: IMAGES.collectibles[0],
    tags: ['brass', 'compass', 'Victorian', 'journal'],
    isFeatured: true,
  },
  {
    id: 'col2',
    name: 'Amber Glass Apothecary Bottles',
    price: 28,
    category: 'collectibles',
    description: 'Set of three amber glass apothecary bottles with original cork stoppers. Perfect for display or dried botanicals.',
    condition: 'Good',
    era: '1920s',
    image: IMAGES.collectibles[1],
    tags: ['glass', 'apothecary', 'amber', 'bottles'],
    isNew: true,
  },
  {
    id: 'col3',
    name: 'Porcelain Figurine — Lady in Garden',
    price: 52,
    category: 'collectibles',
    description: 'Delicate hand-painted porcelain figurine of a woman in a garden dress. Marked on the base, likely German origin.',
    condition: 'Excellent',
    era: '1940s',
    image: IMAGES.collectibles[2],
    tags: ['porcelain', 'figurine', 'German', 'hand-painted'],
    isFeatured: true,
  },
  {
    id: 'col4',
    name: 'Antique Pocket Watch',
    price: 120,
    originalPrice: 200,
    category: 'collectibles',
    description: 'A beautiful gold-tone pocket watch with Roman numeral face and original chain. Keeps excellent time.',
    condition: 'Excellent',
    era: '1910s',
    image: IMAGES.collectibles[3],
    tags: ['watch', 'pocket watch', 'gold', 'antique'],
  },
  {
    id: 'col5',
    name: 'Small Oil Painting in Gilded Frame',
    price: 95,
    category: 'collectibles',
    description: 'A small landscape oil painting in an ornate gilded frame. Unsigned but beautifully executed.',
    condition: 'Good',
    era: '1930s',
    image: IMAGES.collectibles[4],
    tags: ['painting', 'oil', 'landscape', 'gilded frame'],
  },
  {
    id: 'col6',
    name: 'Vintage Tin Advertising Sign',
    price: 48,
    category: 'collectibles',
    description: 'Original embossed tin advertising sign with vibrant color lithography. Some patina adds character.',
    condition: 'Fair',
    era: '1950s',
    image: IMAGES.collectibles[5],
    tags: ['tin', 'advertising', 'sign', 'lithography'],
    isNew: true,
  },

  // TOYS
  {
    id: 't1',
    name: 'Tin Wind-Up Robot',
    price: 75,
    originalPrice: 110,
    category: 'art',
    description: 'A classic 1950s tin wind-up robot in red and silver. Still winds and walks! A true collector\'s piece.',
    condition: 'Good',
    era: '1950s',
    image: IMAGES.toys[0],
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
    image: IMAGES.toys[1],
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
    image: IMAGES.toys[2],
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
    image: IMAGES.toys[3],
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
    image: IMAGES.toys[4],
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
    image: IMAGES.toys[5],
    tags: ['Steiff', 'teddy bear', 'mohair', 'jointed'],
    isNew: true,
  },

  // FURNITURE & ART
  {
    id: 'f1',
    name: 'Chalk-Painted Floral Side Table',
    price: 145,
    originalPrice: 220,
    category: 'furniture',
    description: 'A charming Victorian side table upcycled with chalky sage green paint and hand-painted floral motifs. Drawer included.',
    condition: 'Excellent',
    era: '1890s',
    image: IMAGES.furniture[0],
    tags: ['side table', 'chalk paint', 'floral', 'upcycled'],
    isFeatured: true,
  },
  {
    id: 'f2',
    name: 'Macramé Wall Hanging — Large',
    price: 78,
    category: 'furniture',
    description: 'Large handmade macramé wall hanging in natural cotton rope. Geometric heart motif. Approx 60cm wide.',
    condition: 'Excellent',
    era: 'Handmade',
    image: IMAGES.furniture[1],
    tags: ['macramé', 'wall art', 'handmade', 'cotton'],
    isNew: true,
    isFeatured: true,
  },
  {
    id: 'f3',
    name: 'Repurposed Crate Bookshelf',
    price: 88,
    category: 'furniture',
    description: 'Three vintage wooden crates stacked and joined to create a rustic bookshelf. Lightly sanded, natural finish.',
    condition: 'Good',
    era: '1970s',
    image: IMAGES.furniture[2],
    tags: ['bookshelf', 'crate', 'rustic', 'upcycled'],
  },
  {
    id: 'f4',
    name: 'Mid-Century Teak Side Chair',
    price: 165,
    originalPrice: 280,
    category: 'furniture',
    description: 'Beautifully restored mid-century teak dining chair with re-upholstered mustard wool seat. Solid and sturdy.',
    condition: 'Excellent',
    era: '1960s',
    image: IMAGES.furniture[3],
    tags: ['teak', 'chair', 'mid-century', 'restored'],
  },
  {
    id: 'f5',
    name: 'Hand-Painted Ceramic Planter',
    price: 55,
    category: 'furniture',
    description: 'Large hand-painted ceramic planter with trailing botanical motifs in terracotta and cream. Drainage hole included.',
    condition: 'Excellent',
    era: 'Handmade',
    image: IMAGES.furniture[4],
    tags: ['ceramic', 'planter', 'hand-painted', 'botanical'],
    isNew: true,
  },
  {
    id: 'f6',
    name: 'Boho Rattan Armchair',
    price: 195,
    originalPrice: 320,
    category: 'furniture',
    description: 'Vintage rattan armchair with new cushion in terracotta linen. Solid frame, beautiful natural patina.',
    condition: 'Good',
    era: '1970s',
    image: IMAGES.furniture[5],
    tags: ['rattan', 'armchair', 'boho', 'natural'],
    isFeatured: true,
  },
];

export const CATEGORIES = [
  {
    id: 'clothing' as const,
    label: 'Relove Soul Finds',
    shortLabel: 'Clothing',
    description: 'Upcycled & one-of-a-kind wearables',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663721448837/Tiz4gBHdGyBwEgDj9BYoTS/category-clothing-ZsDtn9Pap78Stfmg9GRXkD.webp',
    count: 6,
    emoji: '👗',
    href: '/relove-soul-finds',
  },
  {
    id: 'collectibles' as const,
    label: 'Soulful Collectibles',
    shortLabel: 'Collectibles',
    description: 'Curated treasures with history',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663721448837/Tiz4gBHdGyBwEgDj9BYoTS/category-collectibles-GzQTNtU6rrhhTHhonVz4ss.webp',
    count: 6,
    emoji: '🏺',
  },
  {
    id: 'art' as const,
    label: 'Art',
    shortLabel: 'Art',
    description: 'Upcycled art, objects & artefacts',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663721448837/Tiz4gBHdGyBwEgDj9BYoTS/category-toys-DyYCqVoveHMpK4ZA2YE4Sm.webp',
    count: 6,
    emoji: '🎨',
  },
  {
    id: 'furniture' as const,
    label: 'Furniture',
    shortLabel: 'Furniture',
    description: 'Upcycled & restored furniture pieces',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663721448837/Tiz4gBHdGyBwEgDj9BYoTS/category-furniture-BvHywFPFVyBJFJWWNCgXTp.webp',
    count: 6,
    emoji: '🪑',
  },
  {
    id: 'jewelry' as const,
    label: 'Jewelry',
    shortLabel: 'Jewelry',
    description: 'Curated vintage & handcrafted jewelry',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663721448837/Tiz4gBHdGyBwEgDj9BYoTS/category-clothing-ZsDtn9Pap78Stfmg9GRXkD.webp',
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
