"use client"
import React, { useState, useEffect, useRef } from 'react';

export default function Counter({ MaxNumber }: { MaxNumber: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [start, setStart] = useState(true);

  const isElementVisible = useIsElementVisible(elementRef);

  useEffect(() => {
    const MaxNum = parseInt(MaxNumber);

    const counter = (minimum: number, maxNumber: number) => {
      if (start) {
        setStart(false); // Prevent further counting
        const counte = setInterval(() => {
          minimum = minimum + 500;
          setCount(minimum);
          if (minimum >= maxNumber) clearInterval(counte);
        }, 10);
      }
    };

    if (!isNaN(MaxNum) && isElementVisible) {
      counter(0, MaxNum);
    }
  }, [MaxNumber, isElementVisible]);

  return (
    <div ref={elementRef} id="list-item">
      {count}</div>
  );
}

export const useIsElementVisible = (target: React.RefObject<HTMLElement>) => {
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

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    };
  }, [target]);

  return isVisible;
};
