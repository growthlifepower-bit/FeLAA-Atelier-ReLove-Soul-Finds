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
  {
    id: 'c7',
    name: 'Earth Code — Ivory Batik Wide-Leg Trousers',
    price: 115,
    category: 'clothing',
    description: 'Ivory linen with hand-painted dark brown batik circles, ovals and organic dot clusters — each panel a constellation, each crease a continent. High-waisted pleated silhouette, ultra wide-leg sweep. Made to your measurements.',
    condition: 'Excellent',
    era: 'FeLAA Atelier',
    image: '/felaa-earth-code-trousers.png',
    tags: ['trousers', 'batik', 'wide-leg', 'ivory', 'linen', 'handprinted'],
    isNew: true,
    isPreorder: true,
  },
  {
    id: 'c8',
    name: 'Terrain — Olive Batik Crop Co-ord',
    price: 165,
    category: 'clothing',
    description: 'Olive khaki linen co-ord with bold black abstract marks — dashes, ovals, stripes — printed in the spirit of Adire. Cropped boxy jacket with ¾ sleeves and patch pockets, matching ultra wide-leg trousers. Made to your measurements.',
    condition: 'Excellent',
    era: 'FeLAA Atelier',
    image: '/felaa-terrain-coord.png',
    tags: ['co-ord', 'batik', 'olive', 'linen', 'crop jacket', 'wide-leg', 'adire'],
    isFeatured: true,
    isNew: true,
    isPreorder: true,
  },
  {
    id: 'c9',
    name: 'Cosmos — Ivory Duster Batik Co-ord',
    price: 215,
    category: 'clothing',
    description: 'Ivory and amber with oversized black abstract geometric batik — moons, shields, arcs and bars arranged like ancient maps. Dramatic floor-length duster coat with structured shoulders and matching ultra wide-leg trousers. Statement dressing at its most ancestral. Made to your measurements.',
    condition: 'Excellent',
    era: 'FeLAA Atelier',
    image: '/felaa-cosmos-duster.png',
    tags: ['co-ord', 'batik', 'duster', 'ivory', 'wide-leg', 'statement', 'ancestral'],
    isFeatured: true,
    isNew: true,
    isPreorder: true,
  },
  {
    id: 'c10',
    name: 'Solstice — Gold Liquid Wrap Blouse',
    price: 95,
    category: 'clothing',
    description: 'Liquid gold lamé in a plunging wrap front with a self-tie at the waist, puffed bishop sleeves and buttoned cuffs. Worn open or knotted; worn day or night. Radiance without restraint. Made to your measurements.',
    condition: 'Excellent',
    era: 'FeLAA Atelier',
    image: '/felaa-solstice-blouse.png',
    tags: ['blouse', 'gold', 'lamé', 'wrap', 'bishop sleeves', 'statement'],
    isNew: true,
    isPreorder: true,
  },
  {
    id: 'c11',
    name: 'Grove — Olive Twist-Knot Midi',
    price: 110,
    category: 'clothing',
    description: 'Deep forest olive in a sleeveless mock-neck with a gathered twist-knot at the waist, draping into a clean midi column. An evening silhouette with nowhere to hide, and nothing to hide. Made to your measurements.',
    condition: 'Excellent',
    era: 'FeLAA Atelier',
    image: '/felaa-grove-midi.png',
    tags: ['dress', 'midi', 'olive', 'mock-neck', 'twist-knot', 'evening'],
    isNew: true,
    isPreorder: true,
  },
  {
    id: 'c12',
    name: 'Marigold — Ankara Crop & Bubble Skirt Set',
    price: 98,
    category: 'clothing',
    description: 'Vivid yellow and burgundy ankara butterfly print in a beaded-strap crop top with a matching gathered bubble mini skirt — full, joyful, ancestral. Roots dressed up for the night. Made to your measurements in your chosen ankara print.',
    condition: 'Excellent',
    era: 'FeLAA Atelier',
    image: '/felaa-marigold-bubble-set.png',
    tags: ['co-ord', 'ankara', 'crop top', 'bubble skirt', 'yellow', 'evening'],
    isNew: true,
    isPreorder: true,
  },
  {
    id: 'c13',
    name: 'Ember — Ankara Crop & Terracotta Trousers',
    price: 88,
    category: 'clothing',
    description: 'A flame-orange and black ankara butterfly print crop top with beaded straps, paired with wide-leg terracotta linen trousers — warmth meeting fire, evening meeting earth. Made to your measurements in your chosen ankara print.',
    condition: 'Excellent',
    era: 'FeLAA Atelier',
    image: '/felaa-ember-coord.png',
    tags: ['co-ord', 'ankara', 'crop top', 'terracotta', 'linen', 'wide-leg', 'evening'],
    isNew: true,
    isPreorder: true,
  },
  {
    id: 'c14',
    name: 'Highland — Plaid Crop Jacket',
    price: 125,
    category: 'clothing',
    description: 'A boxy cropped jacket in chunky green, camel and charcoal plaid with a band collar, patch pockets and statement buttons. Textured, grounded, deliberate. Autumn armour. Made to your measurements.',
    condition: 'Excellent',
    era: 'FeLAA Atelier',
    image: '/felaa-highland-jacket.png',
    tags: ['jacket', 'plaid', 'tartan', 'crop', 'green', 'camel', 'autumn'],
    isNew: true,
    isPreorder: true,
  },
  {
    id: 'c15',
    name: 'Garden Party — Floral Blouse & Velvet Pencil Skirt',
    price: 165,
    category: 'clothing',
    description: 'A dense dark floral chiffon blouse — full bloom on a night-sky ground — with a pussy-bow tie neck and bishop sleeves, paired with a black embossed velvet pencil skirt. Drama in daylight, ceremony at dusk. Made to your measurements.',
    condition: 'Excellent',
    era: 'FeLAA Atelier',
    image: '/felaa-garden-party-set.png',
    tags: ['blouse', 'skirt', 'floral', 'velvet', 'pencil skirt', 'evening', 'vintage-luxe'],
    isNew: true,
    isPreorder: true,
  },
  {
    id: 'c16',
    name: 'Uplift — Slogan Sweatshirt',
    price: 65,
    category: 'clothing',
    description: 'Charcoal marl fleece crew-neck with a vibrant pink psychedelic type print — "Up Ye Mighty One, You Can Accomplish What You Want" — and illustrated eyes. A Marcus Garvey refrain, carried on the body. Unisex. Made to order.',
    condition: 'Excellent',
    era: 'FeLAA Atelier',
    image: '/felaa-uplift-sweatshirt.png',
    tags: ['sweatshirt', 'slogan', 'unisex', 'charcoal', 'pink', 'graphic', 'garvey'],
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
  {
    id: 't4',
    name: 'Tongues of Fire — Abstract Ink Diptych',
    price: 340,
    category: 'art',
    description: 'Two columns of looping black ink calligraphy rise from pools of amber, cobalt and terracotta wash — as if ancient script is still writing itself into being. Original ink and watercolour on paper, diptych composition, oak frame.',
    condition: 'Excellent',
    era: 'Contemporary',
    image: '/felaa-art-tongues.png',
    tags: ['ink', 'calligraphy', 'abstract', 'diptych', 'amber', 'original'],
    isNew: true,
  },
  {
    id: 't5',
    name: 'Chorus — Large-Format Abstract Study',
    price: 420,
    category: 'art',
    description: 'An explosion of coral, rose and gold line-work over luminous watercolour washes of lemon, sky and lavender. Many voices, one field. Original watercolour and ink on paper, large format, oak frame.',
    condition: 'Excellent',
    era: 'Contemporary',
    image: '/felaa-art-chorus.png',
    tags: ['watercolour', 'abstract', 'coral', 'gold', 'large format', 'original'],
    isNew: true,
  },
  {
    id: 't6',
    name: 'Witness — Figurative Ink Study',
    price: 380,
    category: 'art',
    description: 'A solitary figure rendered in spare ink line and teal-sand wash — head bowed, present, still. There is dignity in the quiet. Original watercolour and ink on paper, oak frame.',
    condition: 'Excellent',
    era: 'Contemporary',
    image: '/felaa-art-witness.png',
    tags: ['watercolour', 'ink', 'figurative', 'teal', 'minimal', 'original'],
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
