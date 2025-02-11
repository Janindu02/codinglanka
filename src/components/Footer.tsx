'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/codinglanka',
    icon: '/icons/facebook.svg'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/codinglanka',
    icon: '/icons/twitter.svg'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/codinglanka',
    icon: '/icons/linkedin.svg'
  }
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding Section */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <div className="relative w-10 h-10">
                <Image 
                  src="/images/feature-icons/codinglankalogo.png.png" 
                  alt="Code in Lanka" 
                  width={40} 
                  height={40} 
                  className="rounded-full"
                  priority
                  sizes="40px"
                />
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold">Code in Lanka</h3>
                <p className="text-sm text-gray-400">Naming and Empowering</p>
              </div>
            </Link>
            <p className="text-gray-400 mt-4">
              Empowering the next generation of developers in Sri Lanka through quality education and resources.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/career-paths" className="text-gray-400 hover:text-white transition-colors">
                  Career Paths
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-gray-400 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="text-gray-400 hover:text-white transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-400 hover:text-white transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <p className="text-gray-400">
                <span className="block">Email: contact@codinglanka.com</span>
                <span className="block mt-1">Location: Colombo, Sri Lanka</span>
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <div className="w-6 h-6">
                      <Image
                        src={social.icon}
                        alt={social.name}
                        width={24}
                        height={24}
                        className="invert"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Code in Lanka. All Rights Reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 