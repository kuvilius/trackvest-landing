"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: 1 | 2 | 3 | 4;
  immediate?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export default function Reveal({
  children,
  delay,
  immediate = false,
  className = "",
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(immediate);

  useEffect(() => {
    if (immediate || shown) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [immediate, shown]);

  const delayClass = delay ? ` d${delay}` : "";
  return (
    <div
      ref={ref}
      className={`reveal${shown ? " in" : ""}${delayClass} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
