"use client"
import React, { useState, useEffect, useRef } from 'react';

export default function Counter({ MaxNumber }: { MaxNumber: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(true);

  const isElementVisible = useIsElementVisible(elementRef);

  useEffect(() => {
    const MaxNum = parseInt(MaxNumber);

    const counter = (minimum: number, maxNumber: number) => {
      if (start) {
        setStart(false); // Prevent further counting
        // Dynamically compute step so it ticks ~40 times to complete
        const step = Math.max(1, Math.ceil(maxNumber / 45));
        
        const timer = setInterval(() => {
          minimum = Math.min(maxNumber, minimum + step);
          setCount(minimum);
          if (minimum >= maxNumber) {
            clearInterval(timer);
          }
        }, 20);
      }
    };

    if (!isNaN(MaxNum) && isElementVisible) {
      counter(0, MaxNum);
    }
  }, [MaxNumber, isElementVisible, start]);

  return (
    <div ref={elementRef} id="list-item" className="font-semibold tabular-nums">
      {count.toLocaleString()}
    </div>
  );
}

export const useIsElementVisible = (target: React.RefObject<HTMLElement | null>) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentTarget = target.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [target]);

  return isVisible;
};
