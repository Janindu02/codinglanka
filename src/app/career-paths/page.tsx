'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface CareerPath {
  title: string;
  description: string;
  icon: string;
  path: string;
  skills: string[];
}

const careerPaths: CareerPath[] = [
  {
    title: "Web Development",
    description: "Master frontend, backend, and full-stack development",
    icon: "/icons/web-dev.svg",
    path: "/career-paths/web-developer",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js"]
  },
  {
    title: "Backend Development",
    description: "Build scalable server-side applications and APIs",
    icon: "/icons/backend.svg",
    path: "/career-paths/backend-developer",
    skills: ["Python", "Java", "Databases", "System Design"]
  },
  {
    title: "Data Science & AI",
    description: "Learn machine learning and data analysis",
    icon: "/icons/ai.svg",
    path: "/career-paths/data-science",
    skills: ["Python", "Machine Learning", "Data Analysis", "Statistics"]
  },
  {
    title: "Mobile Development",
    description: "Create apps for iOS and Android platforms",
    icon: "/icons/mobile.svg",
    path: "/career-paths/mobile-developer",
    skills: ["React Native", "Flutter", "iOS", "Android"]
  },
  {
    title: "Cloud Computing",
    description: "Master cloud platforms and DevOps practices",
    icon: "/icons/cloud.svg",
    path: "/career-paths/cloud-engineer",
    skills: ["AWS", "Azure", "Docker", "Kubernetes"]
  },
  {
    title: "Cybersecurity",
    description: "Learn to protect systems and networks",
    icon: "/icons/security.svg",
    path: "/career-paths/cybersecurity",
    skills: ["Network Security", "Cryptography", "Ethical Hacking"]
  }
];

export default function CareerPathsPage() {
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
          Choose Your Career Path
          <span className="block text-blue-600">Start Your Journey Today</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
          Explore our carefully designed learning paths and choose the career that matches 
          your interests and goals. Each path includes free resources and structured guidance.
        </p>
      </motion.div>

      {/* Career Paths Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careerPaths.map((career, index) => (
            <motion.div
              key={career.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={career.path}>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 mr-4">
                        <Image
                          src={career.icon}
                          alt={career.title}
                          width={48}
                          height={48}
                          className="dark:invert"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {career.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {career.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
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
            Not Sure Where to Start?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Take our career assessment quiz to find the perfect path for you, or talk to our 
            community members for guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/career-quiz"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors"
            >
              Take Career Quiz
            </Link>
            <Link
              href="/community"
              className="inline-block px-8 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-600 transition-colors"
            >
              Join Community
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 