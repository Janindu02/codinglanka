'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import TopicGrid from '@/components/youtube/TopicGrid';
import PlaylistViewer from '@/components/youtube/PlaylistViewer';
import AISection from '@/components/youtube/AISection';
import Navbar from "@/components/Navbar";

// Define the topics and their playlists
const topics = [
  {
    id: 'wp',
    title: 'WordPress',
    description: 'Learn WordPress development from basics to advanced themes and plugins',
    thumbnail: '/images/topics/wordpress.jpg',
    playlists: [
      { id: 'PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU', title: 'WordPress Theme Development' }
    ]
  },
  {
    id: 'java',
    title: 'Java',
    description: 'Master Java programming with comprehensive tutorials',
    thumbnail: '/images/topics/java.jpg',
    playlists: [
      { id: 'PLS1QulWo1RIbfTjQvTdj8Y6yyq4R7g-Al', title: 'Java Programming' }
    ]
  },
  {
    id: 'oop-java',
    title: 'OOP (Java)',
    description: 'Master Object-Oriented Programming concepts with Java including classes, inheritance, polymorphism, encapsulation, and design patterns',
    thumbnail: '/images/topics/java-oop.jpg',
    playlists: [
      { id: 'PLfu_Bpi_zcDPNy6qznvbkGZF9sRSFSBKR', title: 'Java OOP Concepts' }
    ]
  },
  {
    id: 'python',
    title: 'Python',
    description: 'Learn Python programming from basics to advanced concepts',
    thumbnail: '/images/topics/python.jpg',
    playlists: [
      { id: 'PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU', title: 'Python Tutorials' }
    ]
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Comprehensive guide to modern web development',
    thumbnail: '/images/topics/web-dev.jpg',
    playlists: [
      { id: 'PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d', title: 'Full Web Development Course' }
    ]
  },
  {
    id: 'html-css',
    title: 'Basic HTML & CSS',
    description: 'Master the fundamentals of web development with HTML and CSS',
    thumbnail: '/images/topics/html-css.jpg',
    playlists: [
      { id: 'PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G', title: 'HTML & CSS Basics' }
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    description: 'Learn modern JavaScript from fundamentals to advanced concepts',
    thumbnail: '/images/topics/javascript.jpg',
    playlists: [
      { id: 'PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc', title: 'Modern JavaScript' }
    ]
  },
  {
    id: 'react',
    title: 'React',
    description: 'Build modern user interfaces with React',
    thumbnail: '/images/topics/react.jpg',
    playlists: [
      { id: 'PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d', title: 'React Complete Course' }
    ]
  },
  {
    id: 'spring-boot',
    title: 'Spring Boot',
    description: 'Learn enterprise Java development with Spring Boot',
    thumbnail: '/images/topics/spring-boot.jpg',
    playlists: [
      { id: 'PLqq-6Pq4lTTbx8p2oCgcAQGQyqN8XeA1x', title: 'Spring Boot Tutorial' }
    ]
  },
  {
    id: 'angular',
    title: 'Angular',
    description: 'Master Angular framework for building web applications',
    thumbnail: '/images/topics/angular.jpg',
    playlists: [
      { id: 'PL0b6OzIxLPbyrzCMJOFzLnf_-MmxY2_IH', title: 'Angular Complete Course' }
    ]
  },
  {
    id: 'nextjs',
    title: 'Next.js',
    description: 'Build full-stack React applications with Next.js',
    thumbnail: '/images/topics/nextjs.jpg',
    playlists: [
      { id: 'PL4cUxeGkcC9g9gP2onazU5-2M-AzW8eBw', title: 'Next.js Tutorial' }
    ]
  },
  {
    id: 'nodejs',
    title: 'Node.js',
    description: 'Learn server-side JavaScript with Node.js',
    thumbnail: '/images/topics/nodejs.jpg',
    playlists: [
      { id: 'PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU', title: 'Node.js Crash Course' }
    ]
  },
  {
    id: 'dsa',
    title: 'Data Structures and Algorithms',
    description: 'Master essential computer science concepts and problem-solving',
    thumbnail: '/images/topics/dsa.jpg',
    playlists: [
      { id: 'PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ', title: 'DSA Complete Course' }
    ]
  },
  {
    id: 'basics',
    title: 'Basic Knowledge for Software Engineering',
    description: 'Essential concepts every software engineer should know',
    thumbnail: '/images/topics/basics.jpg',
    playlists: [
      { id: 'PLWKjhJtqVAbkso-IbgiiP48n-O-JQA9PJ', title: 'Programming Fundamentals' }
    ]
  }
];

export default function YouTubePage() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
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

          {selectedTopic ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedTopic(null)}
                className="mb-8 text-blue-600 hover:text-blue-700 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Topics
              </button>
              <PlaylistViewer topic={selectedTopic} />
            </motion.div>
          ) : (
            <>
              <TopicGrid topics={topics} onTopicSelect={setSelectedTopic} />
              <AISection />
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
} 