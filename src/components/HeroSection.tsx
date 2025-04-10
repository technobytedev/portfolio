
import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Simple animation for title typing effect
    const title = titleRef.current;
    if (!title) return;
    
    title.style.opacity = '1';
    
    // Make each child animate in sequence
    const children = Array.from(title.children);
    children.forEach((child, index) => {
      setTimeout(() => {
        (child as HTMLElement).style.opacity = '1';
        (child as HTMLElement).style.transform = 'translateY(0)';
      }, 300 + index * 150);
    });
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0"></div>
      
      {/* Social links */}
      <div className="fixed left-6 bottom-0 flex flex-col gap-6 items-center z-20 md:block hidden">
        <a 
          href="https://github.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href="mailto:email@example.com" 
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
        <div className="h-24 w-px bg-gray-700 mt-6"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center md:text-left relative animate-fade-in">
        <p className="text-primary font-medium mb-4 tracking-wider">HELLO, I'M</p>
        
        <h1 
          ref={titleRef} 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 transition-opacity duration-500" 
          style={{ lineHeight: 1.2 }}
        >
          <span className="block opacity-0 transform translate-y-4 transition-all duration-500 delay-300">
            Cedric <span className="text-primary">Isubol</span>
          </span>
          <span className="block opacity-0 transform translate-y-4 transition-all duration-500 delay-500">
            <span className="text-gradient">Fullstack Developer</span>
          </span>
        </h1>
        
        <p className="text-gray-400 max-w-xl text-lg mb-8">
          I build exceptional and accessible digital experiences for the web.
          Focused on both backend and creating responsive, user-friendly interfaces with modern technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8"
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 font-semibold px-8"
          >
            Download CV
          </Button>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white animate-float cursor-pointer"
        aria-label="Scroll to About section"
      >
        <ArrowDownCircle size={32} />
      </a>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;
