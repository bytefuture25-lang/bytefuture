"use client";

import {
  ReactNode,
  useEffect,
  useRef,
} from "react";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { useCursor } from "@/components/interaction/CursorContext";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  disabled?: boolean;
}

export default function Magnetic({
  children,
  className = "",
  strength = 20,
  disabled = false,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { setVariant } = useCursor();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 250,
    damping: 20,
    mass: 0.5,
  });

  const springY = useSpring(mouseY, {
    stiffness: 250,
    damping: 20,
    mass: 0.5,
  });

  useEffect(() => {
    if (disabled) return;

    const element = ref.current;

    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();

      const x =
        e.clientX - rect.left - rect.width / 2;

      const y =
        e.clientY - rect.top - rect.height / 2;

      mouseX.set((x / (rect.width / 2)) * strength);
      mouseY.set((y / (rect.height / 2)) * strength);
    };

    const handleEnter = () => {
      setVariant("button");
    };

    const handleLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
      setVariant("default");
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseenter", handleEnter);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseenter", handleEnter);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, [
    mouseX,
    mouseY,
    strength,
    disabled,
    setVariant,
  ]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        x: springX,
        y: springY,
        display: "inline-block",
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  );
}