import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { FC } from 'react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

interface ProductCardProps {
  name: string;
  description: string;
  href: string;
  index: number;
}

export const ProductCard: FC<ProductCardProps> = ({ name, description, href, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link to={href}>
        <div className="relative">
          <GlowingEffect disabled={false} glow className="pointer-events-none rounded-2xl" />
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(24_100%_50%/0.1)] group-hover:scale-[1.02] relative overflow-hidden">
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                  {name}
                </h3>
                <ArrowUpRight 
                  className="text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" 
                  size={24} 
                />
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
              
              {/* Bottom accent line */}
              <div className="mt-8 h-px bg-gradient-to-r from-primary/50 via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};