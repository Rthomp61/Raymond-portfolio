import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Metric {
  value: string;
  description: string;
}

interface PressItem {
  source: string;
  quote: string;
  link: string;
}

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
}

const metrics: Metric[] = [
  {
    value: "35%",
    description: "Average efficiency improvement for clients implementing AI workflow solutions"
  },
  {
    value: "12K+",
    description: "Active users across developed applications"
  },
  {
    value: "50%",
    description: "Reduction in missed medication doses with MARS app"
  }
];

const pressItems: PressItem[] = [
  {
    source: "TechCrunch",
    quote: "Ray's innovative approach to AI product design puts human needs at the center.",
    link: "#"
  },
  {
    source: "AI Innovator Award",
    quote: "Finalist for 'Best AI Healthcare Solution' for MARS app.",
    link: "#"
  },
  {
    source: "Product Hunt",
    quote: "#3 Product of the Day for Recipe Scanner App – Gourmand.",
    link: "#"
  }
];

const testimonials: Testimonial[] = [
  {
    quote: "Ray completely transformed our workflow with his AI solution. We're saving hours every week, and our team couldn't be happier.",
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechStart Inc."
  },
  {
    quote: "The MARS app has been a game-changer for our healthcare facility. Medication adherence has improved dramatically.",
    name: "Dr. Michael Lee",
    position: "Director",
    company: "Sunshine Care Home"
  },
  {
    quote: "Ray's attention to human-centered design makes his AI solutions approachable and intuitive. Highly recommended.",
    name: "Alex Chen",
    position: "Product Manager",
    company: "Future Labs"
  }
];

export function MetricsSection() {
  return (
    <section id="metrics" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold font-space mb-2">Metrics, Press & Testimonials</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">Results, recognition, and feedback from clients.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Metrics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden h-full">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold font-space mb-6 flex items-center">
                  <i className="ri-line-chart-line mr-2 text-primary"></i>
                  Impact Metrics
                </h3>
                
                <div className="space-y-8">
                  {metrics.map((metric, index) => (
                    <div key={index}>
                      <div className="text-3xl font-space font-bold mb-2">{metric.value}</div>
                      <p className="text-gray-600 dark:text-gray-400">{metric.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Press Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden h-full">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold font-space mb-6 flex items-center">
                  <i className="ri-newspaper-line mr-2 text-primary"></i>
                  Press & Recognition
                </h3>
                
                <div className="space-y-6">
                  {pressItems.map((item, index) => (
                    <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <h4 className="font-medium mb-2">{item.source}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{`"${item.quote}"`}</p>
                      <a href={item.link} className="text-primary text-sm font-medium inline-flex items-center">
                        Read Article
                        <i className="ri-external-link-line ml-1"></i>
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden h-full">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold font-space mb-6 flex items-center">
                  <i className="ri-chat-quote-line mr-2 text-primary"></i>
                  Testimonials
                </h3>
                
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg relative">
                      <div className="text-primary text-4xl absolute -top-2 left-2 opacity-20">"</div>
                      <p className="relative z-10 text-sm italic mb-4">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center mr-3">
                          <i className="ri-user-line text-gray-500 dark:text-gray-400"></i>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{testimonial.name}</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.position}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
