"use client";

interface CursorRingProps {
  x: number;
  y: number;
}

export default function CursorRing({
  x,
  y,
}: CursorRingProps) {
  return (
    <div
      className="
      fixed
      top-0
      left-0
      w-10
      h-10
      rounded-full
      border
      border-pink-500/60
      pointer-events-none
      z-[9998]
      transition-transform
      duration-150
      "
      style={{
        transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`,
        backdropFilter: "blur(3px)",
        boxShadow: "0 0 25px rgba(236,72,153,.25)",
      }}
    />
  );
}