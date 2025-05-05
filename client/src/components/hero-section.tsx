import { AnimatedText } from "@/components/ui/animated-text";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import { ProjectsSection } from "@/components/projects-section";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute top-20 md:top-24 right-6 md:right-12 z-40">
        <ThemeToggle className="scale-125" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 items-center">
          <motion.div 
            className="flex flex-col space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-bold font-space tracking-tight">
                Ray Thompson
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-ibm leading-relaxed">
                "I'm a native AI problem solver and I build human-first digital products."
              </p>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold font-space tracking-tight leading-tight">
              Designing tomorrow's products — <span className="gradient-text">today.</span>
            </h2>
            
            <div className="text-xl md:text-2xl font-ibm">
              Blending <AnimatedText phrases={["AI tools", "human needs", "product impact"]} /> with empathy to deliver results.
            </div>
            
            <div className="flex space-x-5 pt-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200"
              >
                <i className="ri-linkedin-box-fill text-2xl"></i>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200"
              >
                <i className="ri-github-fill text-2xl"></i>
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="font-space font-medium">Thoughtful. Structured. Future-facing.</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
                <span className="h-2 w-2 rounded-full bg-green-400 mr-2"></span>
                <span>Available for projects</span>
              </span>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold font-space mb-2">Top Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Showcasing my work solving real-world problems with AI.</p>
            
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
              <ProjectsSection />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
