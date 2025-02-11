import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  const careerPaths = [
    {
      title: "Frontend Development",
      icon: "/icons/frontend.svg",
      description: "Master React, Vue, and modern web technologies",
      path: "/careers/frontend"
    },
    {
      title: "Backend Development",
      icon: "/icons/backend.svg",
      description: "Learn Node.js, Python, and server-side engineering",
      path: "/careers/backend"
    },
    {
      title: "Full Stack Development",
      icon: "/icons/fullstack.svg",
      description: "Become a complete web developer",
      path: "/careers/fullstack"
    },
    {
      title: "AI/ML Engineering",
      icon: "/icons/ai.svg",
      description: "Dive into artificial intelligence and machine learning",
      path: "/careers/ai"
    }
  ];

  const features = [
    {
      title: "Structured Learning Paths",
      icon: "/icons/path.svg",
      description: "Follow carefully designed career paths to achieve your goals"
    },
    {
      title: "Free Resources",
      icon: "/icons/resources.svg",
      description: "Access curated YouTube tutorials and learning materials"
    },
    {
      title: "Progress Tracking",
      icon: "/icons/progress.svg",
      description: "Track your learning journey and earn certificates"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      image: "/testimonials/sarah.jpg",
      text: "Coding Lanka helped me transition from a beginner to a professional developer in just 6 months!"
    },
    // Add more testimonials...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center pt-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Master Coding with</span>
            <span className="block text-blue-600">Coding Lanka</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Your journey to becoming a professional developer starts here. Learn from industry experts and join our community of developers.
          </p>
          <div className="mt-8 flex justify-center">
            <Link 
              href="/get-started"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
            >
              Start Learning for Free
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Why Choose Coding Lanka?
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
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
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Paths Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Choose Your Career Path
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {careerPaths.map((career) => (
              <Link 
                href={career.path} 
                key={career.title}
                className="group relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 mb-4">
                    <Image
                      src={career.icon}
                      alt={career.title}
                      width={48}
                      height={48}
                      className="dark:invert"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {career.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {career.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full mb-4"
                  />
                  <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{testimonial.text}"</p>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 bg-blue-600 rounded-2xl p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have already started their journey to becoming professional developers.
            </p>
            <Link 
              href="/signup"
              className="inline-block px-8 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-600 transition-colors"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-32 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">Coding Lanka</h3>
              <p className="text-sm">Empowering the next generation of developers in Sri Lanka</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/career-paths" className="hover:text-white">Career Paths</Link></li>
                <li><Link href="/resources" className="hover:text-white">Resources</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white"><span className="sr-only">Facebook</span>FB Icon</a>
                <a href="#" className="hover:text-white"><span className="sr-only">Twitter</span>TW Icon</a>
                <a href="#" className="hover:text-white"><span className="sr-only">LinkedIn</span>LI Icon</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-md w-full"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; {new Date().getFullYear()} Coding Lanka. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
