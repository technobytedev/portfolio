
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '#hero' },
  { name: 'About', path: '#about' },
  { name: 'Skills', path: '#skills' },
  { name: 'Projects', path: '#projects' },
  { name: 'Contact', path: '#contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      scrolled ? 'py-3 backdrop-blur-md bg-background/80 shadow-md' : 'py-6 bg-transparent'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-gradient cursor-pointer">
          <span className="text-white"></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group cursor-pointer"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-white focus:outline-none cursor-pointer"
          onClick={toggleNav}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center z-40 transition-all duration-300 md:hidden',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        <nav className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-xl font-medium text-gray-300 hover:text-white transition-colors duration-300"
              onClick={closeNav}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
