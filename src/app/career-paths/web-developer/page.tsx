'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface LearningResource {
  title: string;
  url: string;
  platform: string;
}

interface LearningPath {
  title: string;
  description: string;
  icon: string;
  resources: LearningResource[];
}

const learningPaths: LearningPath[] = [
  {
    title: "HTML & CSS Fundamentals",
    description: "Learn the building blocks of web development with HTML5 and modern CSS3",
    icon: "/icons/html-css.svg",
    resources: [
      { title: "HTML Tutorial", url: "https://www.w3schools.com/html/", platform: "W3Schools" },
      { title: "HTML Documentation", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", platform: "MDN" },
      { title: "CSS Tutorial", url: "https://www.w3schools.com/css/", platform: "W3Schools" },
      { title: "CSS Documentation", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", platform: "MDN" }
    ]
  },
  {
    title: "JavaScript Essentials",
    description: "Master JavaScript programming and DOM manipulation",
    icon: "/icons/javascript.svg",
    resources: [
      { title: "JavaScript Course", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/", platform: "freeCodeCamp" },
      { title: "JavaScript Documentation", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", platform: "MDN" }
    ]
  },
  {
    title: "Frontend Frameworks",
    description: "Build modern web applications with React and Next.js",
    icon: "/icons/react.svg",
    resources: [
      { title: "React Documentation", url: "https://react.dev/", platform: "React" },
      { title: "Next.js Documentation", url: "https://nextjs.org/docs", platform: "Next.js" },
      { title: "React Course", url: "https://www.freecodecamp.org/learn/front-end-development-libraries/#react", platform: "freeCodeCamp" }
    ]
  },
  {
    title: "Backend Development",
    description: "Learn server-side programming with Node.js and Express",
    icon: "/icons/nodejs.svg",
    resources: [
      { title: "Node.js Documentation", url: "https://nodejs.org/en/docs/", platform: "Node.js" },
      { title: "Node.js Tutorial", url: "https://www.w3schools.com/nodejs/", platform: "W3Schools" }
    ]
  }
];

export default function WebDeveloperPage() {
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
          Become a Web Developer
          <span className="block text-blue-600">Your Learning Roadmap</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
          Start your journey to becoming a professional web developer. Follow our structured 
          learning path, built with free and open-source resources from the best platforms.
        </p>
      </motion.div>

      {/* Learning Paths Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 mr-4">
                    <Image
                      src={path.icon}
                      alt={path.title}
                      width={48}
                      height={48}
                      className="dark:invert"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {path.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {path.description}
                </p>
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Learning Resources:
                  </h4>
                  {path.resources.map((resource) => (
                    <a
                      key={resource.url}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                      {resource.title} - {resource.platform}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-blue-600 rounded-2xl p-8 sm:p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of learners and start your journey to becoming a professional web developer.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-600 transition-colors"
          >
            Create Free Account
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 