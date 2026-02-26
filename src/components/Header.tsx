import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/farmer-portal', label: 'FARMER PORTAL' },
    { path: '/processing-unit', label: 'PROCESSING UNIT' },
    { path: '/laboratory-testing', label: 'LABORATORY' },
    { path: '/consumer-portal', label: 'CONSUMER PORTAL' },
    { path: '/contact', label: 'CONTACT' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background border-b-2 border-secondary/20">
      <div className="max-w-[120rem] mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex flex-col"
            >
              <h1 className="font-heading text-2xl md:text-3xl text-secondary uppercase leading-none">
                AYURVEDIC
              </h1>
              <p className="font-paragraph text-xs text-secondary/70 uppercase tracking-wider mt-0.5">
                Herbal Traceability System
              </p>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <motion.span
                  whileHover={{ y: -2 }}
                  className={`font-heading text-xs uppercase tracking-wide transition-colors ${
                    isActive(link.path)
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : 'text-secondary/70 hover:text-primary'
                  }`}
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-secondary hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pt-4 border-t border-secondary/20 overflow-hidden"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-2 font-heading text-sm uppercase tracking-wide transition-colors ${
                        isActive(link.path)
                          ? 'text-primary'
                          : 'text-secondary/70 hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
