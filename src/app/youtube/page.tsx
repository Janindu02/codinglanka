'use client';

import { motion } from 'framer-motion';

export default function YouTubePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Free YouTube Videos
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-16">
            Carefully curated video tutorials to help you master software development
          </p>
          
          {/* Add your YouTube video content here */}
        </motion.div>
      </div>
    </div>
  );
} 