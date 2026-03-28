export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  benefits: string[];
  ageRange: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  isBestSeller?: boolean;
  stock: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Eco-Friendly Wooden Blocks',
    price: 34.99,
    description: 'Classic building blocks made from sustainable beech wood. Perfect for developing fine motor skills and spatial awareness.',
    benefits: ['Sustainable materials', 'Non-toxic paint', 'Boosts creativity'],
    ageRange: '2-5',
    category: 'Educational',
    image: 'https://picsum.photos/seed/blocks/600/600',
    rating: 4.8,
    reviews: 124,
    isBestSeller: true,
    stock: 15,
  },
  {
    id: '2',
    name: 'Solar System Puzzle',
    price: 19.99,
    description: 'A vibrant 100-piece puzzle that teaches kids about the planets and our galaxy.',
    benefits: ['Educational', 'High-quality print', 'Large pieces for small hands'],
    ageRange: '5-8',
    category: 'Puzzles',
    image: 'https://picsum.photos/seed/puzzle/600/600',
    rating: 4.9,
    reviews: 89,
    isBestSeller: true,
    stock: 42,
  },
  {
    id: '3',
    name: 'Magnetic Tiles Set',
    price: 59.99,
    description: '60 pieces of translucent magnetic tiles for building 3D structures. The ultimate STEM toy.',
    benefits: ['STEM learning', 'Strong magnets', 'Endless possibilities'],
    ageRange: '3-10',
    category: 'STEM',
    image: 'https://picsum.photos/seed/magnetic/600/600',
    rating: 4.7,
    reviews: 210,
    isBestSeller: true,
    stock: 5,
  },
  {
    id: '4',
    name: 'Plush Organic Bunny',
    price: 24.99,
    description: 'Soft, cuddly bunny made from 100% organic cotton. The perfect companion for toddlers.',
    benefits: ['Organic cotton', 'Machine washable', 'Ultra soft'],
    ageRange: '0-2',
    category: 'Plush',
    image: 'https://picsum.photos/seed/bunny/600/600',
    rating: 5.0,
    reviews: 56,
    stock: 20,
  },
  {
    id: '5',
    name: 'Beginner Coding Robot',
    price: 89.99,
    description: 'A screen-free way to introduce basic coding concepts to young children through play.',
    benefits: ['Screen-free fun', 'Problem solving', 'Interactive'],
    ageRange: '4-7',
    category: 'STEM',
    image: 'https://picsum.photos/seed/robot/600/600',
    rating: 4.6,
    reviews: 45,
    stock: 12,
  },
  {
    id: '6',
    name: 'Artistic Watercolor Set',
    price: 15.99,
    description: 'Washable watercolor paints with professional-grade pigments for the little artist.',
    benefits: ['Washable', 'Vibrant colors', 'Non-toxic'],
    ageRange: '3+',
    category: 'Art',
    image: 'https://picsum.photos/seed/art/600/600',
    rating: 4.5,
    reviews: 78,
    stock: 30,
  }
];
