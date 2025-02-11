'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "@/components/Navbar";

export default function Home() {
  const careerPaths = [
    {
      title: "Frontend Development",
      icon: "/images/home/web-developer.png",
      description: "Master React, Vue, and modern web technologies",
      path: "/careers/frontend"
    },
    {
      title: "Backend Development",
      icon: "/images/home/backend.png",
      description: "Learn Node.js, Python, and server-side engineering",
      path: "/careers/backend"
    },
    {
      title: "Full Stack Development",
      icon: "/images/home/developer.png",
      description: "Become a complete web developer",
      path: "/careers/fullstack"
    },
    {
      title: "AI/ML Engineering",
      icon: "/images/home/machine-learning.png",
      description: "Dive into artificial intelligence and machine learning",
      path: "/careers/ai"
    }
  ];

  const features = [
    {
      title: "Structured Learning Paths",
      icon: "/images/home/careergoals.png",
      description: "Follow carefully designed career paths to achieve your goals"
    },
    {
      title: "Free YouTube Videos",
      icon: "/images/home/youtube.png",
      description: "Access carefully curated YouTube tutorials and learning materials covering web development, programming, and software engineering"
    },
    {
      title: "Free Documentation",
      icon: "/images/home/contract.png",
      description: "Access valuable documentation relevant to software engineering"
    }
  ];

  const testimonials = [
    {
      name: "Janindu Amaraweera",
      role: "Frontend Developer",
      image: "/images/home/janindua.jpg",
      text: "The structured learning path and comprehensive documentation at Coding Lanka were instrumental in helping me master backend development. The community support is amazing!"
    },
    {
      name: "Minindu Thiranjaya",
      role: "Backend Developer",
      image: "/images/home/minindu.png",
      text: "Coding Lanka helped me transition from a beginner to a professional developer in just few months!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Learn to Code with
            <span className="block text-blue-600">Coding Lanka</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Start your journey to becoming a professional developer with our structured 
            learning paths and comprehensive resources.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/career-paths"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/documentation"
              className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
            >
              Browse Documentation
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="mt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Why Choose Coding Lanka?
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 mb-6">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={64}
                    height={64}
                    className="dark:invert"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Paths Section */}
      <div className="mt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Choose Your Career Path
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {careerPaths.map((career) => (
            <Link 
              href={career.path} 
              key={career.title}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 mb-6">
                  <Image
                    src={career.icon}
                    alt={career.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {career.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {career.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex flex-col items-center text-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-6"
                />
                <p className="text-lg text-gray-600 dark:text-gray-300 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {testimonial.name}
                </h4>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-blue-600 rounded-2xl p-8 sm:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Join thousands of students who have already started their journey to becoming professional developers.
            </p>
            <Link 
              href="/signup"
              className="inline-block px-8 py-4 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
