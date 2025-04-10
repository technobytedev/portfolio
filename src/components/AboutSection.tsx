
import React from 'react';
import { Code, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section relative">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* Image with decorative elements */}
            <div className="relative aspect-square max-w-md mx-auto md:ml-0 overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/ced2.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-grid bg-secondary rounded-xl"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-xl"></div>
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-gray-300">
              Hi, Cedric Isubol, a passionate <span className="text-primary font-semibold">Full-Stack Developer</span> <br />
             With expertise in building clean, efficient, and scalable web solutions using Laravel, Vue.js, Nuxt, Node.js, and Express.js.

            </p>
            <p className="text-lg text-gray-300">
            I have a solid foundation in PHP, JavaScript, HTML, and CSS, and I enjoy crafting responsive interfaces with Tailwind CSS and jQuery, as well as developing robust backends with MySQL and RESTful APIs. I take pride in writing maintainable code and staying current in the ever-evolving tech world.

            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <Card className="bg-secondary/50 border-secondary hover:bg-secondary/80 transition-colors duration-300 cursor-pointer group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Code size={28} className="text-primary mb-3 group-hover:text-white transition-colors duration-300" />
                  <h3 className="font-montserrat font-bold mb-1">Development</h3>
                  <p className="text-sm text-gray-400">5+ Years Experience</p>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/50 border-secondary hover:bg-secondary/80 transition-colors duration-300 cursor-pointer group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Briefcase size={28} className="text-primary mb-3 group-hover:text-white transition-colors duration-300" />
                  <h3 className="font-montserrat font-bold mb-1">Projects</h3>
                  <p className="text-sm text-gray-400">30+ Completed</p>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/50 border-secondary hover:bg-secondary/80 transition-colors duration-300 cursor-pointer group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <GraduationCap size={28} className="text-primary mb-3 group-hover:text-white transition-colors duration-300" />
                  <h3 className="font-montserrat font-bold mb-1">Education</h3>
                  <p className="text-sm text-gray-400">BS Information System</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
