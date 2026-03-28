import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck, RotateCcw, Gift } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { motion } from 'motion/react';

export const Home = () => {
  const bestSellers = products.filter((p) => p.isBestSeller);

  const categories = [
    { name: '0-2 Años', image: 'https://picsum.photos/seed/baby/400/400', color: 'bg-blue-100' },
    { name: '3-5 Años', image: 'https://picsum.photos/seed/toddler/400/400', color: 'bg-green-100' },
    { name: '6-8 Años', image: 'https://picsum.photos/seed/kid/400/400', color: 'bg-yellow-100' },
    { name: '9+ Años', image: 'https://picsum.photos/seed/teen/400/400', color: 'bg-purple-100' },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/play/1920/1080?blur=2"
            alt="Hero"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-primary/10 text-primary font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                Ecológico y Educativo
              </span>
              <h1 className="text-6xl md:text-8xl font-display font-black text-ink leading-[0.9] mb-8">
                Juega, Aprende, <br />
                <span className="text-primary">Creced Juntos.</span>
              </h1>
              <p className="text-xl text-ink/70 mb-10 leading-relaxed">
                Descubre nuestra colección de juguetes sin pantallas diseñados para despertar la creatividad y potenciar el desarrollo de cada niño.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-3xl font-bold text-lg transition-all shadow-xl shadow-primary/20 flex items-center gap-2 group"
                >
                  Comprar Ahora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/shop?filter=gifts"
                  className="bg-white hover:bg-ink/5 text-ink px-10 py-5 rounded-3xl font-bold text-lg transition-all border border-ink/10 flex items-center gap-2"
                >
                  Buscador de Regalos
                  <Gift className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements Animation */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block w-1/2 h-full">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-secondary/30 rounded-full blur-3xl"
          />
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-black text-ink mb-4">Comprar por Edad</h2>
          <p className="text-ink/60">Encuentra el juguete perfecto para cada etapa del desarrollo.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              whileHover={{ scale: 1.05 }}
              className={`${cat.color} rounded-[40px] p-8 text-center cursor-pointer group transition-all`}
            >
              <div className="aspect-square rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-xl font-display font-bold text-ink mb-2">{cat.name}</h3>
              <Link to={`/shop?age=${cat.name}`} className="text-sm font-bold text-ink/40 group-hover:text-primary transition-colors flex items-center justify-center gap-1">
                Explore <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl font-display font-black text-ink mb-4">Más Vendidos</h2>
              <p className="text-ink/60">Los juguetes que más gustan a padres y niños.</p>
            </div>
            <Link to="/shop" className="text-primary font-bold flex items-center gap-2 hover:underline">
              Ver Todo <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ink text-white rounded-[60px] p-12 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="grid md:grid-cols-3 gap-16 relative z-10">
            <div className="space-y-6 text-center md:text-left">
              <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center mx-auto md:mx-0">
                <ShieldCheck className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-display font-bold">Materiales Seguros</h3>
              <p className="text-white/60 leading-relaxed">
                Cada juguete es probado para su seguridad y hecho de materiales no tóxicos y sostenibles.
              </p>
            </div>
            <div className="space-y-6 text-center md:text-left">
              <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center mx-auto md:mx-0">
                <Truck className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold">Envío Rápido</h3>
              <p className="text-white/60 leading-relaxed">
                Envío gratuito en pedidos superiores a 50€. Entregado en tu puerta en 48 horas.
              </p>
            </div>
            <div className="space-y-6 text-center md:text-left">
              <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center mx-auto md:mx-0">
                <RotateCcw className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold">Devoluciones Fáciles</h3>
              <p className="text-white/60 leading-relaxed">
                ¿No estás satisfecho? No hay problema. 30 días de devoluciones sin complicaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-accent rounded-[40px] p-12 md:p-20">
          <h2 className="text-4xl font-display font-black text-ink mb-6">Únete al Club del Juego</h2>
          <p className="text-ink/70 mb-10 text-lg">
            Obtén un 10% de descuento en tu primer pedido e ideas de juego semanales para tus hijos.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Introduce tu email"
              className="flex-1 bg-white px-8 py-5 rounded-3xl font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-ink text-white px-10 py-5 rounded-3xl font-bold hover:bg-ink/90 transition-all">
              Unirse Ahora
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
