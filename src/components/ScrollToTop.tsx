import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component
 * Scrolls to top of page on route change
 * Follows UX best practices for navigation
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Don't scroll if there's a hash (internal link like #programs)
    if (hash) {
      return;
    }

    // Scroll to top smoothly on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
