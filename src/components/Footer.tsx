import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-ink/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-display font-black text-xl">
                T
              </div>
              <span className="text-2xl font-display font-black tracking-tight text-ink">
                Toy<span className="text-primary">Haven</span>
              </span>
            </Link>
            <p className="text-ink/60 leading-relaxed">
              We believe in the power of play. Our curated toys are designed to spark imagination, encourage learning, and create lasting memories.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-ink/5 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-ink/5 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-ink/5 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8">Shop by Age</h4>
            <ul className="space-y-4">
              <li><Link to="/shop?age=0-2" className="text-ink/60 hover:text-primary transition-colors">0-2 Years</Link></li>
              <li><Link to="/shop?age=3-5" className="text-ink/60 hover:text-primary transition-colors">3-5 Years</Link></li>
              <li><Link to="/shop?age=6-8" className="text-ink/60 hover:text-primary transition-colors">6-8 Years</Link></li>
              <li><Link to="/shop?age=9+" className="text-ink/60 hover:text-primary transition-colors">9+ Years</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-ink/60 hover:text-primary transition-colors">Shop All</Link></li>
              <li><Link to="/about" className="text-ink/60 hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="text-ink/60 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-ink/60 hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link to="/blog" className="text-ink/60 hover:text-primary transition-colors">Play Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8">Customer Care</h4>
            <ul className="space-y-4">
              <li><Link to="/shipping" className="text-ink/60 hover:text-primary transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-ink/60 hover:text-primary transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/privacy" className="text-ink/60 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-ink/60 hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-ink/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-ink/40 text-sm font-semibold">
            © 2026 ToyHaven Store. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-ink/40 text-sm font-semibold">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for kids everywhere
          </div>
        </div>
      </div>
    </footer>
  );
};
