'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TopicGrid({ topics, onTopicSelect }) {
  // Group topics into categories
  const categories = {
    'Core Programming': ['oop-java', 'java', 'python', 'dsa', 'basics'],
    'Web Development': ['html-css', 'javascript', 'web-dev'],
    'Frontend Frameworks': ['react', 'angular', 'nextjs'],
    'Backend Development': ['nodejs', 'spring-boot'],
    'CMS': ['wp']
  };

  return (
    <div className="space-y-16">
      {Object.entries(categories).map(([category, topicIds]) => (
        <div key={category}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics
              .filter(topic => topicIds.includes(topic.id))
              .map((topic, index) => (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => onTopicSelect(topic)}
                >
                  <div className="relative h-48">
                    <Image
                      src={topic.thumbnail}
                      alt={topic.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {topic.description}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
} 