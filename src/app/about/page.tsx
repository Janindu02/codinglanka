'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const offerings = [
    {
      title: "Curated YouTube Playlists",
      icon: "/images/home/youtube.png",
      description: "Carefully selected and categorized video tutorials covering web development, programming languages, and software engineering concepts."
    },
    {
      title: "Free Documentation & Resources",
      icon: "/images/home/contract.png",
      description: "Comprehensive collection of free documentation, e-books, and learning materials from trusted sources in the tech industry."
    },
    {
      title: "Structured Learning Paths",
      icon: "/images/home/careergoals.png",
      description: "Guided pathways that organize free resources in a logical sequence, helping you progress from basics to advanced concepts."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section - Increased top padding and bottom margin */}
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl mb-8">
            Bringing All Free Learning Resources Together
          </h1>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore the best free coding tutorials, YouTube playlists, free documentation, and valuable online resources all in one place!
          </p>
        </motion.div>
      </div>

      {/* Mission & Vision Section - Increased padding */}
      <div className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                To centralize and provide free access to high-quality coding resources, including YouTube tutorials, free documentation, and curated learning paths, ensuring that everyone—regardless of background—can learn software development efficiently.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                To build a knowledge hub where aspiring developers can find all free programming materials in one place, empowering them to excel in software engineering and contribute to the global tech industry.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* What We Offer Section - Increased spacing */}
      <div id="offerings" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-24"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              What We Offer
            </h2>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
              Everything you need to start your software development journey, completely free.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="h-20 w-20 mb-8">
                    <Image
                      src={offering.icon}
                      alt={offering.title}
                      width={80}
                      height={80}
                      className="object-contain dark:invert"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    {offering.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Increased padding */}
      <div className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-10">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our community and access all the free resources you need to become a successful developer.
          </p>
          <Link
            href="/auth"
            className="inline-block px-10 py-5 border-2 border-white text-white text-xl font-medium rounded-md hover:bg-white hover:text-blue-600 transition-colors"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
} 