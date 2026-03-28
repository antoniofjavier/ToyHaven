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
    name: 'Bloques de Madera Natural',
    price: 34.99,
    description: 'Bloques de construcción clásicos hechos de madera de haya sostenible. Perfectos para desarrollar la motricidad fina y la conciencia espacial.',
    benefits: ['Materiales sostenibles', 'Pintura no tóxica', 'Fomenta la creatividad'],
    ageRange: '2-5',
    category: 'Educativo',
    image: 'https://picsum.photos/seed/blocks/600/600',
    rating: 4.8,
    reviews: 124,
    isBestSeller: true,
    stock: 15,
  },
  {
    id: '2',
    name: 'Puzzle del Sistema Solar',
    price: 19.99,
    description: 'Un vibrante rompecabezas de 100 piezas que enseña a los niños sobre los planetas y nuestra galaxia.',
    benefits: ['Educativo', 'Impresión de alta calidad', 'Piezas grandes para manos pequeñas'],
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
    name: 'Set de Azulejos Magnéticos',
    price: 59.99,
    description: '60 piezas de azulejos magnéticos translúcidos para construir estructuras 3D. El juguete STEM definitivo.',
    benefits: ['Aprendizaje STEM', 'Imanes fuertes', 'Posibilidades infinitas'],
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
    name: 'Conejito de Algodón Orgánico',
    price: 24.99,
    description: 'Conejito suave y tierno hecho de algodón 100% orgánico. El compañero perfecto para los más pequeños.',
    benefits: ['Algodón orgánico', 'Lavable a máquina', 'Ultra suave'],
    ageRange: '0-2',
    category: 'Peluches',
    image: 'https://picsum.photos/seed/bunny/600/600',
    rating: 5.0,
    reviews: 56,
    stock: 20,
  },
  {
    id: '5',
    name: 'Robot de Programación para Principiantes',
    price: 89.99,
    description: 'Una forma sin pantallas de introducir conceptos básicos de programación a niños pequeños a través del juego.',
    benefits: ['Diversión sin pantallas', 'Resolución de problemas', 'Interactivo'],
    ageRange: '4-7',
    category: 'STEM',
    image: 'https://picsum.photos/seed/robot/600/600',
    rating: 4.6,
    reviews: 45,
    stock: 12,
  },
  {
    id: '6',
    name: 'Set de Acuarelas Artísticas',
    price: 15.99,
    description: 'Pinturas de acuarela lavables con pigmentos de grado profesional para el pequeño artista.',
    benefits: ['Lavable', 'Colores vibrantes', 'No tóxico'],
    ageRange: '3+',
    category: 'Arte',
    image: 'https://picsum.photos/seed/art/600/600',
    rating: 4.5,
    reviews: 78,
    stock: 30,
  }
];
