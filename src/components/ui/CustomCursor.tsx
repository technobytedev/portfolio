
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Only use custom cursor for desktop devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverEvents = () => {
      const handleLinkMouseEnter = () => setLinkHovered(true);
      const handleLinkMouseLeave = () => setLinkHovered(false);

      const addListenersToLinks = () => {
        const links = document.querySelectorAll('a, button, .cursor-pointer');
        links.forEach(link => {
          link.addEventListener('mouseenter', handleLinkMouseEnter);
          link.addEventListener('mouseleave', handleLinkMouseLeave);
        });
      };

      // Initial setup
      addListenersToLinks();

      // Setup a mutation observer to watch for new links
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.addedNodes.length) {
            addListenersToLinks();
          }
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        const links = document.querySelectorAll('a, button, .cursor-pointer');
        links.forEach(link => {
          link.removeEventListener('mouseenter', handleLinkMouseEnter);
          link.removeEventListener('mouseleave', handleLinkMouseLeave);
        });
        observer.disconnect();
      };
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    const cleanupLinkEvents = handleLinkHoverEvents();

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cleanupLinkEvents();
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <div 
        className="custom-cursor cursor-dot" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: clicked ? 'translate(-50%, -50%) scale(0.5)' : 'translate(-50%, -50%)'
        }}
      />
      <div 
        className="custom-cursor cursor-outline" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: linkHovered 
            ? 'translate(-50%, -50%) scale(2.5)' 
            : 'translate(-50%, -50%)'
        }}
      />
    </>
  );
};

export default CustomCursor;
