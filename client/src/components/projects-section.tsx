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
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2830&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Recipe Scanner App – Gourmand",
    problem: "Recipes on paper or screenshots are unorganized and hard to search.",
    solution: "AI image-to-text extraction with food-type tagging and time-based filters.",
    impact: "Digitized over 500 family recipes with 95% accuracy.",
    techStack: ["Tesseract.js", "React", "Express"],
    imageUrl: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=2874&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "EMS – Expense Management System",
    problem: "Tracking expenses is tedious and often gets neglected, especially for busy users.",
    solution: "EMS allows both manual and voice-command expense input with a clean, modern interface and smart scheduling.",
    impact: "Helped early testers track spending 2x faster and improved financial awareness.",
    techStack: ["React", "TypeScript", "TailwindCSS", "Web Speech API", "LocalStorage"],
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2942&auto=format&fit=crop"
  },
  {
    id: 4,
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
    <div id="projects">
      <ProjectCarousel projects={projects} />
    </div>
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
