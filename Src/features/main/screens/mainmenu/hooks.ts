import { useEffect, useRef, useState } from 'react';
import PagerView from 'react-native-pager-view';
import images from '@/assets/images';

export function useImageSlider() {
  const pagerRef = useRef<PagerView>(null);
  const [page, setPage] = useState(0);

  const slides = [
    images.MainMenu,
    (images as any).MainMenu2 || images.MainMenu,
    (images as any).MainMenu3 || images.MainMenu,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (page + 1) % slides.length;
      if (pagerRef.current) {
        try {
          pagerRef.current.setPage(next);
        } catch {}
      }
      setPage(next);
    }, 3500);
    return () => clearInterval(interval);
  }, [page, slides.length]);

  return { pagerRef, page, setPage, slides };
}