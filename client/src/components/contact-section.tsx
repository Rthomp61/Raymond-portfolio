import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Implement the actual form submission logic here
    alert("Thanks for your message! I'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  
  return (
    <section id="contact" className="py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold font-space mb-2">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">Have a project in mind? Let's discuss how I can help.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold font-space mb-6">Send a Message</h3>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-bold font-space mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <i className="ri-mail-line text-primary mt-1 mr-4 text-xl"></i>
                      <div>
                        <h4 className="font-medium mb-1">Email</h4>
                        <a 
                          href="mailto:ray@example.com" 
                          className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                        >
                          ray@example.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <i className="ri-map-pin-line text-primary mt-1 mr-4 text-xl"></i>
                      <div>
                        <h4 className="font-medium mb-1">Location</h4>
                        <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <i className="ri-user-voice-line text-primary mt-1 mr-4 text-xl"></i>
                      <div>
                        <h4 className="font-medium mb-1">Social Profiles</h4>
                        <div className="flex space-x-4 mt-2">
                          <a 
                            href="https://linkedin.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                          >
                            <i className="ri-linkedin-box-fill text-xl"></i>
                          </a>
                          <a 
                            href="https://github.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                          >
                            <i className="ri-github-fill text-xl"></i>
                          </a>
                          <a 
                            href="https://twitter.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                          >
                            <i className="ri-twitter-fill text-xl"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-bold font-space mb-6">Available For</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <i className="ri-check-line text-primary"></i>
                      <span>AI Integration Projects</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <i className="ri-check-line text-primary"></i>
                      <span>Product Design Consulting</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <i className="ri-check-line text-primary"></i>
                      <span>Technical Advisory Roles</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <i className="ri-check-line text-primary"></i>
                      <span>Speaking Engagements</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
