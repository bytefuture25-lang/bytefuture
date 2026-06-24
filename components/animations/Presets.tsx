import { Variants } from "framer-motion";

// Enhanced animation presets for premium SaaS experience

export const animationPresets = {
  // Premium fade up with smooth easing
  fadeUp: {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  } as Variants,

  // Premium fade left with glow effect
  fadeLeft: {
    hidden: {
      opacity: 0,
      x: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  } as Variants,

  // Premium fade right with glow effect
  fadeRight: {
    hidden: {
      opacity: 0,
      x: -60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  } as Variants,

  // Premium scale in with blur effect
  scaleIn: {
    hidden: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  } as Variants,

  // Stagger container for grouped animations
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        ease: "easeOut",
      },
    },
  } as Variants,

  // Enhanced hover lift with glow
  hoverLift: {
    rest: {
      y: 0,
      scale: 1,
      boxShadow: "0 0 0 rgba(255, 79, 163, 0)",
      borderColor: "rgba(255, 255, 255, 0.06)",
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(255, 79, 163, 0.15)",
      borderColor: "rgba(255, 79, 163, 0.3)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  } as Variants,

  // Premium text reveal animation
  textReveal: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  } as Variants,

  // Enhanced card animation with sophisticated transitions
  cardReveal: {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      rotateX: 5,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  } as Variants,

  // Gradient text animation
  gradientText: {
    initial: {
      backgroundPosition: "-200% 0",
    },
    animate: {
      backgroundPosition: "200% 0",
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatDelay: 5,
        ease: "linear",
      },
    },
  } as Variants,
};