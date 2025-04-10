
import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projectsData';

const ProjectsSection = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section id="projects" className="section bg-secondary/10">
      <div className="container mx-auto">
        <h2 className="section-title">My Projects</h2>
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
          Here are some of my recent projects. Each one was carefully crafted to solve specific problems and demonstrate my skills.
        </p>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-secondary/30 p-1 rounded-full">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all' ? 'bg-primary text-white' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'featured' ? 'bg-primary text-white' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setFilter('featured')}
            >
              Featured
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id}
              className="project-card bg-secondary/40 border-secondary overflow-hidden group"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-white/90 text-black hover:bg-white">
                          <ExternalLink size={16} className="mr-2" /> Live Demo
                        </Button>
                      </a>
                    )}
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="border-white/80 text-white hover:bg-white/20">
                          <Github size={16} className="mr-2" /> Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.featured && (
                  <Badge className="absolute top-3 right-3 z-20 bg-primary">Featured</Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2 flex items-center">
                  {project.title}
                  <ArrowUpRight size={16} className="ml-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-secondary/70 text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary" className="bg-secondary/70 text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Github size={18} className="mr-2" />
              View More on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
