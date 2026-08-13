import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  
  const mouseCoords = useRef({ x: 0, y: 0 });
  const cursorCoords = useRef({ x: 0, y: 0 });
  const glowCoords = useRef({ x: 0, y: 0 });
  
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseCoords.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      // Expand cursor if hovering over buttons, links, clickable widgets, or marked elements
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[data-cursor="pointer"]') ||
        target.closest('[data-magnetic]');
        
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    // Smooth animation loop using LERP (Linear Interpolation)
    let animationFrameId: number;
    
    const updatePosition = () => {
      // Direct follow for cursor dot (or slight drag)
      cursorCoords.current.x += (mouseCoords.current.x - cursorCoords.current.x) * 0.25;
      cursorCoords.current.y += (mouseCoords.current.y - cursorCoords.current.y) * 0.25;

      // Heavy drag/trailing glow for outer ring
      glowCoords.current.x += (mouseCoords.current.x - glowCoords.current.x) * 0.08;
      glowCoords.current.y += (mouseCoords.current.y - glowCoords.current.y) * 0.08;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorCoords.current.x}px`;
        cursorRef.current.style.top = `${cursorCoords.current.y}px`;
      }
      if (glowRef.current) {
        glowRef.current.style.left = `${glowCoords.current.x}px`;
        glowRef.current.style.top = `${glowCoords.current.y}px`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div 
        ref={cursorRef} 
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        aria-hidden="true"
      />
      <div 
        ref={glowRef} 
        className={`custom-cursor-glow ${isHovering ? 'hovering' : ''}`}
        aria-hidden="true"
      />
    </>
  );
}
