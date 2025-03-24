'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface DocSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  resources: {
    name: string;
    url: string;
    description: string;
  }[];
}

const documentationSections: DocSection[] = [
  {
    id: "programming-languages",
    title: "Programming Languages",
    description: "Core programming languages for software development",
    icon: "/icons/code.svg",
    resources: [
      {
        name: "Python Documentation",
        url: "https://docs.python.org/3/",
        description: "Official Python language documentation"
      },
      {
        name: "JavaScript MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        description: "Mozilla Developer Network JavaScript guides"
      },
      {
        name: "Java Documentation",
        url: "https://docs.oracle.com/en/java/",
        description: "Oracle's Java programming documentation"
      }
    ]
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Frontend and backend web development resources",
    icon: "/icons/web.svg",
    resources: [
      {
        name: "MDN Web Docs",
        url: "https://developer.mozilla.org/",
        description: "Comprehensive web development documentation"
      },
      {
        name: "React Documentation",
        url: "https://react.dev",
        description: "Official React.js documentation"
      },
      {
        name: "Next.js Documentation",
        url: "https://nextjs.org/docs",
        description: "Learn Next.js features and API"
      }
    ]
  },
  {
    id: "databases",
    title: "Databases & SQL",
    description: "Database management and SQL resources",
    icon: "/icons/database.svg",
    resources: [
      {
        name: "PostgreSQL Documentation",
        url: "https://www.postgresql.org/docs/",
        description: "Official PostgreSQL documentation"
      },
      {
        name: "MongoDB Manual",
        url: "https://docs.mongodb.com/manual/",
        description: "MongoDB documentation and tutorials"
      }
    ]
  },
  {
    id: "software-engineering",
    title: "Software Engineering Principles",
    description: "Best practices and design patterns",
    icon: "/icons/architecture.svg",
    resources: [
      {
        name: "Refactoring Guru",
        url: "https://refactoring.guru/",
        description: "Design patterns and refactoring techniques"
      },
      {
        name: "Clean Code",
        url: "https://clean-code-developer.com/",
        description: "Clean code principles and practices"
      }
    ]
  }
  // Add more sections as needed
];

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState(documentationSections[0].id);

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
          Documentation
          <span className="block text-blue-600">Resources & Guides</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
          Access comprehensive documentation and resources for various programming languages,
          frameworks, and technologies. Everything you need to build great software.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-64 flex-shrink-0"
          >
            <nav className="sticky top-24 space-y-1">
              {documentationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1"
          >
            {documentationSections.map((section) => (
              <div
                key={section.id}
                className={`space-y-6 ${activeSection === section.id ? 'block' : 'hidden'}`}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 mr-4">
                      <Image
                        src={section.icon}
                        alt={section.title}
                        width={48}
                        height={48}
                        className="dark:invert"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {section.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {section.resources.map((resource) => (
                      <a
                        key={resource.url}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          {resource.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                          {resource.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 