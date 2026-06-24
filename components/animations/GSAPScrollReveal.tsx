"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale-in" | "stagger-cards";
  delay?: number;
  duration?: number;
  distance?: number;
  staggerAmount?: number;
}

export default function GSAPScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 1,
  distance = 50,
  staggerAmount = 0.1,
}: GSAPScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !ref.current) return;

    const element = ref.current;
    const childElements = Array.from(element.children);

    const animations = {
      "fade-up": {
        initial: { opacity: 0, y: distance },
        final: { opacity: 1, y: 0 },
      },

      "fade-left": {
        initial: { opacity: 0, x: distance },
        final: { opacity: 1, x: 0 },
      },

      "fade-right": {
        initial: { opacity: 0, x: -distance },
        final: { opacity: 1, x: 0 },
      },

      "scale-in": {
        initial: {
          opacity: 0,
          scale: 0.8,
          y: 20,
        },
        final: {
          opacity: 1,
          scale: 1,
          y: 0,
        },
      },

      "stagger-cards": {
        initial: {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        final: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
      },
    };

    const selected = animations[animation];

    let tween: gsap.core.Tween;

    if (
      animation === "stagger-cards" &&
      childElements.length > 0
    ) {
      gsap.set(childElements, selected.initial);

      tween = gsap.to(childElements, {
        ...selected.final,
        duration,
        delay,
        stagger: staggerAmount,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    } else {
      gsap.set(element, selected.initial);

      tween = gsap.to(element, {
        ...selected.final,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }

    return () => {
      tween?.kill();
    };
  }, [
    animation,
    delay,
    duration,
    distance,
    staggerAmount,
    isClient,
  ]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0 }}
    >
      {children}
    </div>
  );
}

interface ScrollAnimationConfig {
  initial: gsap.TweenVars;
  animation: gsap.TweenVars;
  scrollStart?: string;
  scrollEnd?: string;
  toggleActions?: string;
  once?: boolean;
}

export function createScrollAnimation(
  selector: string,
  config: ScrollAnimationConfig
) {
  if (typeof window === "undefined") return;

  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    gsap.set(element, config.initial);

    gsap.to(element, {
      ...config.animation,
      scrollTrigger: {
        trigger: element,
        start: config.scrollStart || "top 80%",
        end: config.scrollEnd || "bottom 20%",
        toggleActions:
          config.toggleActions ||
          "play none none none",
        once: config.once ?? true,
      },
    });
  });
}