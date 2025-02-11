import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image 
                src="/images/feature-icons/codinglankalogo.png.png" 
                alt="Coding Lanka" 
                width={40} 
                height={40} 
                className="rounded-full"
                priority
              />
              <span className="ml-2 text-xl font-bold">Coding Lanka</span>
            </Link>
            <p className="text-gray-400">
              Empowering the next generation of developers in Sri Lanka through quality education and resources.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/career-paths" className="text-gray-400 hover:text-white transition-colors">Career Paths</Link></li>
              <li><Link href="/documentation" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/documentation" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/certifications" className="text-gray-400 hover:text-white transition-colors">Certifications</Link></li>
              <li><Link href="/community" className="text-gray-400 hover:text-white transition-colors">Community</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: support@codinglanka.com</li>
              <li className="text-gray-400">Location: Colombo, Sri Lanka</li>
              <li className="flex space-x-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} className="invert" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} className="invert" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} className="invert" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Coding Lanka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 