import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from "@/components/ui/carousel";
import { useCarousel } from "@/components/ui/carousel";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "MARS – Medication Automation Reminder System",
    problem: "Managing medications is complex for seniors, caregivers, and even pets.",
    solution: "MARS offers voice-input scheduling, multi-profile support, and smart reminders.",
    impact: "Reduced missed doses by 50% in pilot tests.",
    techStack: ["React Native", "Firebase", "Voice Commands", "Twilio"],
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Recipe Scanner App – Gourmand",
    problem: "Recipes on paper or screenshots are unorganized and hard to search.",
    solution: "AI image-to-text extraction with food-type tagging and time-based filters.",
    impact: "Digitized over 500 family recipes with 95% accuracy.",
    techStack: ["Tesseract.js", "React", "Express"],
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "AI Workflow Automation – Inbox to Action",
    problem: "High-volume digital workflows waste time and create bottlenecks.",
    solution: "AI orchestrator auto-triages Slack, Gmail, and LinkedIn messages into a single dashboard.",
    impact: "Saved 5+ hours/week across test users.",
    techStack: ["OpenAI API", "Node.js", "Zapier"],
    imageUrl: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?q=80&w=2880&auto=format&fit=crop"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold font-space mb-2">Top Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">Showcasing my work solving real-world problems with AI.</p>
        </motion.div>
        
        <ProjectCarousel projects={projects} />
      </div>
    </section>
  );
}

function ProjectCarousel({ projects }: { projects: Project[] }) {
  return (
    <Carousel opts={{ loop: true }}>
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          <CarouselPrevButton />
          <CarouselNextButton />
        </div>
        <CarouselDots />
      </div>
      
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.id}>
            <ProjectCard project={project} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

function CarouselPrevButton() {
  const { scrollPrev, canScrollPrev } = useCarousel();
  
  return (
    <button 
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50"
      aria-label="Previous project"
    >
      <i className="ri-arrow-left-s-line text-xl"></i>
    </button>
  );
}

function CarouselNextButton() {
  const { scrollNext, canScrollNext } = useCarousel();
  
  return (
    <button 
      onClick={scrollNext}
      disabled={!canScrollNext}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50"
      aria-label="Next project"
    >
      <i className="ri-arrow-right-s-line text-xl"></i>
    </button>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold font-space mb-4">{project.title}</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-lg font-medium font-space text-gray-700 dark:text-gray-300">Problem</h4>
                  <p className="text-gray-600 dark:text-gray-400">{project.problem}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium font-space text-gray-700 dark:text-gray-300">Solution</h4>
                  <p className="text-gray-600 dark:text-gray-400">{project.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium font-space text-gray-700 dark:text-gray-300">Impact</h4>
                  <p className="text-gray-600 dark:text-gray-400">{project.impact}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <a href="#" className="inline-flex items-center text-primary font-medium">
              View Project Details
              <i className="ri-arrow-right-line ml-2"></i>
            </a>
          </div>
          
          <div className="md:h-auto">
            <img 
              src={project.imageUrl} 
              alt={`${project.title} screenshot`} 
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
