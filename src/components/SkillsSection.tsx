
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    skills: [
      { name: 'HTML & CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'VueJS', level: 90 },
      { name: 'Nuxt.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Responsive Design', level: 95 },
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    skills: [
      { name: 'Laravel', level: 90 },
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 90 },
      { name: 'MySQL', level: 99 },
      { name: 'Python Flask', level: 80 },
      { name: 'RESTful APIs', level: 85 },


    ]
  },
  {
    id: 'tools',
    name: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Performance Optimization', level: 90 },

    ]
  }
];

const SkillBar = ({ name, level }: Skill) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-white">{name}</span>
        <span className="text-primary font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-blue-600/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title">My Skills</h2>
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
          I've acquired a diverse set of skills over my years of experience. Here's a breakdown of my technical expertise and the technologies I work with regularly.
        </p>
        
        <Tabs defaultValue="frontend" className="max-w-4xl mx-auto">
          <TabsList className="mb-8 w-full bg-secondary/30 p-1 rounded-full">
            {skillCategories.map((category) => (
              <TabsTrigger 
                key={category.id}
                value={category.id}
                className={cn(
                  "rounded-full py-2 transition-all data-[state=active]:bg-primary data-[state=active]:text-white flex-1"
                )}
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {skillCategories.map((category) => (
            <TabsContent 
              key={category.id}
              value={category.id}
              className="animate-fade-in"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                {category.skills.map((skill, index) => (
                  <SkillBar key={index} {...skill} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {skillCategories[1].skills.map((tech) => (
            <span key={tech.name} className="skill-badge">
              {tech.name}
            </span>
          ))}
          {skillCategories[0].skills.map((tech) => (
            <span key={tech.name} className="skill-badge">
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
