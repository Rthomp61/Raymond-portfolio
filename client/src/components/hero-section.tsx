import { AnimatedText } from "@/components/ui/animated-text";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute top-20 md:top-24 right-6 md:right-12 z-40">
        <ThemeToggle className="scale-125" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="md:col-span-7 flex flex-col space-y-8"
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
          
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform transition-all hover:scale-[1.02] duration-300">
              <img 
                src="https://images.unsplash.com/photo-1673468196076-dd0d11cac2e8?q=80&w=3270&auto=format&fit=crop" 
                alt="Profile" 
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <motion.a 
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="animate-bounce p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <i className="ri-arrow-down-s-line text-xl text-primary"></i>
        </motion.a>
      </div>
    </section>
  );
}
