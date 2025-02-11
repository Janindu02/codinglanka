'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: "Structured Career Paths",
    description: "Follow carefully designed learning paths to become a professional developer",
    icon: "/icons/path.svg"
  },
  {
    title: "Free Resources",
    description: "Access curated learning materials from the best sources across the web",
    icon: "/icons/resources.svg"
  },
  {
    title: "Certification Program",
    description: "Earn certificates as you complete courses and projects",
    icon: "/icons/certificate.svg"
  },
  {
    title: "Community Support",
    description: "Join a thriving community of developers and mentors",
    icon: "/icons/community.svg"
  }
];

const teamMembers = [
  {
    name: "Ashan Perera",
    role: "Founder & Lead Instructor",
    image: "/team/ashan.jpg",
    description: "Full Stack Developer with 10+ years of experience"
  },
  {
    name: "Malini Silva",
    role: "Content Director",
    image: "/team/malini.jpg",
    description: "Educational content specialist and former lecturer"
  },
  {
    name: "Raj Kumar",
    role: "Technical Mentor",
    image: "/team/raj.jpg",
    description: "Senior Software Engineer specializing in AI/ML"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-16 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Empowering Future Coders
          <span className="block text-blue-600">in Sri Lanka</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
          Coding Lanka is on a mission to democratize coding education in Sri Lanka. 
          We believe that everyone should have access to quality programming education, 
          regardless of their background.
        </p>
      </motion.div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 py-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">
              To provide free and structured coding education for aspiring developers, 
              making technology education accessible to everyone in Sri Lanka.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-300">
              To create a thriving community of Sri Lankan developers skilled in software 
              engineering and AI, contributing to the global tech ecosystem.
            </p>
          </div>
        </motion.div>

        {/* What We Offer Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="py-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 mb-4">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={48}
                      height={48}
                      className="dark:invert"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="py-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.name}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="py-16"
        >
          <div className="bg-blue-600 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have already started their journey to becoming 
              professional developers with Coding Lanka.
            </p>
            <Link 
              href="/career-paths"
              className="inline-block px-8 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 