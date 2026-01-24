import { useEffect, useRef, useState } from 'react';

interface Options {
  contactId?: string;
  footerSelector?: string;
  contactRootMargin?: string;
  nearFooterDistance?: number; // in px
  scrollDebounce?: number; // in ms
  scrolledEnoughThreshold?: number; // in px
}

export function useHideOnSections(options: Options = {}) {
  const {
    contactId = 'contact-section',
    footerSelector = 'footer',
    contactRootMargin = '0px',
    nearFooterDistance = 300,
    scrollDebounce = 180,
    scrolledEnoughThreshold = 300,
  } = options;

  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrolledEnough, setScrolledEnough] = useState(false);

  const scrollTimeout = useRef<number | null>(null);

  // Observe contact section and footer
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const contact = document.getElementById(contactId);
    const footer = document.querySelector(footerSelector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as Element;
          if ((target as HTMLElement).id === contactId) {
            setIsContactVisible(entry.isIntersecting);
          } else if (target && target.tagName.toLowerCase() === 'footer') {
            setIsFooterVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0, rootMargin: contactRootMargin }
    );

    if (contact) observer.observe(contact);
    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, [contactId, footerSelector, contactRootMargin]);

  // Track distance from bottom and scroll activity
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const onScroll = () => {
      if (scrollTimeout.current) {
        window.clearTimeout(scrollTimeout.current);
      }

      // distance from bottom (px)
      const distanceFromBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
      setIsNearFooter(distanceFromBottom < nearFooterDistance);

      setIsScrolling(true);
      scrollTimeout.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, scrollDebounce);

      setScrolledEnough(window.scrollY > scrolledEnoughThreshold);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
    };
  }, [nearFooterDistance, scrollDebounce, scrolledEnoughThreshold]);

  const isHiddenAreaVisible = isContactVisible || isFooterVisible || isNearFooter;

  return {
    isHiddenAreaVisible,
    isContactVisible,
    isFooterVisible,
    isNearFooter,
    isScrolling,
    scrolledEnough,
  } as const;
}
