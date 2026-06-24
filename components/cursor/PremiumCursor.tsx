"use client";

import { useEffect, useState } from "react";
import CursorDot from "./CursorDot";
import CursorRing from "./CursorRing";

export default function PremiumCursor() {
  const [enabled, setEnabled] = useState(false);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [ring, setRing] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0
    ) {
      return;
    }

    setEnabled(true);

    const move = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let frame: number;

    const animate = () => {
      setRing((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.55,
        y: prev.y + (mouse.y - prev.y) * 0.55,
      }));

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frame);
  }, [mouse, enabled]);

  if (!enabled) return null;

  return (
    <>
      <CursorRing
        x={ring.x}
        y={ring.y}
      />

      <CursorDot
        x={mouse.x}
        y={mouse.y}
      />
    </>
  );
}