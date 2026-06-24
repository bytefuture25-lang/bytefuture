"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerAmount?: number;
  distance?: number;
  duration?: number;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale-in";
}

export default function StaggerReveal({
  children,
  className = "",
  staggerAmount = 0.1,
  distance = 40,
  duration = 1,
  animation = "fade-up",
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const childrenArray = Array.from(element.children);

    if (childrenArray.length === 0) return;

    gsap.set(childrenArray, {
      opacity: 0,
      y:
        animation === "fade-up"
          ? distance
          : animation === "scale-in"
          ? 20
          : 0,

      x:
        animation === "fade-left"
          ? distance
          : animation === "fade-right"
          ? -distance
          : 0,

      scale: animation === "scale-in" ? 0.8 : 1,

      filter:
        animation === "scale-in"
          ? "blur(5px)"
          : "blur(0px)",
    });

    const tween = gsap.to(childrenArray, {
      opacity: 1,

      y:
        animation === "fade-up" ||
        animation === "scale-in"
          ? 0
          : undefined,

      x:
        animation === "fade-left" ||
        animation === "fade-right"
          ? 0
          : undefined,

      scale:
        animation === "scale-in"
          ? 1
          : undefined,

      filter: "blur(0px)",

      duration,
      ease: "power3.out",
      stagger: staggerAmount,

      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    return () => {
      tween.kill();
    };
  }, [
    staggerAmount,
    distance,
    duration,
    animation,
  ]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}