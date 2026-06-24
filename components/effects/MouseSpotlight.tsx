"use client";

import { useEffect, useRef, useState } from "react";

interface SpotlightPosition {
  x: number;
  y: number;
  active: boolean;
}

export default function MouseSpotlight() {
  const [position, setPosition] = useState<SpotlightPosition>({
    x: 0,
    y: 0,
    active: false,
  });

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const animationFrameRef = useRef<number | null>(null);

  const lastPositionRef = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    setIsTouchDevice(isTouch);
  }, []);

  const interpolatePosition = (
    targetX: number,
    targetY: number
  ) => {
    const speed = isTouchDevice ? 0.05 : 0.1;

    lastPositionRef.current.x +=
      (targetX - lastPositionRef.current.x) * speed;

    lastPositionRef.current.y +=
      (targetY - lastPositionRef.current.y) * speed;

    setPosition({
      x: lastPositionRef.current.x,
      y: lastPositionRef.current.y,
      active: true,
    });
  };

  useEffect(() => {
    if (isTouchDevice) return;

    let throttleTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }

      throttleTimeout = setTimeout(() => {
        if (animationFrameRef.current !== null) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          interpolatePosition(e.clientX, e.clientY);
        });
      }, 16);
    };

    const handleMouseLeave = () => {
      setPosition((prev) => ({
        ...prev,
        active: false,
      }));
    };

    const handleMouseEnter = () => {
      setPosition((prev) => ({
        ...prev,
        active: true,
      }));
    };

    const container = containerRef.current;

    if (container) {
      container.addEventListener(
        "mousemove",
        handleMouseMove
      );

      container.addEventListener(
        "mouseleave",
        handleMouseLeave
      );

      container.addEventListener(
        "mouseenter",
        handleMouseEnter
      );
    }

    return () => {
      if (container) {
        container.removeEventListener(
          "mousemove",
          handleMouseMove
        );

        container.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );

        container.removeEventListener(
          "mouseenter",
          handleMouseEnter
        );
      }

      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isTouchDevice]);

  const getSpotlightGradient = () => {
    return `radial-gradient(
      circle at ${position.x}px ${position.y}px,
      hsla(330,100%,60%,0.35) 0%,
      hsla(280,100%,45%,0.15) 40%,
      transparent 70%
    )`;
  };

  const getInnerGradient = () => {
    return `radial-gradient(
      circle at ${position.x}px ${position.y}px,
      hsla(330,100%,70%,0.18) 0%,
      transparent 50%
    )`;
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
      style={{
        display: isTouchDevice ? "none" : "block",
      }}
    >
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: position.active ? 1 : 0,
          background: getSpotlightGradient(),
          filter: "blur(60px)",
          willChange: "opacity, background",
        }}
      />

      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: position.active ? 0.5 : 0,
          background: getInnerGradient(),
          filter: "blur(100px)",
        }}
      />

      {position.active && (
        <div
          className="absolute rounded-full"
          style={{
            left: position.x - 180,
            top: position.y - 180,
            width: 360,
            height: 360,
            background:
              "radial-gradient(circle, rgba(255,79,163,.15), transparent 70%)",
            filter: "blur(45px)",
            animation: "spotlightPulse 3s ease-in-out infinite",
          }}
        />
      )}

      <style jsx>{`
        @keyframes spotlightPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.35;
          }

          50% {
            transform: scale(1.12);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}