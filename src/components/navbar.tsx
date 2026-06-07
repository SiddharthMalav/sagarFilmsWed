"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Elegance Studio', href: '/Elegance-Studio' },
  { name: 'Pre-Wedding', href: '/Pre-Wedding' },
  { name: 'Candids', href: '/Candids' },
  { name: 'Wedding-Films', href: '/Wedding-Films' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 sm:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav 
          className={`relative rounded-full border transition-all duration-500 px-6 sm:px-8 py-3.5 flex items-center justify-between ${
            scrolled 
              ? 'bg-[#0a0a0a]/85 border-white/10 shadow-2xl backdrop-blur-md' 
              : 'bg-transparent border-transparent'
          }`}
        >
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-[#c5a880]/30 bg-white shadow-lg group-hover:scale-105 transition-transform duration-300 p-1 flex items-center justify-center">
              <img
                alt="Sagar Films Logo"
                src="/images/fevicon.jpeg"
                className="h-full w-full object-contain rounded-xl"
              />
            </div>
            <span className={`text-lg sm:text-xl font-medium tracking-[0.25em] font-serif-luxury transition-colors duration-300 ${
              scrolled ? 'text-white' : 'text-[#0a0a0a] mix-blend-difference'
            }`}>
              SAGAR FILMS
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex space-x-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 text-[11px] tracking-[0.2em] uppercase font-semibold transition-colors duration-300 ${
                      isActive 
                        ? 'text-[#c5a880]' 
                        : scrolled 
                          ? 'text-gray-300 hover:text-white' 
                          : 'text-gray-800 hover:text-[#0a0a0a]'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span 
                        layoutId="activeNavUnderline"
                        className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-[#c5a880] origin-left"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
            
            <Link 
              href="#contact"
              className="btn-premium-gold px-5 py-2.5 rounded-full text-[10px] tracking-[0.25em] uppercase font-bold shadow-md hover:shadow-[#c5a880]/20"
            >
              <span>Book Now</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full focus:outline-none transition-colors ${
                scrolled ? 'text-white hover:bg-white/10' : 'text-[#0a0a0a] hover:bg-black/5'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-24 mx-4 bg-[#0a0a0a]/95 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl z-40 lg:hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {navigation.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={item.name}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 text-xs tracking-[0.2em] uppercase font-bold border-b border-white/5 ${
                        isActive ? 'text-[#c5a880]' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navigation.length * 0.05 }}
                className="pt-4"
              >
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center w-full py-4 rounded-xl bg-[#c5a880] text-[#0a0a0a] hover:bg-[#b5966c] text-xs tracking-[0.25em] uppercase font-bold transition-all duration-300"
                >
                  Book Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}