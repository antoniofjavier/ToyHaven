import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../hooks/useCart';
import { Star, ShoppingCart, ShieldCheck, Truck, RotateCcw, Heart, Share2, Check } from 'lucide-react';
import { motion } from 'motion/react';

export const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-display font-black mb-4">Juguete No Encontrado</h1>
        <Link to="/shop" className="text-primary font-bold hover:underline">Volver a la Tienda</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Image Gallery */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square rounded-[60px] overflow-hidden bg-white border border-ink/5 shadow-sm"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square rounded-3xl overflow-hidden bg-white border border-ink/5 cursor-pointer hover:border-primary transition-colors">
                <img src={`https://picsum.photos/seed/${product.id}${i}/300/300`} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-ink/20'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-ink/40">{product.reviews} Reseñas de Clientes</span>
            </div>
            <h1 className="text-5xl font-display font-black text-ink mb-4 leading-tight">
              {product.name}
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-4xl font-black text-primary">${product.price}</span>
              {product.isBestSeller && (
                <span className="bg-accent text-ink text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full">
                  Más Vendido
                </span>
              )}
            </div>
          </div>

          <p className="text-xl text-ink/70 leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg">Beneficios Clave:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-ink/70">
                  <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-white rounded-[40px] border border-ink/5 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="block text-sm font-bold text-ink/40 uppercase tracking-widest mb-1">Rango de Edad</span>
                <span className="text-xl font-display font-bold">{product.ageRange} Años</span>
              </div>
              <div className="text-right">
                <span className="block text-sm font-bold text-ink/40 uppercase tracking-widest mb-1">Estado de Stock</span>
                <span className={`text-xl font-display font-bold ${product.stock < 10 ? 'text-primary' : 'text-secondary'}`}>
                  {product.stock < 10 ? `¡Solo quedan ${product.stock}!` : 'En Stock'}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => addToCart(product)}
                className="flex-1 bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-3xl font-bold text-lg transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-95"
              >
                <ShoppingCart className="w-6 h-6" />
                Añadir al Carrito
              </button>
              <button className="p-6 bg-white hover:bg-ink/5 border border-ink/10 rounded-3xl transition-all">
                <Heart className="w-6 h-6 text-ink/40" />
              </button>
              <button className="p-6 bg-white hover:bg-ink/5 border border-ink/10 rounded-3xl transition-all">
                <Share2 className="w-6 h-6 text-ink/40" />
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-ink/5">
            <div className="text-center space-y-2">
              <ShieldCheck className="w-6 h-6 text-secondary mx-auto" />
              <span className="block text-[10px] font-black uppercase tracking-widest text-ink/40">Juguetes Seguros</span>
            </div>
            <div className="text-center space-y-2">
              <Truck className="w-6 h-6 text-accent mx-auto" />
              <span className="block text-[10px] font-black uppercase tracking-widest text-ink/40">Envío Rápido</span>
            </div>
            <div className="text-center space-y-2">
              <RotateCcw className="w-6 h-6 text-primary mx-auto" />
              <span className="block text-[10px] font-black uppercase tracking-widest text-ink/40">Devolución Fácil</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
