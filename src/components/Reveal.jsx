import { useEffect, useRef, useState } from "react";

/**
 * Wraps any element and fades/slides it into view the first time it
 * scrolls into the viewport. Usage:
 *   <Reveal><h2>My Heading</h2></Reveal>
 */
export default function Reveal({ children, delay = 0, from = "bottom", className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el); // only animate once
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const startPosition = {
    top: "-translate-y-6",
    bottom: "translate-y-6",
    left: "-translate-x-6",
    right: "translate-x-6",
  }[from];

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${startPosition}`
      } ${className}`}
    >
      {children}
    </div>
  );
}