import Image from "next/image";
import Link from "next/link";

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Welcome to</span>
            <span className="block text-blue-600">Coding Lanka</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Your journey to becoming a professional developer starts here. Choose your path and start learning today.
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                className="block w-full px-4 py-3 rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search for courses, tutorials..."
              />
            </div>
          </div>
        </div>

        {/* Career Paths Grid */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
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
      </main>
    </div>
  );
}
