"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMove
      );
  }, []);

  return (
    <div
      className="
      fixed
      pointer-events-none
      z-0

      w-[500px]
      h-[500px]

      rounded-full

      bg-pink-500/10

      blur-[150px]

      transition-transform
      duration-300
      "
      style={{
        left: position.x - 250,
        top: position.y - 250,
      }}
    />
  );
}