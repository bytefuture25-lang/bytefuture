"use client";

import { motion } from "framer-motion";
import { animationPresets } from "./Presets";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function ParallaxSection({
  children,
  className = "",
}: ParallaxSectionProps) {
  return (
    <motion.div
      variants={animationPresets.fadeUp}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}