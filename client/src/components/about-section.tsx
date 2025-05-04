import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold font-space mb-2">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">My background, journey, and what drives me.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=3006&auto=format&fit=crop" 
                alt="Ray Thompson" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-bold font-space mb-6">My Blueprint for Impact</h3>
                
                <div className="prose dark:prose-invert max-w-none">
                  <p className="mb-4">I'm an AI-native problem solver with a passion for human-centered design. My journey began with traditional software engineering, but I quickly saw how AI could transform the way we build products and solve problems.</p>
                  
                  <p className="mb-4">With a foundation in both technical development and product design, I create solutions that leverage cutting-edge AI while maintaining a focus on human needs and experiences.</p>
                  
                  <p className="mb-6">My mission is to design tomorrow's products today — building tools and applications that use AI to enhance human capabilities rather than replace them.</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 flex-1">
                      <div className="text-3xl font-space font-bold text-primary mb-1">5+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Years of AI development</div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 flex-1">
                      <div className="text-3xl font-space font-bold text-primary mb-1">15+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Projects delivered</div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 flex-1">
                      <div className="text-3xl font-space font-bold text-primary mb-1">3</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">AI frameworks mastered</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
