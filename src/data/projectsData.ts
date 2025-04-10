
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce platforms with real-time analytics, inventory management, and order processing features.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGRhc2hib2FyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Firebase"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRhc2slMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    tags: ["React", "Redux", "Node.js", "MongoDB", "Socket.io"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    featured: true
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description: "A weather application providing real-time forecasts, location-based weather data, and interactive maps for global weather patterns.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["React", "OpenWeather API", "Leaflet", "CSS Modules"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    featured: false
  },
  {
    id: 4,
    title: "Recipe Finder",
    description: "A recipe discovery platform with advanced search functionality, personalized recommendations, and social sharing capabilities.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Spoonacular API"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    featured: false
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills with interactive elements and smooth animations.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    featured: true
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "A comprehensive fitness tracking application for workout planning, progress monitoring, and fitness goal management.",
    image: "https://images.unsplash.com/photo-1575535468632-345892291673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["React Native", "Redux", "Firebase", "Chart.js"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    featured: false
  }
];
