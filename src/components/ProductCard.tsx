import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { Star, ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { motion } from 'motion/react';

export const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-ink/5"
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        {product.isBestSeller && (
          <div className="absolute top-4 left-4 bg-accent text-ink text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
            Bestseller
          </div>
        )}
        {product.stock < 10 && (
          <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
            Only {product.stock} left!
          </div>
        )}
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-ink/20'
              }`}
            />
          ))}
          <span className="text-[10px] font-bold text-ink/40 ml-1">({product.reviews})</span>
        </div>

        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-display font-bold text-ink group-hover:text-primary transition-colors mb-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-ink/60 mb-4 line-clamp-1">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-black text-ink">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-secondary hover:bg-secondary/90 text-white p-3 rounded-2xl transition-all active:scale-95 shadow-lg shadow-secondary/20"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
