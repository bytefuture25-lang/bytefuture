"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#0D0D0D]" />

      {/* Aurora Blob 1 */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] rounded-full"
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(255,79,163,0.20) 0%, rgba(255,79,163,0.08) 40%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      {/* Aurora Blob 2 */}
      <motion.div
        className="absolute -bottom-[20%] -right-[10%] w-[900px] h-[900px] rounded-full"
        animate={{
          x: [0, -100, 0],
          y: [0, 70, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(168,85,247,0.07) 40%, transparent 70%)",
          filter: "blur(140px)",
        }}
      />

      {/* Aurora Blob 3 */}
      <motion.div
        className="absolute top-[30%] left-[40%] w-[700px] h-[700px] rounded-full"
        animate={{
          x: [0, 60, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.12) 0%, rgba(168,85,247,0.06) 50%, transparent 75%)",
          filter: "blur(110px)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Noise Layer */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}