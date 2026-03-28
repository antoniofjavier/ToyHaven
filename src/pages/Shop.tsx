import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Filter, ChevronDown, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Shop = () => {
  const [searchParams] = useSearchParams();
  const initialAge = searchParams.get('age');
  const initialFilter = searchParams.get('filter');

  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedAge, setSelectedAge] = useState<string>(initialAge || 'Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['Todos', ...new Set(products.map((p) => p.category))];
  const ages = ['Todos', '0-2', '3-5', '6-8', '9+'];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = selectedCategory === 'Todos' || p.category === selectedCategory;
      const matchesAge = selectedAge === 'Todos' || p.ageRange.includes(selectedAge);
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = !initialFilter || 
                           (initialFilter === 'best-sellers' && p.isBestSeller) ||
                           (initialFilter === 'new' && true); // Mocking new
      
      return matchesCategory && matchesAge && matchesSearch && matchesFilter;
    }).sort((a, b) => {
      if (sortBy === 'low-high') return a.price - b.price;
      if (sortBy === 'high-low') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, selectedAge, searchQuery, sortBy, initialFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div>
          <h1 className="text-4xl font-display font-black text-ink mb-2">Todos los Juguetes</h1>
          <p className="text-ink/60">{filteredProducts.length} productos encontrados</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/30" />
            <input
              type="text"
              placeholder="Buscar juguetes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-ink/10 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white px-6 py-4 rounded-2xl border border-ink/10 font-bold text-sm focus:outline-none"
          >
            <option value="featured">Destacados</option>
            <option value="low-high">Precio: Menor a Mayor</option>
            <option value="high-low">Precio: Mayor a Menor</option>
            <option value="rating">Mejor Valorados</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="lg:w-64 space-y-10">
          <div>
            <h3 className="text-lg font-display font-bold mb-6 flex items-center gap-2">
              <Filter className="w-5 h-5" /> Categorías
            </h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'hover:bg-ink/5 text-ink/70'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-display font-bold mb-6">Comprar por Edad</h3>
            <div className="grid grid-cols-2 gap-2">
              {ages.map((age) => (
                <button
                  key={age}
                  onClick={() => setSelectedAge(age)}
                  className={`px-4 py-3 rounded-xl font-semibold transition-all border ${
                    selectedAge === age
                      ? 'bg-secondary border-secondary text-white'
                      : 'border-ink/10 hover:border-primary text-ink/70'
                  }`}
                >
                  {age === 'Todos' ? age : `${age} Años`}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24 bg-white rounded-[40px] border border-dashed border-ink/20"
              >
                <p className="text-xl font-display font-bold text-ink/40">No se encontraron juguetes con estos filtros.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('Todos');
                    setSelectedAge('Todos');
                    setSearchQuery('');
                  }}
                  className="mt-6 text-primary font-bold hover:underline"
                >
                  Limpiar todos los filtros
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
