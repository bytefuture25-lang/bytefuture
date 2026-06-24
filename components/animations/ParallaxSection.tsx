"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function ParallaxSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    gsap.to(el, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return <div ref={ref}>{children}</div>;
}