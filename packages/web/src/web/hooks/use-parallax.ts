import { useEffect, useRef } from 'react';

export function useParallax() {
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => {
      frame = 0;
      const image = ref.current;
      if (!image) return;
      if (media.matches) { image.style.transform = ''; return; }
      const parent = image.parentElement?.getBoundingClientRect();
      if (parent && parent.bottom > 0 && parent.top < window.innerHeight) {
        const movement = Math.max(-42, Math.min(42, -parent.top * .1));
        image.style.transform = `translate3d(0, ${movement}px, 0) scale(1.12)`;
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    media.addEventListener('change', schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); media.removeEventListener('change', schedule); };
  }, []);
  return ref;
}