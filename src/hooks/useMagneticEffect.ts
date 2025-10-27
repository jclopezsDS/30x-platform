import { useRef, useEffect } from 'react';

export const useMagneticEffect = (strength: number = 0.3) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we're in browser and not mobile
    if (typeof window === 'undefined') return;
    if (window.innerWidth < 768) return;

    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const moveX = x * strength;
      const moveY = y * strength;

      element.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0px, 0px) scale(1)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return ref;
};
