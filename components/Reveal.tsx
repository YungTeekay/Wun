"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * useReveal — IntersectionObserver hook that flips `isVisible` true the first
 * time the element scrolls ~15% into view. Reveal animation itself is CSS
 * (.reveal / .is-visible), which respects prefers-reduced-motion.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If the browser can't observe or the user prefers reduced motion, show immediately.
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsVisible(true);
      return;
    }

    // If the element is already in or above the viewport at mount (e.g. the
    // page loaded scrolled to an anchor), reveal it straight away — it may
    // never fire an intersection, which would leave it stuck invisible.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** delay in ms, staggers grouped reveals */
  delay?: number;
  id?: string;
};

/** Drop-in wrapper that fades + translates its children up on scroll. */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  id,
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
