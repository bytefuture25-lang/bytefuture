"use client";

interface CursorDotProps {
  x: number;
  y: number;
}

export default function CursorDot({
  x,
  y,
}: CursorDotProps) {
  return (
    <div
      className="
      fixed
      top-0
      left-0
      w-2
      h-2
      rounded-full
      bg-pink-500
      pointer-events-none
      z-[9999]
      "
      style={{
        transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`,
        boxShadow: "0 0 18px rgba(236,72,153,.8)",
      }}
    />
  );
}