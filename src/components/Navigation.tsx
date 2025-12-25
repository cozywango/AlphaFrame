import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlowingEffect } from '@/components/ui/glowing-effect';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Overview' },
    { href: '/protocol', label: 'The Protocol' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            <span className="text-primary">Alpha</span>
            <span className="text-foreground">Frame</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative inline-block">
                <GlowingEffect disabled={false} glow className="pointer-events-none rounded-md" />
                <Link
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium relative z-10 px-1"
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Audit Brand
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-6 border-t border-border"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.href} className="relative">
                  <GlowingEffect disabled={false} glow className="pointer-events-none rounded-md" />
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium relative z-10"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Audit Brand
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};