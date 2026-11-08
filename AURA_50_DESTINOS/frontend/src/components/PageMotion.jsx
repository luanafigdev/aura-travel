import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PageMotion() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const context = gsap.context(() => {
      const targets = document.querySelectorAll('.intro-main, .section-header, .destination-card, .value-card, .journal-copy, .two-column-head, .highlight-row, .day-card, .trip-item');
      for (const element of targets) {
        gsap.fromTo(element, { y: 30, opacity: 0 }, {
          y: 0, opacity: 1, duration: .85, ease: 'power2.out',
          scrollTrigger: { trigger: element, start: 'top 94%', once: true },
        });
      }
    });
    return () => context.revert();
  }, [pathname]);
  return null;
}
