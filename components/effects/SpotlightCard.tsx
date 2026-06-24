"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  hoverScale?: boolean;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(236,72,153,0.18)",
  hoverScale = true,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const touch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    setIsTouchDevice(touch);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    let timeout: ReturnType<typeof setTimeout> | null = null;

    const move = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();

      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!inside) {
        setIsHovered(false);
        return;
      }

      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => {
        setMouse({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });

        setIsHovered(true);
      }, 16);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);

      if (timeout) clearTimeout(timeout);
    };
  }, [isTouchDevice]);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-3xl ${className}`}
      style={{
        transform:
          hoverScale && isHovered
            ? "translateY(-6px) scale(1.02)"
            : "translateY(0) scale(1)",

        transition:
          "transform .35s ease, box-shadow .35s ease",

        boxShadow: isHovered
          ? "0 25px 60px rgba(236,72,153,.18)"
          : "0 12px 35px rgba(0,0,0,.25)",
      }}
    >
      {/* Spotlight */}

      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,

          background: `radial-gradient(
            circle 220px at ${mouse.x}px ${mouse.y}px,
            ${spotlightColor},
            transparent 75%
          )`,
        }}
      />

      {/* Glass */}

      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background: "rgba(255,255,255,.05)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,.10)",
        }}
      />

      {/* Border Glow */}

      <div
        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,

          boxShadow:
            "inset 0 0 30px rgba(236,72,153,.20),0 0 40px rgba(236,72,153,.15)",
        }}
      />

      {/* Content */}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}