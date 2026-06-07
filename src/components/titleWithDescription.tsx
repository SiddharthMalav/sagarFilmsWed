"use client"
import React from 'react';
import { motion } from 'framer-motion';

type TTitleWithDescription = {
  title: string;
  description: string;
}

export const TitleWithDescription = ({ title, description }: TTitleWithDescription) => {
  return (
    <div className="text-center max-w-4xl mx-auto mb-20 space-y-5">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-light text-[#0a0a0a] font-serif-luxury tracking-wide"
      >
        {title}
      </motion.h2>
      
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-12 h-[1.5px] bg-[#c5a880] mx-auto my-4" 
      />
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-gray-500 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto"
      >
        {description}
      </motion.p>
    </div>
  );
}
