'use client';

import { motion } from 'framer-motion';

export default function AISection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-24 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        How to Use AI for Software Development
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">ChatGPT for Programming</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Generate code snippets and get explanations</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Debug your code with AI assistance</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Learn new programming concepts interactively</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">AI Development Tools</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>GitHub Copilot for code suggestions</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>AI-powered code review tools</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Automated testing with AI</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
} 