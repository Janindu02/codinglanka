'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Base classes that will be consistent between server and client
  const navClasses = "fixed top-0 w-full z-50 transition-all duration-300";
  const bgClasses = isMounted && isScrolled 
    ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md" 
    : "bg-transparent";

  return (
    <nav className={`${navClasses} ${bgClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-10 h-10">
                <Image 
                  src="/images/feature-icons/codinglankalogo.png.png" 
                  alt="Coding Lanka" 
                  width={40} 
                  height={40} 
                  className="rounded-full"
                  priority
                  sizes="40px"
                />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                Coding Lanka
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/career-paths" 
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Career Paths
            </Link>
            <Link 
              href="/documentation" 
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Documentation
            </Link>
            <Link 
              href="/certifications" 
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Certifications
            </Link>
            <Link 
              href="/about" 
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/career-paths"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button - Only rendered on client side */}
          {isMounted && (
            <div className="md:hidden">
              <button 
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200"
                aria-label="Main menu"
              >
                <svg 
                  className="h-6 w-6" 
                  stroke="currentColor" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
} 