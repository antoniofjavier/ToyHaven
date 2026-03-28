import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Cart = () => {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <div className="w-24 h-24 bg-ink/5 rounded-full flex items-center justify-center mx-auto mb-8">
          <ShoppingBag className="w-12 h-12 text-ink/20" />
        </div>
        <h1 className="text-4xl font-display font-black text-ink mb-4">Tu carrito está vacío</h1>
        <p className="text-ink/60 mb-10 text-lg">Parece que aún no has añadido ningún juguete.</p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-primary text-white px-10 py-5 rounded-3xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
        >
          Empezar a Comprar <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <h1 className="text-5xl font-display font-black text-ink mb-12">Tu Bolsa de la Compra</h1>

      <div className="grid lg:grid-cols-3 gap-16 items-start">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          <AnimatePresence mode="popLayout">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="bg-white rounded-[40px] p-6 md:p-8 flex flex-col sm:flex-row items-center gap-8 border border-ink/5 shadow-sm"
              >
                <Link to={`/product/${item.id}`} className="w-32 h-32 rounded-3xl overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </Link>

                <div className="flex-1 text-center sm:text-left">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="text-xl font-display font-bold text-ink mb-1 hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-ink/40 font-semibold mb-4">{item.category} • {item.ageRange} Años</p>
                  
                  <div className="flex items-center justify-center sm:justify-start gap-4">
                    <div className="flex items-center bg-ink/5 rounded-2xl p-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-white rounded-xl transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-white rounded-xl transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-3 text-ink/20 hover:text-primary transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-2xl font-black text-ink">${(item.price * item.quantity).toFixed(2)}</span>
                  <span className="block text-xs font-bold text-ink/40 mt-1">${item.price} cada uno</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Summary */}
        <aside className="space-y-8">
          <div className="bg-ink text-white rounded-[50px] p-10 space-y-8 sticky top-32">
            <h2 className="text-3xl font-display font-bold">Resumen del Pedido</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between text-white/60 font-semibold">
                <span>Subtotal ({totalItems} artículos)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-white/60 font-semibold">
                <span>Envío</span>
                <span className="text-secondary">GRATIS</span>
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                <span className="text-lg font-bold">Total</span>
                <span className="text-4xl font-black text-primary">${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-3xl font-bold text-xl transition-all shadow-xl shadow-primary/40 flex items-center justify-center gap-3 active:scale-95">
              Finalizar Compra <ArrowRight className="w-6 h-6" />
            </button>

            <div className="flex items-center justify-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              Pago Seguro
            </div>
          </div>

          <div className="bg-accent/20 rounded-[40px] p-8 text-center">
            <p className="text-ink font-bold mb-2">¿Necesitas ayuda con tu pedido?</p>
            <p className="text-ink/60 text-sm mb-4">Nuestro amable equipo está aquí para ayudarte a encontrar el regalo perfecto.</p>
            <Link to="/contact" className="text-primary font-black hover:underline">Chatea con nosotros</Link>
          </div>
        </aside>
      </div>
    </div>
  );
};
