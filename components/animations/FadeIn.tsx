"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { animationPresets } from "./Presets";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  animation?: "fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn";
  viewport?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  animation = "fadeUp",
  viewport = true,
}: FadeInProps) {
  const getVariants = () => {
    switch (animation) {
      case "fadeLeft":
        return animationPresets.fadeLeft;

      case "fadeRight":
        return animationPresets.fadeRight;

      case "scaleIn":
        return animationPresets.scaleIn;

      case "fadeUp":
      default:
        return animationPresets.fadeUp;
    }
  };

  const getDirectionVariants = (): Variants => {
    switch (direction) {
      case "left":
        return animationPresets.fadeLeft;

      case "right":
        return animationPresets.fadeRight;

      case "down":
        return {
          hidden: {
            opacity: 0,
            y: -40,
            scale: 0.95,
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94] as any,
            },
          },
        } as Variants;

      case "up":
      default:
        return getVariants();
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport ? { once: true, amount: 0.2 } : undefined}
      variants={getDirectionVariants()}
      className={className}
      transition={{
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}