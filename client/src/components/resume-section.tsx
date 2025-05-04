import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
}

interface Language {
  name: string;
  level: string;
  proficiency: number;
}

const experiences: Experience[] = [
  {
    title: "AI Product Developer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    description: "Led development of AI-powered workflow automation tools that improved efficiency by 35% for enterprise clients."
  },
  {
    title: "Software Engineer",
    company: "NextGen Systems",
    period: "2019 - 2022",
    description: "Developed front-end applications using React and integrated machine learning models for predictive analytics."
  }
];

const education: Education[] = [
  {
    degree: "M.S. in Computer Science",
    institution: "Stanford University",
    period: "2017 - 2019",
    description: "Specialized in Artificial Intelligence and Machine Learning."
  },
  {
    degree: "B.S. in Computer Engineering",
    institution: "MIT",
    period: "2013 - 2017",
    description: "Minored in Human-Computer Interaction."
  }
];

const skills = ["React.js", "Node.js", "Python", "Large Language Models", "Firebase", "UX Design", "UI Development"];

const certifications: Certification[] = [
  {
    name: "AWS Machine Learning Specialty",
    issuer: "Amazon Web Services",
    year: "2023"
  },
  {
    name: "Google Professional ML Engineer",
    issuer: "Google Cloud",
    year: "2022"
  }
];

const languages: Language[] = [
  {
    name: "English",
    level: "Native",
    proficiency: 100
  },
  {
    name: "Spanish",
    level: "Fluent",
    proficiency: 85
  }
];

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold font-space mb-2">Resume & Work History</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">My professional journey and experience.</p>
        </motion.div>
        
        <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-bold font-space">Ray Thompson</h3>
                <p className="text-gray-600 dark:text-gray-400">AI Native Problem Solver</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <i className="ri-download-line mr-2"></i>
                Download PDF
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-2">
                {/* Work Experience */}
                <div className="mb-10">
                  <h4 className="text-lg font-bold font-space mb-4 flex items-center">
                    <i className="ri-briefcase-line mr-2 text-primary"></i>
                    Work Experience
                  </h4>
                  
                  <div className="space-y-8">
                    {experiences.map((exp, index) => (
                      <div key={index} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                          <h5 className="text-md font-bold">{exp.title}</h5>
                          <span className="text-gray-500 dark:text-gray-400 text-sm">{exp.period}</span>
                        </div>
                        <h6 className="text-primary font-medium mb-2">{exp.company}</h6>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Education */}
                <div>
                  <h4 className="text-lg font-bold font-space mb-4 flex items-center">
                    <i className="ri-graduation-cap-line mr-2 text-primary"></i>
                    Education
                  </h4>
                  
                  <div className="space-y-8">
                    {education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                          <h5 className="text-md font-bold">{edu.degree}</h5>
                          <span className="text-gray-500 dark:text-gray-400 text-sm">{edu.period}</span>
                        </div>
                        <h6 className="text-primary font-medium mb-2">{edu.institution}</h6>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right Column - Skills and Certifications */}
              <div>
                {/* Skills Preview */}
                <div className="mb-10">
                  <h4 className="text-lg font-bold font-space mb-4 flex items-center">
                    <i className="ri-tools-line mr-2 text-primary"></i>
                    Key Skills
                  </h4>
                  
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Certifications */}
                <div className="mb-10">
                  <h4 className="text-lg font-bold font-space mb-4 flex items-center">
                    <i className="ri-award-line mr-2 text-primary"></i>
                    Certifications
                  </h4>
                  
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index}>
                        <h5 className="text-md font-medium">{cert.name}</h5>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{cert.issuer} - {cert.year}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Languages */}
                <div>
                  <h4 className="text-lg font-bold font-space mb-4 flex items-center">
                    <i className="ri-translate-2 mr-2 text-primary"></i>
                    Languages
                  </h4>
                  
                  <div className="space-y-4">
                    {languages.map((lang, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-md font-medium">{lang.name}</span>
                          <span className="text-gray-500 dark:text-gray-400 text-sm">{lang.level}</span>
                        </div>
                        <Progress value={lang.proficiency} className="h-1 bg-gray-200 dark:bg-gray-700" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
