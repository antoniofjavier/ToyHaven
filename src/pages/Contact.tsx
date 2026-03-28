import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-display font-black text-ink mb-6">We'd Love to Hear From You</h1>
        <p className="text-xl text-ink/60">Have a question about a toy or need a recommendation? Our team of play experts is ready to help.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[40px] border border-ink/5 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Email Us</h3>
              <p className="text-ink/60 text-sm mb-4">Response within 24 hours</p>
              <a href="mailto:hello@toyhaven.com" className="text-primary font-bold hover:underline">hello@toyhaven.com</a>
            </div>
            <div className="bg-white p-8 rounded-[40px] border border-ink/5 shadow-sm">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Call Us</h3>
              <p className="text-ink/60 text-sm mb-4">Mon-Fri, 9am - 5pm</p>
              <a href="tel:+1234567890" className="text-secondary font-bold hover:underline">+1 (234) 567-890</a>
            </div>
          </div>

          <div className="bg-ink text-white p-10 rounded-[50px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl font-display font-bold">Visit Our Flagship Store</h3>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-white/60 leading-relaxed">
                  123 Playful Lane, Creative District<br />
                  Imagination City, IC 54321
                </p>
              </div>
              <button className="bg-white text-ink px-8 py-4 rounded-2xl font-bold hover:bg-white/90 transition-all">
                Get Directions
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 md:p-16 rounded-[60px] border border-ink/5 shadow-xl">
          <h3 className="text-3xl font-display font-bold text-ink mb-8">Send a Message</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-ink/40 uppercase tracking-widest ml-1">Name</label>
                <input type="text" className="w-full bg-ink/5 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-ink/40 uppercase tracking-widest ml-1">Email</label>
                <input type="email" className="w-full bg-ink/5 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Your email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-ink/40 uppercase tracking-widest ml-1">Subject</label>
              <select className="w-full bg-ink/5 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option>General Inquiry</option>
                <option>Order Status</option>
                <option>Returns & Exchanges</option>
                <option>Toy Recommendation</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-ink/40 uppercase tracking-widest ml-1">Message</label>
              <textarea rows={5} className="w-full bg-ink/5 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full bg-primary text-white py-6 rounded-3xl font-bold text-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
              <MessageCircle className="w-6 h-6" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
