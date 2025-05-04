import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: string;
  proficiency: number;
}

interface TechStack {
  icon: string;
  name: string;
}

const aiSkills: Skill[] = [
  { name: "LLM Integration", level: "Expert", proficiency: 95 },
  { name: "Prompt Engineering", level: "Advanced", proficiency: 90 },
  { name: "Computer Vision", level: "Intermediate", proficiency: 75 }
];

const frontendSkills: Skill[] = [
  { name: "React/Next.js", level: "Expert", proficiency: 95 },
  { name: "Responsive Design", level: "Expert", proficiency: 90 },
  { name: "CSS/Tailwind", level: "Advanced", proficiency: 85 }
];

const backendSkills: Skill[] = [
  { name: "Node.js/Express", level: "Advanced", proficiency: 85 },
  { name: "Python/Django", level: "Intermediate", proficiency: 70 },
  { name: "Database Design", level: "Advanced", proficiency: 80 }
];

const designSkills: Skill[] = [
  { name: "UX Research", level: "Advanced", proficiency: 85 },
  { name: "UI Design", level: "Advanced", proficiency: 80 },
  { name: "Prototyping", level: "Expert", proficiency: 90 }
];

const techStack: TechStack[] = [
  { icon: "ri-reactjs-line", name: "React" },
  { icon: "ri-nodejs-line", name: "Node.js" },
  { icon: "ri-python-line", name: "Python" },
  { icon: "ri-database-2-line", name: "Firebase" },
  { icon: "ri-cloud-line", name: "AWS" },
  { icon: "ri-palette-line", name: "Figma" },
  { icon: "ri-robot-line", name: "OpenAI" },
  { icon: "ri-terminal-line", name: "Git" },
  { icon: "ri-test-tube-line", name: "Jest" }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold font-space mb-2">Skills & Tech Stack</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">Tools and technologies I use to bring ideas to life.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold font-space mb-6 flex items-center">
                  <i className="ri-brain-line mr-2 text-primary"></i>
                  Skills
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                  {/* Skill Category: AI Development */}
                  <div>
                    <h4 className="font-space font-medium mb-3 text-primary">AI Development</h4>
                    <div className="space-y-4">
                      {aiSkills.map((skill, i) => (
                        <div key={i}>
                          <div className="flex justify-between mb-1">
                            <span>{skill.name}</span>
                            <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}</span>
                          </div>
                          <Progress value={skill.proficiency} className="h-1 bg-gray-200 dark:bg-gray-700" />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Skill Category: Front-end */}
                  <div>
                    <h4 className="font-space font-medium mb-3 text-primary">Front-end Development</h4>
                    <div className="space-y-4">
                      {frontendSkills.map((skill, i) => (
                        <div key={i}>
                          <div className="flex justify-between mb-1">
                            <span>{skill.name}</span>
                            <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}</span>
                          </div>
                          <Progress value={skill.proficiency} className="h-1 bg-gray-200 dark:bg-gray-700" />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Skill Category: Back-end */}
                  <div>
                    <h4 className="font-space font-medium mb-3 text-primary">Back-end Development</h4>
                    <div className="space-y-4">
                      {backendSkills.map((skill, i) => (
                        <div key={i}>
                          <div className="flex justify-between mb-1">
                            <span>{skill.name}</span>
                            <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}</span>
                          </div>
                          <Progress value={skill.proficiency} className="h-1 bg-gray-200 dark:bg-gray-700" />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Skill Category: Product Design */}
                  <div>
                    <h4 className="font-space font-medium mb-3 text-primary">Product Design</h4>
                    <div className="space-y-4">
                      {designSkills.map((skill, i) => (
                        <div key={i}>
                          <div className="flex justify-between mb-1">
                            <span>{skill.name}</span>
                            <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}</span>
                          </div>
                          <Progress value={skill.proficiency} className="h-1 bg-gray-200 dark:bg-gray-700" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold font-space mb-6 flex items-center">
                  <i className="ri-stack-line mr-2 text-primary"></i>
                  Tech Stack
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {techStack.map((tech, i) => (
                    <div 
                      key={i} 
                      className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="mb-2 text-3xl text-gray-600 dark:text-gray-300">
                        <i className={tech.icon}></i>
                      </div>
                      <span className="text-sm font-medium">{tech.name}</span>
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
