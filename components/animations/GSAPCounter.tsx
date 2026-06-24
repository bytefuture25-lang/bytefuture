"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPCounterProps {
  targetNumber: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  enableScrollTrigger?: boolean;
  formatNumber?: (num: number) => string;
}

export default function GSAPCounter({
  targetNumber,
  suffix = "+",
  prefix = "",
  duration = 2,
  className = "",
  enableScrollTrigger = true,
  formatNumber = (num: number) => Math.round(num).toString(),
}: GSAPCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const [displayNumber, setDisplayNumber] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const animationStarted = useRef(false);

  useEffect(() => {
    setIsClient(typeof window !== "undefined");
  }, []);

  useEffect(() => {
    if (!isClient || !ref.current) return;

    const element = ref.current;

    const startAnimation = () => {
      if (animationStarted.current) return;

      animationStarted.current = true;

      gsap.to(
        { progress: 0 },
        {
          progress: 1,
          duration,
          ease: "power2.out",
          onUpdate: function () {
            const currentValue = Math.floor(
              this.progress() * targetNumber
            );

            setDisplayNumber(currentValue);
          },
        }
      );
    };

    if (enableScrollTrigger) {
      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        once: true,
        onEnter: startAnimation,
      });
    } else {
      startAnimation();
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) =>
        trigger.kill()
      );
    };
  }, [
    targetNumber,
    duration,
    enableScrollTrigger,
    isClient,
  ]);

  return (
    <span
      ref={ref}
      className={className}
    >
      {prefix}
      {formatNumber(displayNumber)}
      {suffix}
    </span>
  );
}