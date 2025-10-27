import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Detect if device is mobile
export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

// Get reduced animation config for mobile
export const getAnimationConfig = () => {
  const mobile = isMobile();
  return {
    duration: mobile ? 0.3 : 0.6,
    delay: mobile ? 0 : 0.1,
    stagger: mobile ? 0.05 : 0.1,
  };
};
