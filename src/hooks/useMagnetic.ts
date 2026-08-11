import { useEffect, useRef } from 'react';

export default function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - elementCenterX;
      const distanceY = e.clientY - elementCenterY;
      
      // Check if mouse is within a active radius (e.g., 80px)
      const radius = 80;
      const distance = Math.hypot(distanceX, distanceY);
      
      if (distance < radius) {
        // Apply magnetic pull
        const pullX = distanceX * strength;
        const pullY = distanceY * strength;
        element.style.transform = `translate(${pullX}px, ${pullY}px) scale(1.02)`;
        element.style.transition = 'transform 0.1s ease-out';
      } else {
        // Return to normal
        element.style.transform = 'translate(0px, 0px) scale(1)';
        element.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0px, 0px) scale(1)';
      element.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    };

    window.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return ref;
}
